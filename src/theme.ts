import {DefaultTheme} from 'styled-components';
import {Platform, Dimensions} from 'react-native';
import 'styled-components';

const {width, height} = Dimensions.get('window');

// xs | sm | md | lg | xl | xxl

const lg = (width / 100) * 9;
const md = (width / 100) * 6;
const lmd = (width / 100) * 5;
const smd = (width / 100) * 4.5;
const sm = (width / 100) * 3;
const button = (width / 100) * 14;

const isIos = Platform.OS === 'ios';

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: string;
    isIos: boolean;
    width: number;
    height: number;
    padding: string;

    colors: {
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        green: string;
        tomato: string;
        lightblue: string;
        black: string;
      };
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      disabled: string;
      danger: string;
      light: string;
    };

    sizes: {
      button: number;
      lg: number;
      md: number;
      smd: number;
      sm: number;
      lmd: number;
    };
  }
}

const theme: DefaultTheme = {
  radius: '20px',
  isIos,
  width,
  height,
  padding: '10px',

  colors: {
    text: {
      primary: '#fff',
      secondary: 'rgb(2, 2, 34)',
      black: 'rgb(2, 2, 34)',
      disabled: '#BCA379',
      green: 'green',
      tomato: 'tomato',
      lightblue: 'lightblue',
    },
    primary: '#FD5C5C',
    secondary: '#00C2FF',
    tertiary: '#9CC92F',
    background: 'rgb(2, 2, 34)',
    disabled: '#D5D8DC',
    danger: '#FF0000',
    light: '#fff',
  },

  sizes: {
    button,
    lg,
    md,
    smd,
    sm,
    lmd,
  },
};

export default theme;
