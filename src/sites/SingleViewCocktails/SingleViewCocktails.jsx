import React from 'react';
import { cocktail } from "../../components/cocktailviews/cocktail/cocktail.jsx";

class SingleViewCocktails extends React.Component {

    constructor(probs) {
        super(probs)
        this.state = probs
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