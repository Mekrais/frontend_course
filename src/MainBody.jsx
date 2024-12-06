import { useSelector } from "react-redux"
import SuperPeople from "./SuperPeople"
import PersonInput from "./PersonInput"

function MainBody() {
  const data = useSelector((state) => state.people)

  return (
    <>
      <PersonInput />
      <SuperPeople peeps={data} />
    </>
  )
}

export default MainBody;
