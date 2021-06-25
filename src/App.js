import React, {useState} from "react";
import Header from "./components/Header/Header";
import Directory from "./components/Directory/Directory";
import './App.css';

function App() {
  const [search, setSearch] = useState("")
  return <div>
    <Header />
    <Directory 
      search = {search}
      setSearch = {setSearch}
    />
  </div>
}

export default App;
