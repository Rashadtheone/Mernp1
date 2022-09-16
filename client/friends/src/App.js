import React, {useState} from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const  [friendName, setFriendName] = useState("");
  const [days, setDays ] = useState(0);

  const addToList = () => (
    Axios.post('http://localhost:3001/insert', {friendName: friendName, days: days})
  )
  
  return (
    <div className="App">
     <h1>CRUD Friend App</h1>
     <label>Friend Name:</label>
     <input type="text" onChange={(event) => {
      setFriendName(event.target.value)
     }}/>
     <label>Days Since I Called:</label>
     <input type="number" onChange={(event) => {
      setDays(event.target.value)
     }}/>

<button onClick={addToList}>Add To List</button>
    </div>
  );
}

export default App;
