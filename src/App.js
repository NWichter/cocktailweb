import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";
import './App.css';

class App extends React.Component {
  state = {
    cocktails:
      [
        { name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], Beschreibung: "Man kann Zitronen- oder Limettenscheiben noch hinzufügen" },
        { name: "Caipirinha", ingredients: ["Rum", "Rohrzucker", "Limette"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker", "Limette vierteln und hinzufügen"], Beschreibung: "Sehr süßer Cocktail" },
        { name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], Beschreibung: "schmeckt sehr nach Minze" }

      ],
    ingredients: [
      { name: "Rum", selected: false },
      { name: "Cola", selected: false },
      { name: "Rohrzucker", selected: false },
      { name: "Limette", selected: false },
      { name: "Limettensaft", selected: false },
      { name: "Minearalwasser", selected: false },
      { name: "Minzblätter", selected: false },
    ],
  
  }
  render() {

    return (

      <BrowserRouter>
        <div>
          {navigation(this.state)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
