import React from "react";
import ReactDOM from "react-dom/client";

const elem = 500 + 500;

const heading2 = <h2 className="head">{elem}</h2>;

const Heading = () => <h1 className="head">heading Component</h1>;

const FirstComponent = () => (
  <div>
    {heading2}
    <Heading />
    <h1>First Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FirstComponent />);
