import { Option, Decision_Input } from "./dummyData";

export type Option_Result = {
  optionId: string,
  optionName: string,
  finalScore: number,
  priority: "High" | "Medium" | "Low"
  rank: number
}

export type Decision_Result = {
  decisionName: string,
  result: Option_Result
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

  const weightedSum = criteria.reduce( )

}

