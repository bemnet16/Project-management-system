import { AlarmClockCheck, AudioWaveform, SignalHigh, SignalLow, SignalMedium, TimerOff } from "lucide-react"


export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
   {
    value: "completed",
    label: "Completed",
    icon:AlarmClockCheck,
  },
  {
    value: "inprogress",
    label: "In Progress",
    icon:AudioWaveform,
  },
  {
    value: "delayed",
    label: "Delayed",
    icon:TimerOff,
  },
 
]

export const priorities = [
  {
    label: "Low",
    value: "LOW",
    icon:SignalLow,
  },
  {
    label: "Medium",
    value: "MEDIUM",
    icon:SignalMedium,
  },
  {
    label: "High",
    value: "HIGH",
    icon:SignalHigh,
  },
]