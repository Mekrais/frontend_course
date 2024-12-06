import { useState } from "react";

function PersonInput({ savePerson }) {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const handleSave = () => {
    const p = { name, superpower: power };
    setName("");
    setPower("");
    savePerson(p);
  }

  return (
    <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Superpower" value={power} onChange={(e) => setPower(e.target.value)} />
        <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default PersonInput;
