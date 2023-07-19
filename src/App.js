import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout';
import LevelPage from './Pages/LevelPage';
import ProblemPage from './Pages/ProblemPage';
import RefactoringPage from './Pages/RefactoringPage';
import WrongPage from './Pages/WrongPage';
import RankPage from './Pages/RankPage';
const App = () => {
  window.id = "wkwk0120@gmail.com"
  
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<SignInPage />} />
         <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Layout><HomePage /></Layout>} /> 
        <Route path="/rank" element={<RankPage />} /> 
        <Route path="/wrong" element={<WrongPage />} /> 
        <Route path="/level/:level" element={<LevelPage />} />
        <Route path="/level/:level/:p_id" element={<ProblemPage />} />
        <Route path="/level/:level/:p_id/refactoring" element={<RefactoringPage />} />
      </Routes>
    </Router>
  );
};

export default App;
