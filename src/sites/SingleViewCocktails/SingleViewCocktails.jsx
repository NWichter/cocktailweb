import React from 'react';
import Cocktail  from "../../components/cocktailviews/cocktail/cocktail.jsx";

class SingleViewCocktails extends React.Component {

    constructor(props) {
        super(props)
        this.state = 
        {
            cocktails: props.cocktails,
            choosencocktail: props.choosencocktail
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