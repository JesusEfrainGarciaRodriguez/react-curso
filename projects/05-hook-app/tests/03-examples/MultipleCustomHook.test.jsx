import { render, screen } from "@testing-library/react"
import MultipleCustomHook from "../../src/03-examples/MultipleCustomHook"

describe('Pruebas en el componente MultipleCustomHook', () => { 

    test('debe de mostrar el componente por defecto ', () => { 
        render(<MultipleCustomHook />)

        expect(screen.getByText("Cargando..."))
        expect(screen.getByText("Información de Pokémon"))

        const nextButton = screen.getByRole("button", {name:"Siguiente"})
        expect(nextButton.disabled).toBeFalsy()

        //screen.debug()
    })
    
    test('debe de mostrar un pokemon', () => {
        
    })
})