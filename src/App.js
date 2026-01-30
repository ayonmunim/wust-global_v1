// import logo from './logo.svg';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// This works if your file is at: src/components/home/ProgramTiles.jsx
// import ProgramTiles from "@/components/home/ProgramTiles";import Career from './components/Career';
import Career from './components/Career';
import CSDegree from './components/CSDegree';
import ITDegree from './components/ITDegree';
import BITDegree from './components/BITDegree';
import MBADegree from './components/MBADegree';
import HSDegree from './components/HSDegree';
import Program from './components/Program';
import School from './components/School';
import Accreditation from './components/Accreditation';
import Advice from './components/Advice';
import SchoolHero from './components/SchoolHero';
// import SchoolHerov2 from './components/SchoolHerov2';



function App() {
  return (
    <>
    {/* <ProgramTiles/> */}
    <SchoolHero/>
    {/* <SchoolHerov2/> */}
    <Program/>
    <School/>
    <Advice/>
    <Career/>
    <Accreditation/>
    <CSDegree/>
    <ITDegree/>
    <BITDegree/>
    <MBADegree/>
    <HSDegree/>
    </>
  );
}

export default App;




