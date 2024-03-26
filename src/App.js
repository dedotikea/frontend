import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import UserDashboard from './pages/UserDashboard';
import ProjectDashboard from './pages/ProjectDashboard';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />

      {/*Public Routes */}
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="user-dashboard" element={<UserDashboard />} />
      <Route path="project-dashboard" element={<ProjectDashboard />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
