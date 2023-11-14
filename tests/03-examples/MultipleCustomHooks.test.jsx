import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en el componente <MultipleCustomHooks />', () => { 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));
        const nexButton = screen.getByRole('button', { name: 'Next Character' });
        expect(nexButton.disabled).toBeTruthy();
     });

     test('Debe de mostrar un Character', () => { 
        useFetch.mockReturnValue({
            data: { species: 'Human', name: 'Fernando' },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Fernando'));
        expect(screen.getByText('Human'));
        
        const nexButton = screen.getByRole('button', { name: 'Next Character' });
        expect(nexButton.disabled).toBeFalsy();
      });

      test('Debe de llamar la funcion de incrementar', () => {        
        useFetch.mockReturnValue({
            data: { species: 'Human', name: 'Fernando' },
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        
        const nexButton = screen.getByRole('button', { name: 'Next Character' });
        fireEvent.click( nexButton );

        expect( mockIncrement ).toHaveBeenCalled();

      });
 });