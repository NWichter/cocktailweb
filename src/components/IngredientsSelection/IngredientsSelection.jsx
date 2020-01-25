import React from 'react';
import { Checkbox } from '@material-ui/core';

export function ingredientsselection(probs) {

    const handleChange = (event) => {
        update_ingredient_list(event)
        console.log(selected_ingredients)
    };

    const update_ingredient_list = (event) => {

        let index = selected_ingredients.findIndex(x => x.key === event.target.id)

        if (index === -1) {
            selected_ingredients.push({ key: event.target.id, value: event.target.checked })
        }
        else {
            let status = selected_ingredients[index].value
            let rstatus = true
            if (status === true) { rstatus = false } else { rstatus = true }
            selected_ingredients[index].value = rstatus
        }
    }

    let selected_ingredients = []

    let ingredients = []
    probs.map((element) =>
        ingredients.push(
            <tr id={element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox id={element.Zutat}
                        value="unchecked"
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        onChange={handleChange}
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