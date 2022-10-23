import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentWithSimpleBar } from "./ComponentWithSimpleBar";

export default {
  title: "Components/ComponentWithSimpleBar",
  component: ComponentWithSimpleBar,
} as ComponentMeta<typeof ComponentWithSimpleBar>;

const Template: ComponentStory<typeof ComponentWithSimpleBar> = () => {
  return (
    <div style={{ height: 150, border: "1px solid" }}>
      <ComponentWithSimpleBar>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
        <p>Hello, World</p>
      </ComponentWithSimpleBar>
    </div>
  );
};
export const $ComponentWithSimpleBar = Template.bind({});
