import { useState } from "react";
function App() {

  const [name, setName] = useState("Zeki")
  const [friends, setFriends] = useState(["Zeki", "Fikret"])
  const [adress, setAdress] = useState({title:"Istanbul", zip:25256})

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <button onClick={()=> setName("Ahmet")}>Click me!</button>

      <hr/>

      <br>
      </br>


      <h2>Friends</h2>
      {friends.map((friend, key)=>(
        <div key={key}>{friend}</div>
      ))}

      <br/>
      <button onClick={()=> setFriends([...friends, "Ayşe"])}>
        Add new friends
      </button>
      <br/>

      <br/>

      <h2>Adress</h2>
      <div>
        {adress.title} {adress.zip}
      </div>
      <button onClick={()=>setAdress({...adress, title:"Ankara"})}>
        Adress change
      </button>

    </div>
  );
}

export default App;
