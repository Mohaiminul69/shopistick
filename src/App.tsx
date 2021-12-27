import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';
import Example from './Components/Example/Example';
<<<<<<< HEAD
import Shop from './Components/Shop/Shop';
=======
import LoginRegister from './Components/LoginRegister/LoginRegister';
>>>>>>> f1a8f086f74856f80897d39f1b5b6434b5dd2e5c

function App() {
  return (
      <Routes>
        <Route path="/example" element={<Example />} />
<<<<<<< HEAD
        <Route path="/shop" element={<Shop />} />
=======
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
>>>>>>> f1a8f086f74856f80897d39f1b5b6434b5dd2e5c
      </Routes>
  );
}

export default App;
