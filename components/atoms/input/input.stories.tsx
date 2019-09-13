import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Input from "./index";
import MockData from "./input.mocks";

storiesOf("Input", module).add(
  "default",
  (): ReactElement => <Input {...MockData.default}></Input>
);
