
// const size_0 = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px',
// }


export const sizes = {
	xs: '320px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
};




var Medias: {[k: string]: any} = {};

Object.entries(sizes).forEach(
  ([key, value]) =>{
    Medias[ key ]  = `(min-width: ${value})`
  } 
);

export default Medias;


/*
Usage:

import media, {sizes} from './media.style';

const Div = styled.div`
  
  text-align: left;

  @media ${media.md} {
    max-width: sizes.md;
  }

`;
*/