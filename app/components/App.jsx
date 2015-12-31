import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import {Router, Route, IndexRoute} from 'react-router';
import Template from './core/Template.jsx';
import Home from './core/Home.jsx';
import About from './core/About.jsx';
import ListArticles from './articles/ListArticles.jsx'
var history;
if (typeof(window) !== 'undefined') {
  history = createBrowserHistory();
} else {
  history = createMemoryHistory(); //This kind of history is needed for server-side rendering.
}
console.log('Inside App.Jsx');
export default(props) => {
  return (

    <Router history={history}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={ListArticles}/>

      </Route>
    </Router>

  );
}
