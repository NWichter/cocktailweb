import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";
import './App.css';

class App extends React.Component {
  //Hier werden alle möglichen Cocktailrezepte und verwendbaren Zutaten in zwei Liste angelegt
  //Variabeln für "alle Cocktails anzeigen", "ausgewählt Cocktails" und "aktueller Cocktail"
  
      constructor(props) {
        super(props)
        this.state = { 
          cocktails:
            [
              {id:0, name: "Cuba Libre", ingredients: ["Rum", "Cola","Limette"], recipe: ["Rum rein", "Cola rein","Limette würfeln"], img: "cubalibre" },
              {id:1, name: "Caipirinha", ingredients: ["Rum", "Rohrzucker", "Limette","Eiswürfel"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker", "Limette würfeln"], img: "caipirinha" },
              {id:2, name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], img: "mojito"},
              {id:3, name: "Gin Tonic", ingredients: ["Gin","Tonic Water","Eiswürfel"], recipe: ["Gin eingießen","Mit Tonic Water auffüllen","Eiswürfel dazugeben"], img: "gintonic"},
              {id:4, name: "Tequila Sunrise", ingredients: ["Tequila","Orangensaft","Grenadine","Eiswürfel"], recipe: ["Alles zusammenmixen","Eiskalt servieren"], img: "tequilasunrise"},
              {id:5, name: "Mai-Tai", ingredients: ["Rum","Orangensaft","Ananassaft","Limette","Eiswürfel"], recipe: ["Flüssigkeiten zusammenrühren","Limette ausdrücken","Eis dazugeben"], img: "maitai"},

            ],
          ingredients: [
            {id:0, name: "Rum", selected: false },
            {id:1, name: "Cola", selected: false },
            {id:2, name: "Rohrzucker", selected: false },
            {id:3, name: "Limette", selected: false },
            {id:4, name: "Limettensaft", selected: false },
            {id:5, name: "Minearalwasser", selected: false },
            {id:6, name: "Minzblätter", selected: false },
            {id:7, name: "Gin", selected: false },
            {id:8, name: "Tonic Water", selected: false },
            {id:9, name: "Eiswürfel", selected: false },
            {id:10, name: "Eiswürfel", selected: false },
            {id:11, name: "Orangensaft", selected: false },
            {id:12, name: "Grenadine", selected: false },
            {id:13, name: "Ananassaft", selected: false },
            {id:14, name: "Tequila", selected: false },
          ],
          allcocktails: false,
          choosencocktail:0,
      }
    }
  render() {
    //Übergabe aller Variabeln an die Navigation der WebApp
    return (

      <BrowserRouter>
        <div className="App">
          {navigation(this.state)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
