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
    <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        <input type="text" placeholder="Superpower" value={power} onChange={(e) => setPower(e.target.value)} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
    </div>
  );
}

export default PersonInput;
