import { useDispatch, useSelector } from "react-redux"
import { fetchPeople } from "./features/personslice"
import { useEffect } from "react"
import SuperPeople from "./SuperPeople"
import PersonInput from "./PersonInput"

function MainBody() {
  const dispatch = useDispatch()
  const people = useSelector((state) => state.people.data)
  const status = useSelector((state) => state.people.status)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPeople())
    }
  }, [dispatch, status])

  return (
    <div className="space-y-6">
      <PersonInput />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching data</p>}
      {status === "succeeded" && <SuperPeople peeps={people} />}
    </div>
  )
}

export default MainBody;
