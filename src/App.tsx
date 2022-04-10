// config
import { paths } from './config/paths';
// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import { Register } from './routes/register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
