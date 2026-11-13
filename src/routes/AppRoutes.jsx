import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../features/dashboard/components/LoginPage.jsx'
import DashboardPage from '../features/dashboard/pages/DashboardPage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}

export default AppRoutes
