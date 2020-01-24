import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route } from 'react-router-dom';

import FrontPage from "../../sites/FrontPage/FrontPage.jsx";
import overviewcocktails from "../../sites/OverviewCocktails/OverviewCocktails.jsx";
import singleviewcocktails from "../../sites/SingleViewCocktails/SingleViewCocktails.jsx";

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

                <Route path="/übersichtcocktails" component={overviewcocktails} />

                <Route path="/cocktail" component={singleviewcocktails} />

                <Route path="/Cuba_Libre" component={singleviewcocktails} />

                <Route path="/Caipirinha" component={singleviewcocktails} />

                <Route path="/Mojito" component={singleviewcocktails} />

            </Switch>
        </div>
    );
}