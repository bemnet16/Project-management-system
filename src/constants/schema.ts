import { z } from "zod"

export const programSchema = z.object({
  id: z.string(),
  program: z.string(),
  programmanager: z.string(),
  budget: z.string(),
  time: z.string(),
  priority: z.string(),
  status: z.string(),
})

export type programDataTableType = z.infer<typeof programSchema>



export const projectSchema = z.object({
  id: z.string(),
  project: z.string(),
  initialbudget: z.string(),
  usedbudget: z.string(),
  allocatedtime: z.string(),
  remainingtime: z.string(),
  progressreport: z.number(),
  status: z.string(),
  priority: z.string(),
})


export type projectDataTableType = z.infer<typeof projectSchema>



export const phaseSchema = z.object({
  id: z.string(),
  phase: z.string(),
  initialbudget: z.string(),
  usedbudget: z.string(),
  allocatedtime: z.string(),
  remainingtime: z.string(),
  progressreport: z.number(),
  status: z.string(),
  priority: z.string(),
})


export type phaseDataTableType = z.infer<typeof phaseSchema>


export const milestoneSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  remainingtime: z.string(),
  milestonetype: z.string(),
  report: z.string(),
})


export type milestoneDataTableType = z.infer<typeof milestoneSchema>


export const reportSchema = z.object({
  id: z.string(),
  name: z.string(),
  sentdate: z.string(),
  senttime: z.string(),
  users: z.string(),
  attachment: z.string(),
  status: z.string(),
})


export type reportDataTableType = z.infer<typeof reportSchema>


