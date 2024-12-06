import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "./features/personslice";

function PersonInput() {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    const person = { name, superpower: power };
    dispatch(addPerson(person));
    setName("");
    setPower("");
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
