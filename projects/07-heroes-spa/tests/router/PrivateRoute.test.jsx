import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('pruebas en <PrivateRoute/>', () => { 
    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'name'
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')
    })

    test('debe de navegar si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Routes>
                        <Route path='marvel' element={
                            <PrivateRoute>
                                <h1>Ruta privada</h1>
                            </PrivateRoute>
                        }/>
                        <Route path='login' element={<h1>login</h1>}/>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('login')).toBeTruthy()
    })
})