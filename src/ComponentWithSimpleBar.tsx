import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";
import reactLogo from "./assets/react.svg";
import "./ComponentWithSimpleBar.css";

export const ComponentWithSimpleBar = () => {
  return (
    <SimpleBar style={{ maxHeight: 150, overflow: "auto" }}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </SimpleBar>
  );
};
