export const FontFaces = `
  // Fontfaces here

  
`;

interface SizeProps {
  [key: string]: string;
}

interface WeightProps {
  [key: string]: number;
}

interface FontProps {
  sizes: SizeProps;
  weights: WeightProps;
}

export const Font: FontProps = {
  sizes: {
    default: "1.6rem"
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700
  }
};
