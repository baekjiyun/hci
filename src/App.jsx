import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RadioList from './pages/RadioList';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#A3BDED] to-[#6991C7] flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<RadioList />} />
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
