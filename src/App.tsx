import { Dummy_Decision } from "./data/dummyData"
import { calculateResults } from "./data/scoring"
import { useState } from "react"
import ResultsView from "./components/ResultsView"
import InputForm from "./components/InputForm"


function App() {

  const [appState, setAppState] = useState("input")
  
  return (
    <div>
      <h1>Decision Prioritiser</h1>
      {appState === "input" && <InputForm />}
      {appState === "results" && <ResultsView result={calculateResults(Dummy_Decision)} />}
    </div>
  )
}

export default App

