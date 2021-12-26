import React from 'react';
import { Routes, Route } from "react-router-dom";
import Example from './Components/Example/Example';

function App() {
  return (
      <Routes>
        <Route path="/example" element={<Example />} />
      </Routes>
  );
}

export default App;
