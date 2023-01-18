import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
// import Header from './components/menu/Header';
import StartScreen from './components/startScreen/StartScreen';
import InfoPage from './components/infopage/InfoPage';
import Names from './components/names/Names';
import ColorGameType from './components/colorGameType/ColorGameType';
import About from './components/menu/About';
import Rules from './components/menu/Rules';
import PageNotFound from './components/PageNotFound/PageNotFound';
import TextTask from './components/Task/TextTask';
import GameTask from './components/Task/GameTask';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/names" element={<Names />} />
            <Route path="/gametype" element={<ColorGameType />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/texttask" element={<TextTask />} />
            <Route path="/gametask" element={<GameTask />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
