import { useState } from "react";
import type { Preset_ID } from "../data/preset";
import { PRESETS } from "../data/preset";

const InputForm = () => {


  const [title, setTitle] = useState("");
  const [presetId, setPresetId] useState<presetId>("ice");
  const [criteria, setCriteria] = useState(
    PRESETS.find(p => p.id == "ice")!.criteria
  )



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
        <select>
          <option value="ICE Framework"> ICE </option>
          <option value="SIMPLE"> Simple </option>
          <option value="Custon">Custom</option>
          <option value="Risk-Vs-Reward"> Risk-Vs-Reward Anaylsis</option>
        </select>
      </div>

    </div>
  )
}