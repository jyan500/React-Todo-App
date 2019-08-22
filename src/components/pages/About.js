import React from 'react';

function About(){
	return (
		// ghost element, but needed as an outside wrapper for jsx
		<React.Fragment>
			<h1>About</h1>
			<p>This is the TodoLost app v1.0.0. It is part of a React crash course </p>
		</React.Fragment>
	)
}

export default About;