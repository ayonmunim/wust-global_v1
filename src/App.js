// import logo from './logo.svg';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from './components/Career';
import Degree from './components/Degree';
import Program from './components/Program';
import School from './components/School';

function App() {
  return (
    <>
    <Degree/>
    <School/>
    <Program/>
    <Career/>
    </>
  );
}

export default App;




