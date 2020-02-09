import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route, Redirect } from 'react-router-dom';


import MainPage from "../../sites/MainPage/MainPage.jsx";
import OverviewCocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import SingleViewCocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";
import FilterCocktail from '../../sites/FilterCocktail/FilterCocktail'

// Importieren der css-file
import './navigation.css';

export function navigation(props) {
        
    // Anlegen der Navigationsleiste
    return (
        <div id="NavigationArea">
            <h1     
                    id = "HeaderN"
                    style={{ backgroundColor: "white" }}>
                    Willkommen beim Cocktailkombinator
                    
            </h1>
            <nav> 
                <Link to="/home">
                    <Button  id="ingredientsselection" style={{ backgroundColor: "lightblue" }} variant="contained" size="large" >
                        Hauptseite
                    </Button>
                </Link>

                {/* <br /> */}

                <Link to="/uebersichtcocktails">
                    <Button id="OverviewCocktails" style={{ backgroundColor: "lightblue" }} variant="contained" size="large">
                        Übersicht Cocktails
                    </Button>
                </Link>

                {/* <br /> */}

                <Link to="/cocktail">
                    <Button id="SingleViewCocktails" style={{ backgroundColor: "lightblue" }} variant="contained" size="large">
                        Einzelübersicht Cocktail 
                    </Button>
                </Link>
            </nav>

            {/* Pfadzuweisung der verschiedenen Cocktails und übergeben der Variabeln*/}

            <Switch>

                <Route path="/" exact >
                    <Redirect to="/home" />
                </Route> 

                <Route path="/home" render={() => <MainPage {...props} />} />

                <Route path="/uebersichtcocktails" render={() => <OverviewCocktails {...props} />} />

                <Route path="/cocktail" render={() => <SingleViewCocktails {...props} />} />

                <Route path="/cocktailfiltern" component = {FilterCocktail} />

            </Switch>
        </div>
    );
}