import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import FrontPage from "../../sites/FrontPage/FrontPage.jsx";
import overviewcocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import singleviewcocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

export function navigation(probs) {

    console.log("navprobs", probs.ingredients)

    let cocktails = probs.cocktails
    let ingredients = { ingredients: probs.ingredients }

    console.log("ingredients", ingredients)
    
    let cubalibre = {name: cocktails[0]}
    let caipirinha = {name: cocktails[1]}
    let mojito = {name: cocktails[2]}

    return (
        <div id="NavigationArea">

            <nav>
                <Link to="/zutatenauswahl">
                    <Button id="ingredientsselection" variant="contained" color="default" size="large" >
                        Zutaten Auswahl
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
                        Cocktail
                    </Button>
                </Link>
            </nav>

            <Switch>

                <Route path="/zutatenauswahl" render={() => <FrontPage {...ingredients} />} />

                <Route path="/uebersichtcocktails" component={overviewcocktails} />

                <Route path="/cocktail" render={() => <singleviewcocktails {...cubalibre} />} />

                <Route path="/Cuba_Libre" render={() => <singleviewcocktails {...cubalibre} />} />

                <Route path="/Caipirinha" render={() => <singleviewcocktails {...caipirinha} />} />

                <Route path="/Mojito" render={() => <singleviewcocktails {...mojito} />} />

            </Switch>
        </div>
    );
}