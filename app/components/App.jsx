import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import {Router, Route, IndexRoute} from 'react-router';
import Template from './core/Template.jsx';
import Home from './core/Home.jsx';
import About from './core/About.jsx';
import CreateArticle from './articles/CreateArticle.jsx';
import ViewArticle from './articles/ViewArticle.jsx';
import ListArticles from './articles/ListArticles.jsx';
import EditArticle from './articles/EditArticle.jsx';
import Signin from './users/Signin.jsx';
import auth from './../services/Authentication';
import SignOut from './users/SignOut.jsx';

var history;
//let history = createBrowserHistory();
console.log(history);
if (typeof(window) !== 'undefined') {
 history = createBrowserHistory();
  console.log(history);
} else {
  //history = createMemoryHistory(); //This kind of history is needed for server-side rendering.
}

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/signin')
}
console.log('Inside App.Jsx');
export default(props) => {
  return (

    <Router history={history}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles/create" component={CreateArticle} onEnter={requireAuth}/>
        <Route path="/articles" component={ListArticles}/>
        <Route path="/articles/:id" component={ViewArticle}/>
        <Route path="/articles/edit/:id" component={EditArticle} onEnter={requireAuth}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={SignOut}/>
      </Route>
    </Router>

  );
}
