import React from "react";
import ReactDOM from "react-dom";
// import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function () {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
// test("it renders without crashing", () => {
// 	render(<App />);
// });
