import React from 'react';
import { cocktail } from "../../components/cocktailviews/cocktail/cocktail.jsx";

class SingleViewCocktails extends React.Component {

    state = {
        cocktail: { name: "Cuba Libre", ingredients: ["Rum", "Cola"], recipe: ["Rum rein", "Cola rein"], Beschreibung: "Man kann Zitronen- oder Limettenscheiben noch hinzufügen" }
    }
    render() {

        return (
            <div>
                {cocktail(this.state.cocktail)}
            </div>
        );
    }
}

export default SingleViewCocktails;