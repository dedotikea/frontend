import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />

      {/*Public Routes */}
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
    </Routes>
  );
}

export default App;
