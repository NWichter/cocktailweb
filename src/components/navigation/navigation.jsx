import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import FrontPage from "../../sites/FrontPage/FrontPage.jsx";
import OverviewCocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import SingleViewCocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

// Importieren des css-file
import './navigation.css';

export function navigation(probs) {

    // Laden aller Cocktails
    let cocktails = probs.cocktails
    
    //Jeder Cocktail bekommt eine eigene Variable
    let cubalibre = {name: cocktails[0]}
    let caipirinha = {name: cocktails[1]}
    let mojito = {name: cocktails[2]}

    // Anlegen der Navigationsleiste
    return (
        <div id="NavigationArea">
            <h1     
                    id = "HeaderN"
                    style={{ backgroundColor: "lightblue" }}>
                    Willkommen beim Cocktailkombinator
                    
            </h1>
            <nav> 
                <Link to="/zutatenauswahl">
                    <Button  id="ingredientsselection" style={{ backgroundColor: "lightblue" }} variant="contained" color="red" size="large" >
                        Hauptseite
                    </Button>
                </Link>

                {/* <br /> */}

                <Link to="/uebersichtcocktails">
                    <Button id="OverviewCocktails" style={{ backgroundColor: "lightblue" }} variant="contained" color="blue" size="large">
                        Übersicht Cocktails
                    </Button>
                </Link>

                <br />

                {/* <Link to="/cocktail">
                    <Button id="SingleViewCocktails" style={{ backgroundColor: "lightblue" }} variant="contained" color="green" size="large">
                        Einzelübersicht Cocktail 
                    </Button>
                </Link> */}
            </nav>

            {/* Pfadzuweisung der verschiedenen Cocktails und übergeben der jeweiligen Variabeln*/}

            <Switch>

                <Route path="/zutatenauswahl" render={() => <FrontPage {...probs} />} />

                <Route path="/uebersichtcocktails" render={() => <OverviewCocktails {...probs} />} />

                <Route path="/cocktail" render={() => <SingleViewCocktails {...probs} />} />

                <Route path="/Cuba_Libre" render={() => <SingleViewCocktails {...cubalibre} />} />

                <Route path="/Caipirinha" render={() => <SingleViewCocktails {...caipirinha} />} />

                <Route path="/Mojito" render={() => <SingleViewCocktails {...mojito} />} />

            </Switch>
        </div>
    );
}