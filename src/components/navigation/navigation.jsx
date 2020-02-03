import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import MainPage from "../../sites/MainPage/MainPage.jsx";
import OverviewCocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import SingleViewCocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

// Importieren des css-file
import './navigation.css';

export function navigation(probs) {

    // Anlegen der Navigationsleiste
    return (
        <div id="NavigationArea">
            <h1     
                    id = "HeaderN"
                    style={{ backgroundColor: "white" }}>
                    Willkommen beim Cocktailkombinator
                    
            </h1>
            <nav> 
                <Link to="/zutatenauswahl">
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

            {/* Pfadzuweisung der verschiedenen Cocktails und übergeben der jeweiligen Variabeln*/}

            <Switch>

                <Route path="/zutatenauswahl" render={() => <MainPage {...probs} />} />

                <Route path="/uebersichtcocktails" render={() => <OverviewCocktails {...probs} />} />

                <Route path="/cocktail" render={() => <SingleViewCocktails {...probs} />} />

            </Switch>
        </div>
    );
}