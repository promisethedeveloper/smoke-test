import React from "react";
import { render } from "@testing-library/react";
import FixedComponent from "./FixedComponent";

// Smoke test
test("if it renders without crashing", () => {
	render(<FixedComponent />);
});

// Snapshot test
test("if it matches snapshot", () => {
	const { asFragment } = render(<FixedComponent />);
	expect(asFragment()).toMatchSnapshot();
});
