import React from 'react';
import { cocktailviews } from "../../components/cocktailviews/cocktailviews.jsx"

class OverviewCocktails extends React.Component {

    constructor(probs) {
        super(probs)
        this.state = {
            cocktails: probs.cocktails
        }
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