
import {
  BoxIcon,
  CircleUser,
  Clipboard,
  NotebookPen,
  HandCoins,
  UserSearch,
  BarChart3,
  Network,
  AlarmClockCheck,
  AudioWaveform,
  TimerOff,
  SignalLow,
  SignalMedium,
  SignalHigh,
  LayoutList,
  Folder,
  Coins,
  KanbanSquare,
} from "lucide-react";


export const DahshboardRoutes = [
  {
    icon: BoxIcon,
    label: "Add product",
    href: "/add-",
  },
  {
    icon: Clipboard,
    label: "Reports",
    href: "/to be decided",
  },
  {
    icon: CircleUser,
    label: "Suppliers",
    href: "/to be decided",
  },
  {
    icon: HandCoins,
    label: "Vacancy",
    href: "/to be decided",
  },
];

export const humanResourseRoutes = [
  {
    icon: Network,
    label: "Org. structure",
    href: "/org-",
  },
  {
    icon: UserSearch,
    label: "Recuiremnt",
    href: "/to be decided",
  },
  {
    icon: NotebookPen,
    label: "Attendance",
    href: "/to be decided",
  },
  {
    icon: BarChart3,
    label: "Appraisal",
    href: "/to be decided",
  },
  {
    icon: HandCoins,
    label: "Payroll",
    href: "/to be decided",
  },
];


export const ProgramManagementRoutes = [
  {
    icon: LayoutList,
    label: "Program",
    href: "/program",
  },
  {
    icon: Folder,
    label: "Project",
    href: "/project",
  },
  {
    icon: Coins,
    label: "Budget",
    href: "/budget",
  },
  {
    icon: BarChart3,
    label: "Appraisal",
    href: "/apprisal",
  },
  {
    icon: KanbanSquare,
    label: "Chng. Management",
    href: "/change-management",
  },
];


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