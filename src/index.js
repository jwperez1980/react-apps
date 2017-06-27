import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import AppWithState from './AppWithState';
//import NestedComponents from './NestedComponents';
import RouterFile from './RouterFile';
import Runners from './Runners';
import AppWithAjax from './AppWithAjax';
import RunnerService from './RunnerService';
import { BrowserRouter, Match, Miss } from 'react-router';



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
  <BrowserRouter>
  <div className="router">
    <Match exactly pattern="/" component={Runners}/>
    <Match exactly pattern="/runnerService" component={RunnerService}/>
    <Match exactly pattern="/ajaxapp" component={AppWithAjax}/>
    </div>
   </BrowserRouter>,
	document.getElementById('root')
)

