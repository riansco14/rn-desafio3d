import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../src/components/Button';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/config/styles/theme';

describe('Button component', () => {
  const MockTheme = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }

  it('renderizar botão', () => {
    render(<MockTheme>
      <Button type="bold" backgroundColor="blue" textColor="white">
        Bold Button
      </Button>
    </MockTheme>
    )
  })

  it('checar se o estilo inserido é aceito pelo botão', () => {
    const { getByTestId } = render(<MockTheme>
      <Button type="bold" backgroundColor="blue" textColor="white">
        Bold Button
      </Button>
    </MockTheme>
    );
    const button = getByTestId('testButton');
    expect(button['_fiber']['memoizedProps']['style']['backgroundColor']).toBe('blue'); // Verifica a cor de fundo
    // Você também pode adicionar mais verificações para a estilização do texto conforme necessário
  });

  it('acionar o botão', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<MockTheme>
      <Button onPress={onPressMock} type="bold" backgroundColor="blue" textColor="white">
        Press me
      </Button>
    </MockTheme>
    );
    const button = getByTestId('testButton');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});