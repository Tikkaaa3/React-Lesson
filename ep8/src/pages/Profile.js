import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile"

export const Profile = () => {
  const {username} = useContext(AppContext)
    return <div>Profile, name is {username}
      <ChangeProfile />
    </div>

}

