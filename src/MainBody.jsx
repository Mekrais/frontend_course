import { useSelector } from "react-redux"
import SuperPeople from "./SuperPeople"
import PersonInput from "./PersonInput"

function MainBody() {
  const data = useSelector((state) => state.people)

  return (
    <div className="space-y-6">
      <PersonInput />
      <SuperPeople peeps={data} />
    </div>
  )
}

export default MainBody;
