import { render, screen } from "@testing-library/react"
import HomePage from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en el componente HomePage', () => { 
    
    const user = {
        id: 1,
        name: "Fernando"
    }

    test('debe de mostrar el componente sin el usurio', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toBe("null")
    })

    test('dene de mostrar el component CON el usuario', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        )
        const smallTag = screen.getByLabelText("small")
        expect(smallTag.innerHTML).toBe(user.name)
        
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toContain(user.id.toString())
    })
})