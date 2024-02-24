import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('pruebas en FirstApp', () => { 
    /* test('debe de hacer match con el snapshot', () => { 
        const title = "Hola, soy Efrain"
        const { container } = render(<FirstApp title={title} />)
        expect( container ).toMatchSnapshot();
    }) */

    test('debe de mostrar el titulo en un h1', () => { 
        const title = "Hola, soy Efrain"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect( getByText(title) ).toBeTruthy();

        /* const h1 = container.querySelector("h1");
        expect(h1.innerHTML).toContain(title); */

        expect(getByTestId("test-title").innerHTML).toContain(title);
    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = "Hola, soy Efrain"
        const subtitle = "Soy un subtitulo";
        const { getAllByText } = render(<FirstApp title={title} subTitle={subtitle}/>);

        expect(getAllByText(subtitle).length).toBe(1);
    });
 })