import type { Option, Decision_Input } from "./dummyData";

export type Option_Result = {
  optionId: string,
  optionName: string,
  finalScore: number,
  priority: "High" | "Medium" | "Low"
  rank: number
}

export type Decision_Result = {
  decisionName: string,
  topRecommendation: string,
  results: Option_Result[]
}

function getScoreOfCriteria (option: Option, criteriaId: string): number {
  //to get the score of the criteria inserted by the user/in the dummydata
  const criteriaScore = option.criteriaScores.find(cs => cs.criteriaId === criteriaId)
  return criteriaScore ? criteriaScore.score : 0
}

function getPriority(score: number): "High" | "Medium" | "Low"{
  if (score >= 7) return "High"
  if (score >= 4) return "Medium"
  return "Low"
}


function scoreOfOption (option:Option, criteria: Decision_Input['criteria'] ): number {

  //* FINAL SCORE = WEIGHTED SUM / TOTAL SUM

  const totalWeight = criteria.reduce((sum, c)=> sum + c.weight, 0)

  const weightedSum = criteria.reduce((sum, criteriaItem)=>{
    const score = getScoreOfCriteria(option, criteriaItem.id)
    return sum + (score * criteriaItem.weight)
  },0)

  return Math.round((weightedSum/totalWeight)*10)/10

}


export function calculateResults(decision: Decision_Input): Decision_Result{
  const scored = decision.options.map(option => ({
    optionId :option.id,
    optionName : option.name,
    finalScore : scoreOfOption(option, decision.criteria),
  }))

  const sortedList = [...scored].sort((a,b)=> b.finalScore - a.finalScore)

  const results: Option_Result[] = sortedList.map((item, index) => ({
    ...item,
    priority: getPriority(item.finalScore),
    rank: index+1,
  }))

  return {
    decisionName: decision.title,
    topRecommendation: results[0].optionName,
    results

  }
}

