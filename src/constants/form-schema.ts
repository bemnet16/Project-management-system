import { z } from "zod";

export const programformSchema = z.object({
  programname: z.string({
    required_error: "program name must be at least 2 characters.",
  }),
  programmanager: z.string({
    required_error: "Please select managar for the program!",
  }),
  programtype: z.string({
    required_error: "Please select type of program!",
  }),
  programdescription: z.string({}),
  priority: z.string({
    required_error: "Please select the priority of",
  }),
  branch: z.string({
    required_error: "Please select branch for the program!",
  }),
  department: z.string({
    required_error: "Please select departemnet for the program!",
  }),
  programstate: z.string({
    required_error: "Please select departemnet for the program!",
  }),
  startdate: z.date({
    required_error: "A start date of program is required.",
  }),
  enddate: z.date({
    required_error: "End date of programme is required.",
  }),
  budgettype: z.string({ required_error: "Please select the type of budget" }),
  estimatedbudget: z.number({
    required_error: "Please enter the estimated budget",
  }),
  budgetallocation: z.string({
    required_error: "Please select the budget allocation method",
  }),
});

export const projectFormSchema = z.object({
  programname: z.string({
    required_error: "program name must be at least 2 characters.",
  }),
  programmanager: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  projectname: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  projectmanager: z.string({
    required_error: "Please select managar for the project!",
  }),
  projecttype: z.string({
    required_error: "Please select type of project!",
  }),
  projectId: z.string({
    required_error: "Please select type of project!",
  }),
  projectdescription: z.string({}),
  priority: z.string({
    required_error: "Please select the priority of",
  }),
  branch: z.string({
    required_error: "Please select branch for the project!",
  }),
  department: z.string({
    required_error: "Please select departemnet for the project!",
  }),
  projectstate: z.string({
    required_error: "Please select departemnet for the project!",
  }),
  evaluationmethod: z.string({}),
  startdate: z.date({
    required_error: "A start date of project is required.",
  }),
  enddate: z.date({
    required_error: "End date of Project is required.",
  }),
  budgettype: z.string({ required_error: "Please select the type of budget" }),
  estimatedbudget: z.number({
    required_error: "Please enter the estimated budget",
  }),
  budgetallocation: z.string({
    required_error: "Please select the budget allocation method",
  }),
  financecorrdinator: z.string({
    required_error: "Please select the budget allocation method",
  }),
});

export const phaseFormSchema = z.object({
  programname: z.string({
    required_error: "program name must be at least 2 characters.",
  }),
  programmanager: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  projectname: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  projectmanager: z.string({
    required_error: "Please select managar for the project!",
  }),
  pahsename: z.string({
    required_error: "phase name must be at least 2 characters.",
  }),
  phasetype: z.string({
    required_error: "Please select type of project!",
  }),
  phaseId: z.string({
    required_error: "Please select type of project!",
  }),
  projectdescription: z.string({}),
  priority: z.string({
    required_error: "Please select the priority of",
  }),
  branch: z.string({
    required_error: "Please select branch for the project!",
  }),
  department: z.string({
    required_error: "Please select departemnet for the project!",
  }),
  projectstate: z.string({
    required_error: "Please select departemnet for the project!",
  }),
  evaluationmethod: z.string({}),
  startdate: z.date({
    required_error: "A start date of project is required.",
  }),
  enddate: z.date({
    required_error: "End date of Project is required.",
  }),
  budgettype: z.string({ required_error: "Please select the type of budget" }),
  estimatedbudget: z.number({
    required_error: "Please enter the estimated budget",
  }),
  budgetallocation: z.string({
    required_error: "Please select the budget allocation method",
  }),
  financecorrdinator: z.string({
    required_error: "Please select the budget allocation method",
  }),
});

export const milestoneFormSchema = z.object({
  milestonename:  z.string({
    required_error: "milestone name must be at least 2 characters.",
  }),
  programname: z.string({
    required_error: "program name must be at least 2 characters.",
  }),
  projectname: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  phasename: z.string({
    required_error: "phase name must be at least 2 characters.",
  }),
  assignee: z.string({
    required_error: "phase name must be at least 2 characters.",
  }),
  budgettype: z.string({ required_error: "Please select the type of budget" }),

  estimatedbudget: z.number({
    required_error: "Please enter the estimated budget",
  }),
});

export const reportformSchema = z.object({
  programname: z.string({
    required_error: "program name must be at least 2 characters.",
  }),
  projectname: z.string({
    required_error: "project name must be at least 2 characters.",
  }),
  phasename: z.string({
    required_error: "phase name must be at least 2 characters.",
  }),
  milestone: z.string({
    required_error: "Please select milestone for the report!",
  }),
  module: z.string({
    required_error: "Please select module for the report!",
  }),
  task: z.string({
    required_error: "Please select task for the report!",
  }),
  activity: z.string({
    required_error: "Please select activity for the report!",
  }),
  description: z.string({
    required_error: "Please enter the description of the report!",
  }),
  sendto: z.string({
    required_error: "Please select the person to send the report to!",
  }),
  username: z.string({
    required_error: "Please enter your username!",
  }),
  email: z.string({
    required_error: "Please enter your email!",
  }),
  attachment: z.string({
    required_error: "Please attach the report!",
  }),
});


export const taskformSchema = z.object({
  taskname: z.string({
    required_error: "task name must be at least 2 characters.",
  }),
  priority: z.string({
    required_error: "Please select the priority of",
  }),
  module: z.string({
    required_error: "Please select module for the task!",
  }),
  isactive: z.string({
    required_error: "Please select the status of the task!",
  }),
  tasktype: z.string({
    required_error: "Please select type of task!",
  }),
  parenttask: z.string({
    required_error: "Please select the parent task!",
  }),
    departmnet: z.string({
    required_error: "Please select the department for the task!",
  }),
  assignee: z.string({
    required_error: "Please select the assignee for the task!",
  }),
  description: z.string({
    required_error: "Please enter the description of the task!",
  }),
  dependencytask: z.string({
    required_error: "Please select the dependency task!",
  }),
  dependencytype: z.string({
    required_error: "Please select the dependency type!",
  }),
  startdate: z.date({
    required_error: "A start date of task is required.",
  }),
  endedate: z.date({
    required_error: "End date of task is required.",
  }),
})