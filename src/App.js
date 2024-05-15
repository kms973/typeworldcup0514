import React ,{ useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Ranking } from './pages/ranking/ranking';
import { Header } from './components/header/Header';


export const RankingContext = createContext(null)

function App() {
  const [value, setValue] = useState([])

  return (
    <RankingContext.Provider value={{value, setValue}}>
  <Router>
    <Header/>
        
      
        <Routes>
          <Route exact path='/' element={<Navigate to="/main" />} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/ranking' element={<Ranking />} />
        </Routes>
        </Router>
    </RankingContext.Provider>
    
  );
}

export default App;