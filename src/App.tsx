import { Dummy_Decision } from "./data/dummyData"
import { calculateResults } from "./data/scoring"
import { useState } from "react"
import ResultsView from "./components/ResultsView"


function App() {

  const [appState] = useState("results")
  
  return (
    <div>
      <h1>Decision Prioritiser</h1>
      {appState === "results" && <ResultsView result={calculateResults(Dummy_Decision)} />}
    </div>
  )
}

export default App

