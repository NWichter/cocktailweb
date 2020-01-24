import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ingredientsselection } from '../../components/ingredientsselection/ingredientsselection';

class FrontPage extends React.Component {

    state = {
        ingredients: [{ name: "Rum", selected: false }, { name: "Cola", selected: false }, { name: "Zitrone", selected: false }]
    }

    render() {

        return (
            <div id="ingredientsselectionFP" >

                {ingredientsselection(this.state.ingredients)}

                <hr 
                    style={{
                        color: "green",
                        backgroundColor: "green",
                        height: 5
                    }}>
                </hr>

                <p>
                    Cocktails ohne passende Zutaten anzeigen
                    <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                </p>

                <hr 
                    style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5
                    }}>
                </hr>

                <Button>
                    Cocktails filtern
                </Button>

            </div>
        );
    }
}

export default FrontPage; 