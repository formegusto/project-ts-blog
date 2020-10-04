import React from 'react';
import { Route } from 'react-router-dom';
import List from './pages/post/List';
import Login from './pages/user/Login';
import Register from './pages/user/Register';

function App() {
  return (
    <>
      <Route component={List} path="/" exact/>
      <Route component={Login} path="/login"/>
      <Route component={Register} path="/register"/>
    </>
  );
}

export default App;
