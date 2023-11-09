import React, { Component } from 'react';

import Index from './components/Index';
import Routers from './components/Routers';
class App extends Component {
	render() {
		return (
			<div>
				<Routers />
				<Index />
			</div>
		)
	}
}

export default App;