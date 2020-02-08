import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ingredientsselection } from '../../components/IngredientsSelection/IngredientsSelection';
import { Switch, Link, Route } from 'react-router-dom';

import FilterCocktail from '../../sites/FilterCocktail/FilterCocktail'
// Importieren der css-file
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: props.ingredients,
            cocktails: props.cocktails,
            allcocktails: props.allcocktails

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


                <Link to="/cocktailfiltern">
                <Button id="cocktailsfiltern"
                    style={{backgroundColor:"red"}}>
                    Cocktails filtern
                </Button>
                </Link>


            <Switch>
                <Route path="/cocktailfiltern" render={() => <FilterCocktail {...this.state} />} />
            </Switch>

            </div>

        );
    }
}


export default MainPage; 