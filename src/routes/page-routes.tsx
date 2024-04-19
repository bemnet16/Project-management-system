import { Route, Routes } from "react-router-dom"

import PagesLayout from "@/pages/pages-layout"

import { AppraisalPage, BudgetPage, CreateMilestone, CreatePhase, CreateProgram, CreateProject, CreateReport, CreateTask, MilestonePage, PhasePage, ProgramPage, ProjectPage, ReportPage, TaskPage} from '../pages/page-exports'

const PageRoutes = () => {
  return (
    <Routes>
        <Route element={<PagesLayout />} >
           <Route path="/" element={<ProgramPage /> } />
           <Route path="/program" element={<ProgramPage /> } />
           <Route path="/program/create" element={<CreateProgram />} />

           <Route path="/program/:id" element={<ProjectPage />} />
           <Route path="/project/create" element={<CreateProject />} />

           <Route path="/project/:id" element={<PhasePage />} />
           <Route path="/phase/create" element={<CreatePhase />} />
           
           <Route path="/milestone" element={<MilestonePage/>} />
           <Route path="/milestone/create" element={<CreateMilestone />} />

           <Route path="/task" element={<TaskPage />} />
           <Route path="/task/create" element={<CreateTask />} /> 

           <Route path="/report/:type/:id" element={<ReportPage />} />
           <Route path="/report/create" element={<CreateReport />} />

           <Route path="/apprisal" element={<AppraisalPage />} />

           <Route path="/budget" element={<BudgetPage />} />

        </Route>
    </Routes>
  )
}

export default PageRoutes