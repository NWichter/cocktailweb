import React from 'react';
import { Checkbox } from '@material-ui/core';

import './IngredientsSelection.css';
//import { Redirect } from 'react-router-dom';

export function ingredientsselection(probs) {

    //Diese Funktion erfasst den Status der Checkboxen beim Anklicken
    const handleChange = (id) => {
        if (probs.ingredients[id].selected) {
            probs.ingredients[id].selected = false
            this.forceUpdate()
        } else {
            probs.ingredients[id].selected = true
            this.forceUpdate()
        }
    };
    
    // zeigt alle Zutaten mit ihrer jewiligen Checkbox an 
    let ingredients = []
        probs.ingredients.map((ingredient) =>
        ingredients.push(
            <tr id="ingredientsselectionbody" style={{ backgroundColor: "red" }} >
                <td >
                    <h3>
                        {ingredient.name}    
                    </h3>
                    
                </td>
                <td>
                    <Checkbox id={ingredient.name}
                        value="unchecked"
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        onChange={handleChange[ingredient.id]}
                    />
                </td>
            </tr>
        )
    )
    return (
        <div>
            <table>
                <tbody>
                    {ingredients}
                </tbody>
            </table>
        </div>
    );
    }