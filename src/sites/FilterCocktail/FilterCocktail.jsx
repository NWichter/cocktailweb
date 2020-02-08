import React from 'react';
import { cocktailfilter } from "../../components/cocktailfilter/cocktailfilter.jsx"

class FilterCocktail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cocktails: props.cocktails,
            Ingredients: props.Ingredients,
            allcocktails: props.allcocktails
            
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                {cocktailfilter(this.state)}
            </div>
        );
    }
}

export default FilterCocktail; 