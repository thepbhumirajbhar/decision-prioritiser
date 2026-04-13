import { Dummy_Decision } from "./data/dummyData"
import OptionCard from "./components/OptionCard"
import { calculateResults } from "./data/scoring"


function App() {


  const resultsData = calculateResults(Dummy_Decision)


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {resultsData.decisionName}
          </h1>
          <p className="text-gray-600 m-4">Top Pick: <span className="font-bold text-emerald-800">{resultsData.topRecommendation}</span> </p>
        </header>

        <main>
          {resultsData.results.map((item) => (
            <OptionCard key={item.optionId} result={item} />
          ))}
        </main>


        
      </div>
    </div>
  )
}

export default App

