import SuperPerson from "./SuperPerson"
import { useSelector } from "react-redux";

function SuperPeople() {
  const peeps = useSelector((state) => state.people.data);

  if (!peeps || peeps.length === 0) {
    return <p className="text-gray-500 italic">No superpeople</p>
  }

  return (
    <ul className="space-y-4">
      {peeps.map((peep, i) => {
        return (
          <SuperPerson key={i} name={peep.name} superpower={peep.superpower} />
        );
      })}
    </ul>
  );
}

export default SuperPeople;
