import { configure, addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from "../styles/theme.styles";

const themes = [theme];

const req = require.context("../components", true, /\.stories.tsx$/);

const newViewports = {
  responsive: {
    name: "Responsive",
    styles: {
      width: "100%",
      height: "100%"
    },
    type: "desktop"
  },
  iPhoneX: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px"
    }
  },
  samsungS9: {
    name: "Samsung S9",
    styles: {
      width: "360px",
      height: "740px"
    }
  },
  iPadAir2: {
    name: "iPad Air 2",
    styles: {
      width: "768px",
      height: "1024px"
    }
  }
};

addDecorator(withThemesProvider(themes));

configure(() => req.keys().forEach(filename => req(filename)), module);

addParameters({
  viewport: {
    defaultViewport: "responsive",
    viewports: newViewports
  }
});
