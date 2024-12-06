import { useState } from "react"
import SuperPeople from "./SuperPeople"
import PersonInput from "./PersonInput"

function MainBody() {
  let peeps = [
    { name: "Batman", superpower: "Rich" },
    { name: "Superman", superpower: "Flying" },
    { name: "Wonder Woman", superpower: "Lasso of Truth" },
  ]

  const savePerson = (p) => {
      setData([...data, p])
  };

  const [data, setData] = useState(peeps)

  return (
    <>
      <PersonInput savePerson={savePerson} />
      <SuperPeople peeps={data} />
    </>
  )
}

export default MainBody;
