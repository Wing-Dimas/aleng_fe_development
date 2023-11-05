import "@styles/globals.css"
import { UserProvider } from "@utils/useUser"
import { Toaster } from "react-hot-toast"
import "react-loading-skeleton/dist/skeleton.css"

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </UserProvider>
  )
}
