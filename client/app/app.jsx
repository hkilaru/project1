import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	testFunc(){
		console.log("WOOT");
		console.log("hopefully this works");
	}

	render(){
		return (
			<div>
				<h1>
					COMPONENT....ENGAGED
				</h1>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
