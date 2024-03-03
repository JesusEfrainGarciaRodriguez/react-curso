import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Efrain",
        email: "efrain@email.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log("useEffect email")
    }, [email]);

    useEffect(() => {
        console.log("formState");
        
        return 
    }, [email]);

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                username === "Efrain2" && <Message />
            }
        </>
    );
};

export default SimpleForm;
