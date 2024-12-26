import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ExperienceDetail from './components/InterviewExperience/ExperienceDetail'
import MockInterviews from './components/IntervirePreperation/MockInterviews/MockInterviews'
import HrQuestions from './components/IntervirePreperation/HRquestions/HrQuestions'
import VirtualInterview from './components/IntervirePreperation/VirtualInterview/VirtualInterview'
import Puzzels from './components/IntervirePreperation/Puzzels/Puzzels'
import GroupDiscussions from './components/IntervirePreperation/GroupDiscussions/GroupDiscussions'
import TechnicalInterview from './components/IntervirePreperation/TechnicalInterview/TechnicalInterview'
import Programming from './components/Programming/Programming'
import Syllabus from './components/Syllabus/Syllabus'
import NotFound from './components/NotFound/NotFound'
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Interview_experience/:company' element={<ExperienceDetail />} />
        <Route path='/Interview_Preparation/Mock_Interviews' element={<MockInterviews />} />
        <Route path='/Interview_Preparation/HR_Questions' element={<HrQuestions />} />
        <Route path='/Interview_Preparation/Virtual_Interview' element={<VirtualInterview />} />
        <Route path='/Interview_Preparation/Puzzels' element={<Puzzels />} />
        <Route path='/Interview_Preparation/Technical_Interview' element={<TechnicalInterview />} />
        <Route path='/Interview_Preparation/Group_Discussions' element={<GroupDiscussions />} />
        <Route path='/Syllabus/:id' element={<Syllabus />} />
        <Route path='/Programming/:name' element={<Programming/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
