import React from 'react';
import { cocktailviews } from "../../components/cocktailviews/cocktailviews.jsx"

class OverviewCocktails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cocktails: props.cocktails
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