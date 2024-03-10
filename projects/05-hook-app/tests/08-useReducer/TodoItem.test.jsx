import { fireEvent, render, screen } from "@testing-library/react"
import TodoItem from "../../src/08-useReducer/TodoItem"

describe('Pruebas en el componente TodoItem', () => { 
    const todo = { id: 1, description: "Hacer tarea", done: false}
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Limpiar mock en cada prueba
    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el todo pendiente de completar', () => { 
        render(<TodoItem {...todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        expect(screen.getByText(todo.description)).toBeTruthy()

        const liElement = screen.getByRole("listitem")
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

        const spanElement = screen.getByLabelText("span")
        expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).not.toContain("text-decoration-line-through");
    })

    test('debe de mostrar el todo completado', () => { 
        todo.done = true;

        render(<TodoItem {...todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const spanElement = screen.getByLabelText("span")
        expect(spanElement.className).toContain("text-decoration-line-through");
    })

    test('debe de llamar onDeleteTodo', () => { 
        render(<TodoItem {...todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const deleteButton = screen.getByRole("button", {name:"Borrar"})
        fireEvent.click(deleteButton)

        // Verificar llamado y argumentos
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })

    test('debe de llamar onToggleTodo', () => { 
        render(<TodoItem {...todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const toggleButton = screen.getByLabelText("span")
        fireEvent.click(toggleButton)

        // Verificar llamado y argumentos
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })
})