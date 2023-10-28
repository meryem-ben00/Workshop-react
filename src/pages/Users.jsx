import React from "react";
import { Routes, Route } from "react-router-dom";
import Doctor from "./userPages/Doctor";
import Administration from "./userPages/Administration";
function Users() {
  return (
    <div>
     
      <Routes>
        
        <Route path="doctor" element={<Doctor />} />
        <Route path="administration" element={<Administration />} />
      </Routes>
    </div>
  );
}

export default Users;
