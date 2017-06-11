import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import AppWithState from './AppWithState';
//import NestedComponents from './NestedComponents';
import AppWithAjax from './AppWithAjax';

// ***** Use App ****** //

//Basic
//ReactDOM.render(<App />, document.getElementById('root'));

//Pass properties to components
// ReactDOM.render(
// 	<App cat={5} txt="this is the prop" />,
// 	 document.getElementById('root')
// );

// ***** Use AppWithState ****** //

// ReactDOM.render(
// 	<AppWithState />,
// 	document.getElementById('root')
// );

// ***** Use NextedComponents ***** //
// ReactDOM.render (
// 	<NestedComponents />,
// 	document.getElementById('root')
// );

// ***** Use NextedComponents ***** //
ReactDOM.render (
	<AppWithAjax />,
	document.getElementById('root')
)

