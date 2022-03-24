import React from "react";
import ReactDOM from "react-dom";
// import { render } from "@testing-library/react";
import BrokenComponent from "./BrokenComponent";

it("renders without crashing", function () {
	const div = document.createElement("div");
	ReactDOM.render(<BrokenComponent />, div);
	ReactDOM.unmountComponentAtNode(div);
});
// test("it renders without crashing", () => {
// 	render(<App />);
// });
