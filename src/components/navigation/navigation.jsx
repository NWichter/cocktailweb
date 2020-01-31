import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import FrontPage from "../../sites/FrontPage/FrontPage.jsx";
import OverviewCocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import SingleviewCocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

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

            <nav>
                <Link to="/zutatenauswahl">
                    <Button id="ingredientsselection" variant="contained" color="default" size="large" >
                        Hauptseite
                    </Button>
                </Link>

                <br />

                <Link to="/uebersichtcocktails">
                    <Button id="OverviewCocktails" variant="contained" color="default" size="large">
                        Übersicht Cocktails
                    </Button>
                </Link>

                <br />

                <Link to="/cocktail">
                    <Button id="SingleViewCocktails" variant="contained" color="default" size="large">
                        Einzelübersicht Cocktail 
                    </Button>
                </Link>
            </nav>

            {/* Pfadzuweisung der verschiedenen Cocktails und übergeben der jewiligen Variabeln*/}

            <Switch>

                <Route path="/zutatenauswahl" render={() => <FrontPage {...probs} />} />

                <Route path="/uebersichtcocktails" render={() => <OverviewCocktails {...probs} />} />

                <Route path="/cocktail" render={() => <SingleviewCocktails {...cubalibre} />} />

                <Route path="/Cuba_Libre" render={() => <SingleviewCocktails {...cubalibre} />} />

                <Route path="/Caipirinha" render={() => <SingleviewCocktails {...caipirinha} />} />

                <Route path="/Mojito" render={() => <SingleviewCocktails {...mojito} />} />

            </Switch>
        </div>
    );
}