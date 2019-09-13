/// <reference types="next" />
/// <reference types="next/types/global" />

// declare module 'babel-register-ts' {
//     const babelRegisterTs: any;
//     export default babelRegisterTs;
//   }

// declaration.d.ts
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
