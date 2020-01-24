import React from 'react';
import { Checkbox } from '@material-ui/core';

export function ingredientsselection(probs) {
    let ingredients = []
    probs.map((element) =>
        ingredients.push(
            <tr id={element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox
                        value="uncontrolled"
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        id={element.Zutat}
                        /*onChange = {}*/ />
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