import jwt from "jsonwebtoken"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const [isSigned, setIsSigned] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("lenjhelenan")
    if (typeof token === "undefined" || token === null || token === "") {
      setIsDone(true)
      return
    }
    const user = jwt.decode(token, process.env.JWT_SECRET)
    setToken(token)
    setIsSigned(true)
    setIsDone(true)
  }, [])

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        isSigned,
        setIsSigned,
        isDone,
        setIsDone,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
