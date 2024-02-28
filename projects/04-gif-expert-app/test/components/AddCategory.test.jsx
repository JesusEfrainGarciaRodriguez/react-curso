const { render, screen, fireEvent } = require("@testing-library/react");
import AddCategory from "../../src/components/AddCategory";

describe('pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onAddCategory={ () => {} } />);

        const input = screen.getByRole("textbox");
        fireEvent.input(input, {target: { value: "Saitama"}})

        expect(input.value).toBe("Saitama")
    });

    test('debe de llamar onAddCategory si el input tiene un valor', () => { 
        const inputValue = "Saitama";
        const onAddCategory = jest.fn();
        
        render(<AddCategory onAddCategory={ onAddCategory} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: { value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe("");
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar onAddCategory si el input esta vació', () => { 
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory} />);

        const form = screen.getByRole("form");
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);

        const input = screen.getByRole("textbox");
        expect(input.value).toBe("");
    });
 })