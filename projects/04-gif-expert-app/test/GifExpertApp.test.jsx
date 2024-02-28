import { render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 
    test('debe de mostrar el título de la aplicación', () => { 
        render(<GifExpertApp />);

        expect(screen.getByText("GifExpertApp"));
        screen.debug();
    });  
});