import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const reset = () => setCount(0);
	return (
		<>
			<h1>Let's count!</h1>
			<h2>Current count: {count}</h2>
			<button onClick={increment}>Add</button>
			<button onClick={decrement}>Subtract</button>
			<button onClick={reset}>Reset</button>
		</>
	);
};

export default Counter;
