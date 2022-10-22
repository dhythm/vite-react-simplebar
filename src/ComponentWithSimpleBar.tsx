import { FC, ReactNode } from "react";
import SimpleBar from "simplebar-react";
// import "simplebar";
// import "simplebar/dist/simplebar.css";
import "simplebar-react/dist/simplebar.min.css";
import "./ComponentWithSimpleBar.css";

type Props = {
  children: ReactNode;
};
export const ComponentWithSimpleBar: FC<Props> = ({ children }) => {
  return (
    <SimpleBar style={{ maxHeight: 150, overflow: "auto" }}>
      {/* {[...Array(50)].map((x, i) => (
        <p key={i} className="odd">
          Some content
        </p>
      ))} */}
      {children}
    </SimpleBar>
  );
};
