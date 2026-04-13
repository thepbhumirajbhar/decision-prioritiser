import type { Option_Result } from "../data/scoring"

export type OptionCardProps = {
  result: Option_Result
}


const PRIORITY_THEMES = {
  High: {badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500'},
  Medium: { badge: 'bg-amber-100 text-amber-700', bar: 'bg-amber-400'},
  Low: {badge: 'bg-red-100 text-red-600', bar: 'bg-red-400'}
}


const OptionCard = ({result}: OptionCardProps) => {
  const {optionName, priority, rank, finalScore} = result

  //Calculation before rendering 
  const scorePercentage = (finalScore/10) * 100
  const theme = PRIORITY_THEMES[priority]


  return (
    <div className={`rounded-xl border p-4 mb-3 transition-all ${
        rank === 1 ? 'bg-emerald-50 border-emerald-200 ring-1 ring-emerald-100' : 'bg-white border-gray-200'
      }`}>
      <div className="flex justify-between items-center mb-3">
        <div className="lex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider" >#{rank}</span>
          <span className="text-base font-semibold text-gray-900">{optionName}</span>
        </div>
        
        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${theme.badge}`}>
          {priority}
        </span>
        
      </div>


    {/* Progress Bar Section */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-gray-200/50 rounded-full h-2.5 overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-500 ${theme.bar}`}
               style={{width:`${scorePercentage}%`}}>
        </div>
      </div>
      <div className="text-sm font-bold text-gray-700 tabular-nums">
         {finalScore.toFixed(1)} <span className="text-gray-400 font-normal">/ 10</span>
        </div>
      </div>
    </div>
  )
}

export default OptionCard