import { PRESETS } from "./preset";



export type CriteriaScore = {
  criteriaId: string
  score: number
}

export type Option = {
  id: string
  name: string
  criteriaScores: CriteriaScore[]
}

export type Decision_Input = {
  title: string
  preset_id: string
  criteria: typeof PRESETS[0]['criteria']
  options: Option[]
}


const icePreset = PRESETS.find(p => p.id==="ice")!


export const Dummy_Decision: Decision_Input = {
  title: "Which laptop should I buy?",
  preset_id: "ice",
  criteria: icePreset.criteria,
  options: [{
    id: "macbook",
    name: "Macbook Air",
    criteriaScores: [
      {criteriaId:'impact', score:9},
      {criteriaId: 'confidence', score: 8},
      {criteriaId: 'ease', score: 7}
    ]
  },
  {
    id: 'dell',
      name: 'Dell XPS',
      criteriaScores: [
        { criteriaId: 'impact', score: 7 },
        { criteriaId: 'confidence', score: 6 },
        { criteriaId: 'ease', score: 8 },
      ]
  },
  {
    id: 'lenovo',
      name: 'Lenovo ThinkPad',
      criteriaScores: [
        { criteriaId: 'impact', score: 6 },
        { criteriaId: 'confidence', score: 7 },
        { criteriaId: 'ease', score: 9 },
      ]
  }
  ]

}