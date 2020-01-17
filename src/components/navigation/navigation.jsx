import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import FrontPage from "../../sites/FrontPage/FrontPage.jsx";
import coctailoverview from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import RecipeView from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

export function navigation(siteToLoad) {

    return (
        <div id="NavigationArea">

            <nav>
                <Link to="/zutatenauswahl">
                    <Button id="ingredientsselection" variant="contained" color="default" size="large" >
                        ZutatenAuswahl
                    </Button>
                </Link>

                <br />

                <Link to="/übersichtcocktails">
                    <Button id="OverviewCocktails" variant="contained" color="default" size="large">
                        ÜbersichtCocktails
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

                <Route path="/zutatenauswahl" component={FrontPage} />

                <Route path="/übersichtcocktails" component={OverviewCocktails} />

                <Route path="/cocktail" component={SingleViewCocktails} />

            </Switch>
        </div>
    );
}