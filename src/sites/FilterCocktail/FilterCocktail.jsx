import React from 'react';
import { cocktailfilter } from "../../components/cocktailfilter/cocktailfilter.jsx"

// Importieren der css-file
import './FilterCocktail.css';

class FilterCocktail extends React.Component {

    constructor(props) {
        super(props)
        console.log("Filterlog",props.location)
        this.state = {
            cocktails: props.location.selected.cocktails,
            Ingredients: props.location.selected.ingredients,
            allcocktails: props.location.selected.allcocktails
        }
    }
    
    render() {
        console.log("Filterlog", this.state)
        
        return (
            <div id="FilterCocktail" styles={{margin:"center"}}>
                {cocktailfilter(this.state)}
            </div>
        );
    }
}

export default FilterCocktail; 