import React from "react";
import { Checkbox } from '@material-ui/core';

export function cocktail(probs) {

    let Zutaten = []
    let recipe = []
    probs.ingredients.map((element) =>
        Zutaten.push(
            <tr>
                <td>
                    {element}
                </td>
            </tr>
        )
    )

    probs.Rezept.map((element) =>
        recipe.push(
            <tr>
                <td>
                    {element}
                </td>
                <td>
                <Checkbox
                        value="uncontrolled"
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        id={element}
                        />
                </td>
            </tr>
        )
    )

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {probs.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {Zutaten}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {recipe}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
} 