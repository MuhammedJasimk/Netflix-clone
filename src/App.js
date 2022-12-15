import logo from './logo.svg';
import './App.css';
import  React  from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/rowpost/rowpost";
import { axios } from "axios";
import { action,original } from "./url";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner />
     <Rowpost url={original} title="Netflix Orginals"/>
     <Rowpost url={action} title="Action" isSmall/>
    </div>
  );
}

export default App;
