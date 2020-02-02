import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";
import './App.css';

class App extends React.Component {
  state = {
    cocktails:
      [
        { name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], description: "Man kann Zitronen- oder Limettenscheiben noch hinzufügen", img: "./cubalibre.jpg" },
        { name: "Caipirinha", ingredients: ["Rum", "Rohrzucker", "Limette"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker", "Limette vierteln und hinzufügen"], description: "Sehr süßer Cocktail", img: "./caipirinha.jpg" },
        { name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], description: "schmeckt sehr nach Minze", img: "./mojito.jpg"}

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
