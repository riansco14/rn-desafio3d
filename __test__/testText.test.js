import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Slider } from '../src/components/Slider';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/config/styles/theme';
import { Text } from '../src/components/Text';

describe('Slider component', () => {
    const MockTheme = ({ children }) => {
        return (
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        );
    }

    it('checar cor do texto', () => {
        const { getByText } = render(<MockTheme>
            <Text color="#fff" type="default">Teste</Text>
        </MockTheme>
        )
        const text = getByText("Teste")
        expect(text['_fiber']['memoizedProps']['style']['color']).toBe('#fff');
    })


});