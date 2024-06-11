import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import OnCadasterJob from './pages/OnCadasterJob'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnBoardingEmpresa from './pages/OnboardingEmpresa'

import { useCookies } from 'react-cookie'

const App =() => {

  const [ cookies] = useCookies(['user'])


  const authToken = cookies.AuthToken

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* {authToken && <Route path="/dashboard"  element={<Dashboard/>}/>} */}
      {<Route path="/dashboard"  element={<Dashboard/>}/>}
      {<Route path="/onBoarding" element={<Onboarding/>}/>}
      <Route path="/onBoardingEmpresa" element={<OnBoardingEmpresa/>}/>
      <Route path="/OnCadasterJob" element={<OnCadasterJob/>}/>
    </Routes>
    </BrowserRouter> 
   
  )
}

export default App
