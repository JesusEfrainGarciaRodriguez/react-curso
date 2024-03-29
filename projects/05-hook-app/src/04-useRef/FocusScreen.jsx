import { useRef } from "react"

const FocusScreen = () => {
    const inputRef = useRef();
    
    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={onClick}>
                Set focus
            </button>
        </>
    )
}

export default FocusScreen