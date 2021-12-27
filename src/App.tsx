import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';
import Example from './Components/Example/Example';
import LoginRegister from './Components/LoginRegister/LoginRegister';

function App() {
  return (
      <Routes>
        <Route path="/example" element={<Example />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
      </Routes>
  );
}

export default App;
