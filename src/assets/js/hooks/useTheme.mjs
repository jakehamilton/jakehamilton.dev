'use strict';
import {
    useState,
    useContext,
    createContext,
} from 'https://unpkg.com/htm/preact/standalone.module.js';

const DEFAULT_THEME = {
    white: '#fdfdfd',
    black: '#222222',
    link: '#7297ea',
    primary: '#923bcd',
    secondary: '#ecb33a',
    shadows: {
        0: '0 1px 2px rgba(0, 0, 0, 0.05)',
        1: '0 2px 3px rgba(0, 0, 0, 0.075)',
    },
    padding: {
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem',
    },
};

const ThemeContext = createContext({});

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;

export { useTheme, ThemeContext, DEFAULT_THEME };
