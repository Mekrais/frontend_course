import { useDispatch } from "react-redux";
import { removePerson } from "./features/personslice";

function SuperPerson({ name, superpower }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePerson(name));
  };

  return (
    <li onClick={handleClick}>
      {name}: {superpower}
    </li>
  );
}

export default SuperPerson;
