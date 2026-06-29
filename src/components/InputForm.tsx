import { useState } from "react";
import type { Preset_ID } from "../data/preset";
import { PRESETS } from "../data/preset";


const InputForm = () => {


  const [title, setTitle] = useState("");
  const [presetId, setPresetId] = useState<Preset_ID>("ice");
  const [criteria, setCriteria] = useState(
    PRESETS.find(p => p.id == "ice")!.criteria
  )

  const handlePresetChange = (newPresetId: Preset_ID) => {
    setPresetId(newPresetId)
    const selectedPreset = PRESETS.find(p => p.id == newPresetId)!
    setCriteria(selectedPreset.criteria)
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
              max={100}/>
            <span>{criterion.weight}%</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default InputForm;