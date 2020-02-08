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
              {id:0, name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], img: "cubalibre" },
              {id:1, name: "Caipirinha", ingredients: ["Rum", "Rohrzucker", "Limette"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker", "Limette vierteln und hinzufügen"], img: "caipirinha" },
              {id:2, name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], img: "mojito"}

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
