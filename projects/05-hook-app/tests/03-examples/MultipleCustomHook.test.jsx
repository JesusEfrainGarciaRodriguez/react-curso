import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHook from "../../src/03-examples/MultipleCustomHook"
import useFetch from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"


jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Pruebas en el componente MultipleCustomHook', () => { 
    const useFetchMockData = { 
        data: {
            id: "1",
            name: "stench",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
                back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
                front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
                back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png"
            }
        }, 
        isLoading: false 
    }

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    // Limpiar mocks en cada prueba para setear valor inicial
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto ', () => { 

        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true 
        })

        render(<MultipleCustomHook />)

        expect(screen.getByText("Cargando..."))
        expect(screen.getByText("Información de Pokémon"))

        const nextButton = screen.getByRole("button", {name:"Siguiente"})
        expect(nextButton.disabled).toBeFalsy()

        //screen.debug()
    })
    
    test('debe de mostrar un pokemon', () => {
        useFetch.mockReturnValue(useFetchMockData)
        const { id, name } = useFetchMockData.data;

        render(<MultipleCustomHook />)

        expect(screen.getByText(`#${id} - ${name}`)).toBeTruthy

        const nextButton = screen.getByRole("button", {name:"Siguiente"})
        expect(nextButton.disabled).toBeFalsy()
    })

    test('debe de llamar la función de incrementar', () => {
        useFetch.mockReturnValue(useFetchMockData)

        render(<MultipleCustomHook />)
        
        const nextButton = screen.getByRole("button", {name:"Siguiente"})
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled();
        screen.debug()
    })
})