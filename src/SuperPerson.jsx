import { useDispatch } from "react-redux";
import { removePerson } from "./features/personslice";

function SuperPerson({ name, superpower }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePerson(name));
  };

  return (
    <li onClick={handleClick} className="flex justify-between items-center p-4 border border-gray-200 rounded hover:shadow-md">
      <span className="font-semibold">{name}</span>
      <span className="italic text-gray-500">{superpower}</span>
    </li>
  );
}

export default SuperPerson;
