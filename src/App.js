import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbare from "./components/Navbare";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Patients from "./pages/Patients";
import Test from "./pages/Test";
import Osama from "./pages/Osama";
import Settings from "./pages/Settings";
import Settings_password from "./pages/Settings_password";
import Settings_email from "./pages/Settings_email";
import RegisterPatient from "./pages/RegisterPatient";
import Principale from "./pages/addDoctor/Principale.jsx";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";


import Chat from "./pages/chat";
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
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings_password" element={<Settings_password />} />
          <Route path="/settings_email" element={<Settings_email />} />
          <Route path="/RegisterPatient" element={<RegisterPatient />} />
          <Route path="/chat" element={<Chat />} />
          <Route path = "/users/addDoctor" element = { < Principale /> }/>
          <Route path = "/SignIn" element = { < SignIn /> }/>
          <Route path = "/SignUp" element = { < SignUp /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
