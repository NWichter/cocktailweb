import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ingredientsselection } from '../../components/ingredientsselection/ingredientsselection';

// Importieren der css-file
import './FrontPage.css';

class FrontPage extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            ingredients: probs.ingredients,
            cocktails: probs.cocktails
        }
    }

    render() {

        return (
            <div id="FrontPageHeader" >

                <h1 style={{ backgroundColor: "lightgrey" }}
                    id = "HeaderFP">
                    Welche Zutaten sind vorhanden:
                    
                </h1>

                {ingredientsselection(this.state.ingredients)}

                <p >
                    
                    Cocktails ohne passende Zutaten anzeigen
                    <Checkbox id="allcocktails" value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </p>


                <Button id="cocktailsfiltern">
                    Cocktails filtern
                </Button>

            </div>
        );
    }
}

export default FrontPage; 