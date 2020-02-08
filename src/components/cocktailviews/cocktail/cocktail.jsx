import React from "react";
import Button from '@material-ui/core/Button';

//Funktion um den nächsten Cocktail aufzurufen


export function cocktail(props) {
    
    let nextcocktail = (props) => {

    if (props.choosencocktail >= (props.cocktails.length - 1)) {
        props.choosencocktail = 0
    } else {
        props.choosencocktail += 1
    }
    cocktail(props)
}
    let cocktails = props.cocktails
    let choosencocktail = props.choosencocktail
       
    //Zusammenfassen aller Zutaten
    let ingredients = []    
    cocktails[choosencocktail].ingredients.map((element) =>
        ingredients.push(
            <tr>
                <td>
                    {element}
                </td>
            </tr>
        )
    )
    
    let recipe = []
    cocktails[choosencocktail].recipe.map((element) =>
        recipe.push(
            <tr>
                <td>
                    {element}
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
                            <h2>
                               Cocktailname: 
                            </h2>
                            {cocktails[choosencocktail].name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>
                               Zutaten: 
                            </h2>
                            {ingredients}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>
                                Zubereitungsschritte:
                            </h2>
                            {recipe}
                        </td>
                    </tr>
                    <tr>
                        <td>    
                                <Button id="nextcocktail"
                                style={{ backgroundColor: "red" }}
                                onClick={()=>{nextcocktail(props)}}>
                                Nächster Cocktail
                                </Button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
} 