import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import users from "./Data.json";
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search User...." data={users} />
    </div>
  );
}

export default App;