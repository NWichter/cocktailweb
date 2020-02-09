import React from 'react';
import { Cocktail } from "../../components/cocktailviews/cocktail/cocktail.jsx";

class SingleViewCocktails extends React.Component {

    constructor(probs) {
        super(probs)
        this.state = 
        {
            cocktails: probs.cocktails,
            choosencocktail: probs.choosencocktail
        }
    }
    render() {

        return (
            <div>
                {Cocktail(this.state)}
            </div>
        );
    }
}

export default SingleViewCocktails;