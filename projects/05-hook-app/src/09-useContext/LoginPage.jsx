import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage:</h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>

      <button 
        aria-label="button"
        className="btn btn-primary"
        onClick={() => setUser({id: 123, name: "Efrain", email: "efrain@mail.com"})}  
      >
        Establecer usuario
      </button>
    </>
  )
}

export default LoginPage