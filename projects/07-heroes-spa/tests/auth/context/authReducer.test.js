import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => {
    const initialState = {
        id: "ABC",
        name: "name",
    }

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });
    })

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                id: "123",
                name: "name",
            }
        }

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    })

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        }
        
        const state = {
            logged: false,
            id: "123",
            name: "name",
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });
    })
})