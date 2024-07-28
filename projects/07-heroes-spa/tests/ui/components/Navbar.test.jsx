import { screen, render, fireEvent } from '@testing-library/react'
import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/ui/components/Navbar'
import { MemoryRouter } from 'react-router-dom'

// Mock solamente useNavigate
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => { 
    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'name'
        },
        logout: jest.fn(),
    }

    // Limpiar mock en cada prueba
    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el nombre del la persona', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug()

        expect(screen.getByText(contextValue.user.name)).toBeTruthy()
    })

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByRole('button', {name:'Logout'})
        fireEvent.click(logoutButton)
        screen.debug()

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true}  );
    })
})