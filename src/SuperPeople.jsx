import SuperPerson from "./SuperPerson"
import { useSelector } from "react-redux";

function SuperPeople() {
  const peeps = useSelector((state) => state.people);

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
