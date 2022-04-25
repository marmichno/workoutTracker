// default css
import './index.css';
// config
import { paths } from './config/paths';
// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// components
import { ProtectedRoutes } from './routes/defaultRoutes/protectedRoutes/ProtectedRoutes';
import { Register } from './routes/register/Register';
import { Login } from './routes/login/Login';
import { UserDashboard } from './routes/userDashboard/UserDashboard';
import { ExercisesMgt } from './routes/exercisesMgt/ExercisesMgt';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.login} element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={paths.dashboard} element={<UserDashboard />} />
          <Route path={paths.exercisesMgt} element={<ExercisesMgt />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
