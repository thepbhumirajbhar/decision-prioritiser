import { useState } from "react";
import type { Preset_ID } from "../data/preset";
import { PRESETS } from "../data/preset";


const InputForm = () => {


  const [title, setTitle] = useState("");
  const [presetId, setPresetId] = useState<Preset_ID>("ice");
  const [criteria, setCriteria] = useState(
    PRESETS.find(p => p.id == "ice")!.criteria
  )


  // Option State: for user to add their custom options
  // options is an array where every option is an object
  // every option object has 3 things: id, name, criteriaScore
  const [options, setOptions] = useState([
    {id: "opt-1", name: "", criteriaScores: criteria.map(c => ({criteriaId: c.id, score: 5}))},
    {id: "opt-2", name: "", criteriaScores: criteria.map(c => ({criteriaId: c.id, score: 5}))},
  ])

  // If user wants to add more than 2 options:
  const handleAddOption = () => {
    // early return condition
    if(options.length >= 5) return 
    const newOption = {
      id: `opt-${options.length-1}`,
      name: "",
      criteriaScores: criteria.map(c => ({ criteriaId: c.id, score: 5 }))
    }
    setOptions([...options, newOption])
  }

  //REMOVE option function 
  const handleRemoveOption = (optionId: string) => {
    if (options.length <= 2) return
    setOptions(options.filter(o => o.id !== optionId))
  }

  




  const handlePresetChange = (newPresetId: Preset_ID) => {
    setPresetId(newPresetId)
    const selectedPreset = PRESETS.find(p => p.id == newPresetId)!
    setCriteria(selectedPreset.criteria)
  }

  // Weight slider logic
  const handleWeightChange = (newWeight: number, changedId: string ) => {
    const remainingWeight = 100 - newWeight;
    const otherCriteria = criteria.filter(c => c.id != changedId)
    const totalOtherWeight = otherCriteria.reduce((sum , c) => sum + c.weight, 0)

    const updated = criteria.map(c => {
      if (c.id == changedId) return { ...c, weight : newWeight}
      if (totalOtherWeight == 0) return { ...c, weight: remainingWeight/ otherCriteria.length}
      return { ...c, weight: Math.round((c.weight/totalOtherWeight)* remainingWeight)}
    }
    )
    setCriteria(updated)
  }


  return(
    <div>
      <h2> Let me help you DECIDE..!</h2>

      {/* Title Input */}
      <div>
        <label>What are you deciding..?</label>
        <input type="text" 
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>
      </div>


      {/* Preset Selector */}
      <div>
        <label>Scoring Framework</label>
        <select
           value={presetId} 
           onChange={(e) => handlePresetChange(e.target.value as Preset_ID)}>
          {PRESETS.map(preset => (
            <option key={preset.id} value={preset.id}>
            {preset.name}
            </option>
          ))}
        </select>
      </div>

      {/* Show Criteria on Screen */}
      <div>
        <label>Adjust Weights</label>
        {criteria.map((criterion) => (
          <div key = {criterion.id}>
            <span>{criterion.name}</span>
            <input
              value={criterion.weight}
              type="range"
              min={0}
              max={100}
              onChange={(e) => handleWeightChange(Number(e.target.value), criterion.id)}/>
            <span>{criterion.weight}%</span>
          </div>
        ))}
      </div>








    </div>
  )
}

export default InputForm;