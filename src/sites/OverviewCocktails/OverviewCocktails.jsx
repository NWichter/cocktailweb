import React from 'react';
import { cocktailviews } from "../../components/cocktailviews/cocktailviews.jsx"

class OverviewCocktails extends React.Component {

    state = {
        cocktails:
        [
            { name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], Beschreibung: "Man kann Zitronen- oder Limettenscheiben noch hinzufügen" },
            { name: "Caipirinha", ingredients: ["Rum", "Rohrzucker","Limette"], recipe: ["Rum rein", "3 gehäufte TL Rohrzucker","Limette vierteln und hinzufügen"], Beschreibung: "Sehr süßer Cocktail" },
            { name: "Mojito", ingredients: ["Rum", "Limettensaft", "Minearalwasser", "Minzblätter"], recipe: ["Rum rein", "2cl Limettensaft", "paar Minzblätter hinzufügen"], Beschreibung: "schmeckt sehr nach Minze" }

        ]
    }

    render() {

        return (
            <div>
                {cocktailviews(this.state.cocktails)}
            </div>
        );
    }
}

export default OverviewCocktails; 