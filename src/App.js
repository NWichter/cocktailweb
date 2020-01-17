import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";
import './App.css';

class App extends React.Component {

  render() {

    return (

      <BrowserRouter>
        <div>
          {navigation("Test Navigation")}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
