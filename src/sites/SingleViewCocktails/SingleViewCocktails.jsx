import React from 'react';
import Cocktail  from "../../components/cocktailviews/cocktail/cocktail.jsx";

// Importieren der css-file
import './SingleViewCocktails.css';

//Einzelübersicht
class SingleViewCocktails extends React.Component {

    constructor(props) {
        super(props)
        //console.log("id", props.location.choosencocktail)
        this.state = 
        {
            cocktails: props.cocktails,
            choosencocktail: props.choosencocktail
        }
    }
    render() {

        return (
            <div id="SingleViewFrame">
                {Cocktail(this.state)}
            </div>
        );
    }
}

export default SingleViewCocktails;