import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register1 from './Pages/Register2/Register1';
import Register2 from './Pages/Register2/Register2';
import Register3 from './Pages/Register2/Register3';
import Register4 from './Pages/Register2/Register4';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register1">
            <Register1 onSubmit={handleFormSubmit} />
          </Route>
          <Route path="/register2">
            <Register2 onSubmit={handleFormSubmit} />
          </Route>
          <Route path="/register3">
            <Register3 onSubmit={handleFormSubmit} />
          </Route>
          <Route path="/register4">
            <Register4 onSubmit={handleFormSubmit} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
