import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";
import './App.css';

class App extends React.Component {
  //Hier werden alle möglichen Cocktailrezepte und verwendbaren Zutaten in zwei Liste angelegt
  //ebenfalls werden hier allgemeine Informationen initalisiert:
  //Dazu gehört beispielweise ob alle Cocktails angezeigt werden sollen oder nur jene wo Zutaten vorhanden sind
  //Welche Zutaten angeklickt bei der Auswahl angeklickt worden sind 
  //und welcher Cocktail aktuell beim Öffnen der Cocktailseite angezeigt werden soll
  state = {
    cocktails:
      [
        {id:0, name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], img: "./images/cubalibre.jpg" },
        {id:1, name: "Caipirinha", ingredients: ["Rum", "Rohrzucker", "Limette"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker", "Limette vierteln und hinzufügen"], img: "./images/caipirinha.jpg" },
        {id:2, name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], img: "./images/mojito.jpg"}

      ],
    ingredients: [
      {id:0, name: "Rum", selected: false },
      {id:1, name: "Cola", selected: false },
      {id:2, name: "Rohrzucker", selected: false },
      {id:3, name: "Limette", selected: false },
      {id:4, name: "Limettensaft", selected: false },
      {id:5, name: "Minearalwasser", selected: false },
      {id:6, name: "Minzblätter", selected: false },
    ],
    allcocktails: {
      "status": false
    },
    chooseIngredients:[],
    choosencocktail:0,
  }
  render() {
    //Übergabe aller Variabeln an die Navigation der WebApp
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
