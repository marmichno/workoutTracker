// config
import { paths } from "./config/paths";
// router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// components
import { Register } from "./routes/register/Register";
import { Login } from "./routes/login/Login";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.login} element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
