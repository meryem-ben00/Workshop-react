import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbare from "./components/Navbare";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Patients from "./pages/Patients";
import Test from "./pages/Test";
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
}

export default App;
