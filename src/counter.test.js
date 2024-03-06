import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";
import '@testing-library/jest-dom'
import { React } from "react";
import App from "./App";

afterEach(() => cleanup())
jest.mock('./counter.js', () => () => {
    return <h1>hello</h1>;
})

describe('Counter Component', () => {
    /* test('Is counter default value is 0', () => {
        render(<Counter />)
        expect(screen.getByTestId("counter")).toHaveTextContent("0")
    });

    test('Is counter value getting updated after btn click', () => {
        render(<Counter />)
        const counterValue = screen.getByTestId("counter");
        const incBtn = screen.getByTestId("incbtn")
        expect(counterValue).toHaveTextContent(String(0))
        fireEvent.click(incBtn);
        expect(counterValue).toHaveTextContent(String(1))
    });

    test('Is async counter value getting updated after btn click', async () => {
        render(<Counter />)
        fireEvent.click(screen.getByTestId("counterasync"));
    });

 */    test('ok mock', async () => {
        const {container} = render(<App />)

        expect(container.textContent).toBe("hello1")
        // expect().toBeInTheDocument()
    });
}) 