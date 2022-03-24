import React from "react";
import { render } from "@testing-library/react";
import Dog from "./Dog";

it("should render", () => {
	render(<Dog name="Rusty" isAdopted={true} />);
});

it("should match snapshot", () => {
	const { asFragment } = render(<Dog name="Rusty" isAdpted={true} />);
	expect(asFragment()).toMatchSnapshot();
});
it("should match snapshot", () => {
	const { asFragment } = render(<Dog name="Rusty" isAdpted={false} />);
	expect(asFragment()).toMatchSnapshot();
});
