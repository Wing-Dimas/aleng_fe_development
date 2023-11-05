import { useContext } from "react"
import { UserContext } from "./useUser"
import Redirector from "@pages/redirector"

const withAuth = (Component, role = "") => {
  const Auth = (props) => {
    const user = useContext(UserContext)
    if (!user.isDone) {
      return <div>Authenticating...</div>
    } else if (user.isSigned && role !== "portal") {
      return <Component {...props} />
    } else if (!user.isSigned && role === "portal") {
      return <Component {...props} />
      // } else if (!user.isSigned && role === "user") {
      //   return <Redirector to="/login" />
    } else {
      return <Redirector />
    }
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withAuth
