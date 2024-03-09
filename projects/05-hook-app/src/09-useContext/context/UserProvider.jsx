import { useState } from "react";
import { UserContext } from "./UserContext"

/* const user = {
    id: 123,
    name: "Efrain Garcia",
    email: "efraingarcia@correo.com"
} */

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
  return (
    //<UserContext.Provider value={{ hola: "mundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserProvider