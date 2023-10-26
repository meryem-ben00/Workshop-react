import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbare from "./components/Navbare";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Patients from "./pages/Patients";
import Test from "./pages/Test";
<<<<<<< HEAD
import Principale from "./pages/addDoctor/Principale.jsx";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Navbare / >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Dashboard / > }
        /> <
        Route path = "/users/*"
        element = { < Users / > }
        /> <
        Route path = "/patients"
        element = { < Patients / > }
        /> <
        Route path = "/test"
        element = { < Test / > }
        /> <
        Route path = "/users/addDoctor"
        element = { < Principale / > }
        /> <
        Route path = "/SignIn"
        element = { < SignIn / > }
        /> <
        Route path = "/SignUp"
        element = { < SignUp / > }
        /> <
        /Routes> <
        /BrowserRouter> <
        /div>
    );
=======
import Osama from "./pages/Osama";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbare />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/test" element={<Test />} />
          <Route path="/osama" element={<Osama />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
>>>>>>> 641895def0afc5ec98bf21f713e6df620aafcd3e
}

export default App;