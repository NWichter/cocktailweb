import React from 'react';
import { Checkbox } from '@material-ui/core';

import './IngredientsSelection.css';
//import { Redirect } from 'react-router-dom';

export function ingredientsselection(props) {

    //Diese Funktion wechselt den Status der Checkboxen beim Anklicken
    const handleChange = (id) => {
        if (props.ingredients[id].selected) {
            props.ingredients[id].selected = false
        } else {
            props.ingredients[id].selected = true
        }
    };
    
    // zeigt alle Zutaten mit ihrer jewiligen Checkbox an 
    let ingredients = []
        props.ingredients.map((ingredient) =>
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