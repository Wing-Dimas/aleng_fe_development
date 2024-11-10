import axios from "axios"
import jwt from "jsonwebtoken"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("")
  const [token, setToken] = useState("")
  const [isSigned, setIsSigned] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("lenjhelenan")
      if (typeof token === "undefined" || token === null || token === "") {
        setIsDone(true)
        return
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_API + "/auth/user/profile",
        config
      )
      setToken(token)
      setUserId(data.data.user.id)
      setIsSigned(true)
      setIsDone(true)
    } catch (error) {
      localStorage.removeItem("lenjhelenan")
      setToken("")
      setUserId("")
      setIsSigned(false)
      setIsDone(true)
    }
  }

  useEffect(() => {
    getProfile()
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
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
