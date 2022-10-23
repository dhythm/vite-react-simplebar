import { FC, ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styled from "styled-components";
// import "./ComponentWithSimpleBar.css";

type Props = {
  children: ReactNode;
};
export const ComponentWithSimpleBar: FC<Props> = ({ children }) => {
  return (
    <StyledSimpleBar style={{ maxHeight: 150, overflow: "auto" }}>
      {children}
    </StyledSimpleBar>
  );
};

const StyledSimpleBar = styled(SimpleBar)`
  & .simplebar-scrollbar::before {
    background: linear-gradient(darkblue, skyblue);
  }
`;
