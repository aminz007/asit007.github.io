import Login from "../components/login"
import { useMoralis } from "react-moralis"

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  return (
    <div >
      {
        isAuthenticated ? (
          <p>
            You are Logged in
            <button onClick={logout}>Logout</button>
            </p>  
        )
        : (
          <Login/>
        )
      }
    </div>
  )
}
  
