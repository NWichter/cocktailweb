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
            <div id="ingredientsselectionFP" >

                <h1
                    id = "HeaderFP">
                    Welche Zutaten sind vorhanden:
                    
                </h1>

                {ingredientsselection(this.state.ingredients)}

                <hr 
                    style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5
                    }}>
                </hr>

                <p>
                    Cocktails ohne passende Zutaten anzeigen
                    <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </p>

                <hr 
                    style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5
                    }}>
                </hr>

                <Button>
                    Cocktails filtern
                </Button>

            </div>
        );
    }
}

export default FrontPage; 