import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RadioList1 from "./pages/RadioList1";
import RadioList2 from "./pages/RadioList2";
import RadioList3 from "./pages/RadioList3";
import RadioList4 from "./pages/RadioList4";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#A3BDED] to-[#6991C7] flex flex-col items-center justify-center">
        <Routes>
          <Route path="/1" element={<RadioList1 />} />
          <Route path="/2" element={<RadioList2 />} />
          <Route path="/3" element={<RadioList3 />} />
          <Route path="/4" element={<RadioList4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// // src/App.js

// import React from 'react';
// import AudioPlayerComponent from './components/AudioPlayerComponent';

// function App() {
//   return (
//     <div className="App">
//       <h1>오디오 플레이어 예제</h1>
//       <AudioPlayerComponent />
//     </div>
//   );
// }

// export default App;
