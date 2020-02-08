import React from 'react';
import { cocktail } from "../../components/cocktailviews/cocktail/cocktail.jsx";

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
                {cocktail(this.state)}
            </div>
        );
    }
}

export default SingleViewCocktails;