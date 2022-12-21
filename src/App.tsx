import { Routes, Route } from "react-router-dom";

import Home from "components/Home";
import VerticalNavber from "components/Navbar/VerticalNavber";
import TextField from "components/TextField";

function App() {
  return (
    <div className="App">
      <VerticalNavber>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="text-field" element={<TextField />} />
          <Route path="chackbox" element={<p>333</p>} />
        </Routes>
      </VerticalNavber>
    </div>
  );
}

export default App;
