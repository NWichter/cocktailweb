import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export function cocktailviews(probs) {

    let ingredients = []
    probs.map((element) =>
        ingredients.push(
            <tr id={element.name} >
                <Link to={element.name}>
                    <Button>
                        <td>
                            <img src={element.img} />
                        </td>
                        <td>
                            {element.name}
                        </td>
                        <td>
                            {element.description}
                        </td>
                    </Button>
                </Link>
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