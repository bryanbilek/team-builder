import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Members from "./Components/Members";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Bryan Bilek",
      email: "bbilek35@gmail.com",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      name: "Mitch Trubisky",
      email: "trubiscuitsNgravy@hotmail.com",
      role: "Quaterback"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>Members List</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members}/>
    </div>
  );
}

export default App;
