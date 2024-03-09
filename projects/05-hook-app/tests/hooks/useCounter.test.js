import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el componente useCounter', () => { 
    const initialValue = 100;

    test('debe de retornar los valores por defecto', () => { 
        const { result } = renderHook(() => useCounter())
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => { 

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;

        expect(counter).toBe(initialValue);
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        // se toma del current debido a que se actualiza con cada acción
        expect(result.current.counter).toBe(initialValue + 3);
    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(initialValue - 3);
    });

    test('debe de realizar el reset del contador', () => {

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter, increment, decrement, reset } = result.current;

        act(() => {
            increment();
            decrement(5);
            reset();
        });

        expect(result.current.counter).toBe(initialValue);
    });
})