const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path='/'>
              <MovieAPI />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/movies'>
              <MovieAPI />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));
