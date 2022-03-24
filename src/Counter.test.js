import React from "react";
import ReactDOM from "react-dom";
// import { render } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", function () {
	const div = document.createElement("div");
	ReactDOM.render(<Counter />, div);
	ReactDOM.unmountComponentAtNode(div);
});
// test("it renders without crashing", () => {
// 	render(<App />);
// });
