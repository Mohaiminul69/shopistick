import React from 'react';
import { Routes, Route } from "react-router-dom";
import Example from './Components/Example/Example';
import Shop from './Components/Shop/Shop';

function App() {
  return (
      <Routes>
        <Route path="/example" element={<Example />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
  );
}

export default App;
