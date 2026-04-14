import type { Decision_Result } from "../data/scoring";
import OptionCard from "./OptionCard";

type ResultViewProps = {
  result: Decision_Result
}

const ResultsView = ({result}: ResultViewProps) => {
  const {decisionName, topRecommendation, results} = result

  return (
    <div>
      <h1>{decisionName}</h1>
      <p>Top Recommendation: {topRecommendation}</p>
      <div>
        {results.map(optionResult => (
          <OptionCard 
             key={optionResult.optionId}
             result={optionResult}/>
        ))}
      </div>
    </div>

  )
}

export default ResultsView;