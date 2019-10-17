import {css} from 'styled-components';

export const FontFaces = `
  // Fontfaces here
  
`;

export const ImportFontFaces = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');
`;



interface StringProps {
  [key: string]: string;
}

interface NumberProps {
  [key: string]: number;
}


interface FontProps {
  sizes: StringProps;
  weights: NumberProps;
  family: StringProps;
}


export const Font: FontProps = {
  sizes: {
    default: "14px"
  },
  weights: {
    regular: 400,
    bold: 700
  },
  family: {
    primary: 'Lato'
  },
};
