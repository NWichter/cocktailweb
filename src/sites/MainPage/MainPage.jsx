import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ingredientsselection } from '../../components/IngredientsSelection/IngredientsSelection';
import { Link } from 'react-router-dom';

// Importieren der css-file
import './MainPage.css';

//Hauptseite
class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: props.ingredients,
            cocktails: props.cocktails,
            allcocktails: props.allcocktails

        }
        //Zurücksetzten aller ausgewählten Zutaten
        this.state.ingredients.forEach(element => {
            element["selected"] = false
        })
    }
        
        //Diese Funktion wechselt den Status der allcocktails-Variable um, wenn alle Cocktails angezeigt werden sollen
        AllCocktailsChange = () => {
            let status = this.state.allcocktails;
            status = !status;
            //console.log("Status gewechselt")
            //console.log("Status",status)
            this.setState({allcocktails:status})

        }
    
    render() {

        return (
            <div id="MainPageHeader" >

                <h1 id = "HeaderMP"
                    style={{ backgroundColor: "lightgrey" }}>
                    Welche Zutaten sind vorhanden:
                </h1>
                <div id="SelectionFrame">
                   {ingredientsselection(this.state)} 
                </div>

                <p id="allcocktailschechbox"> 
                    Cocktails ohne passende Zutaten anzeigen
                    <Checkbox id="allcocktails"    
                    value="uncontrolled"
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    onChange={this.AllCocktailsChange}
                     />
                </p>

                <Link to={{ pathname: "/cocktailfiltern", selected: this.state }} >
                    <Button id="filterbutton" type="button"
                        className="filterButton">
                        Cocktails filtern
                </Button>
                </Link>


            </div>

        );
    }
}


export default MainPage; 