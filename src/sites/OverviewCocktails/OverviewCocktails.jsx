import React from 'react';
import { cocktailviews } from "../../components/cocktailviews/cocktailviews.jsx"

// Importieren der css-file
import './OverviewCocktails.css';

//Übersicht über alle Cocktails
class OverviewCocktails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cocktails: props.cocktails
        }
    }

    render() {

        return (
            <div id="overviewframe">
                {cocktailviews(this.state.cocktails)}
            </div>
        );
    }
}

export default OverviewCocktails; 