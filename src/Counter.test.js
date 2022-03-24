import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

// it("renders without crashing", function () {
// 	const div = document.createElement("div");
// 	ReactDOM.render(<Counter />, div);
// 	ReactDOM.unmountComponentAtNode(div);
// });
test("it renders without crashing", () => {
	render(<Counter />);
});

test("playing with queries", () => {
	const { getAllByText, getByText } = render(<Counter />);
	console.log(getAllByText("count", { exact: false }));
	console.log(getByText("Cake"));
});
