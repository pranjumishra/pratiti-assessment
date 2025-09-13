import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GetStarted from './pages/GetStarted';
import Templates from './pages/Templates';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  );
}

export default App;
