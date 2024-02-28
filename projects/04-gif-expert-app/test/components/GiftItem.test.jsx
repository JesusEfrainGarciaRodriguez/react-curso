import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => { 
    const title = "Saitama";
    const url = "https://one-punch/saitama.gif";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el URL y ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole("img");

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el título del documento', () => { 
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
 })