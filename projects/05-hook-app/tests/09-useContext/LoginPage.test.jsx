import { fireEvent, render, screen } from "@testing-library/react"
import LoginPage from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en el component LoginPage', () => { 
    const user = {
        id: 1,
        name: "Fernando"
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toBe("null")
    })   

    test('dene de mostrar el component CON el usuario', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <LoginPage />
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toContain(user.id.toString())
    }) 

    test('debe ', () => { 
        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )
        
        const setUserButton = screen.getByLabelText("button")
        fireEvent.click(setUserButton)
        
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: "Efrain", email: "efrain@mail.com"});
    })
})