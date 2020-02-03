import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ingredientsselection } from '../../components/IngredientsSelection/IngredientsSelection';

// Importieren der css-file
import './MainPage.css';

class MainPage extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            ingredients: probs.ingredients,
            cocktails: probs.cocktails,
            allcocktails: probs.allcocktails

        }
    }
        //Diese Funktion dreht den Status der allcocktails-Variable um, wenn alle Cocktails angezeigt werden sollen
        AllCocktailsChange = () => {
            let status = this.state.allcocktails["status"];
            status = !status;
            this.setState(status)
        }
    
    render() {

        return (
            <div id="MainPageHeader" >

                <h1 id = "HeaderMP"
                    style={{ backgroundColor: "lightgrey" }}>
                    Welche Zutaten sind vorhanden:
                </h1>

                {ingredientsselection(this.state)}

                <p > 
                    Cocktails ohne passende Zutaten anzeigen
                    <Checkbox id="allcocktails"    
                    value="uncontrolled"
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    onChange={this.AllCocktailsChange} />
                </p>


                <Button id="cocktailsfiltern"
                    style={{backgroundColor:"red"}}
                    // onClick= {} 
                    >
                    Cocktails filtern
                </Button>

            </div>
        );
    }
}


export default MainPage; 