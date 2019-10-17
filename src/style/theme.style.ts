import Colors from "./colors.style";

export interface ThemeInterface {
  name: string;
  colors: {
    primary: string;
  };
}

export const theme: ThemeInterface = {
  name: "default",
  colors: {
    primary: Colors.black
  }
};
