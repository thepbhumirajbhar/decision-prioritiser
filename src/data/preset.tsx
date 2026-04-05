export type Criterion = {
  id: string
  name: string
  weight: number 
  description: string
}

export type Preset = {
  id: string;
  name: string;
  description: string;
  criteria: Criterion[]
}

export type Preset_ID = 'ice' | 'simple' | 'custom' | 'risk-vs-reward'




export const PRESETS: Preset[] = [
  {
    id: "ice",
    name: "ICE",
    description: "Best FOr general decisions- Impact, Confidence, Ease",
    criteria: [
      {id: "impact", name: "Impact", weight: 40, description: "kitna fark padega"},
      {id: "confidence", name: "Confidence", weight: 30, description: "how aure you are?"},
      {id: "ease", name: 'Ease', weight: 30, description: "how easy it is to do?"}
    ]
  },
  {
    id: "simple",
    name: "Simple Weighted",
    description: "Best for personal decisions — job, city, purchase",
    criteria: [
      {id: "cost", name:"Cost", weight: 30, description: "how affordable it is"},
      {id: "quality", name: "Quality", weight: 30, description: "how good it is?"},
      {id: "time", name: "Time", weight: 20, description: "how much time doesit consumes"},
      {id: "convenience", name: "Convenience", weight: 20, description: "how convenient it is?"}
    ]
  },
  {
    id: "risk-vs-reward",
    name: "Risk vs Reward",
    description: "Best for high-stakes decisions — career, investment",
    criteria: [
      { id: 'upside', name: 'Upside', weight: 35, description: 'What if it works?' },
      { id: 'risk', name: 'Risk', weight: 35, description: 'What if it fails?' },
      { id: 'time', name: 'Time to result', weight: 15, description: 'measures opportunity cost' },
      { id: 'reversibility', name: 'Reversibility', weight: 15, description: 'Kya yeh decision undo ho sakta hai?' },
    ]
  },
  {
    id: "custom",
    name: "Custom",
    description: "Define your own criteria and weights",
    criteria: []
  }
]

export const DEFAULT_PRESET: Preset_ID = "ice"
