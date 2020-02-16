import React from "react";
import {useState} from "react";
import Button from '@material-ui/core/Button';



export default function Cocktail(props) {
    console.log(props.location)

    //let [test,setTest] = useState(props);

    let cocktails = props.cocktails
    let choosencocktail = props.choosencocktail
    console.log("cocktails",cocktails)
    console.log("ccccocktails", choosencocktail)

    //Funktion um den nächsten Cocktail aufzurufen
    let nextcocktail = (props) => {

    if (props.choosencocktail >= (props.cocktails.length - 1)) {
        props.choosencocktail = 0
    } else {
        props.choosencocktail += 1
    }
        Cocktail(props)
    //setTest({update:true})
}
      
    //Zusammenfassen aller Zutaten
    let ingredients = []    
    cocktails[choosencocktail].ingredients.map((element) =>
        ingredients.push(
            <tr id="Zutatenframe">
                <td>
                    {element}
                </td>
            </tr>
        )
    )

    //Zusammenfassen aller Zubereitungsschritte
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
            <table >
                <tbody >
                    <tr >
                        <td id="Cocktailnameframe">
                            <h2>
                               Cocktailname: 
                            </h2>
                            {cocktails[choosencocktail].name}
                        </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td >
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
                                onClick={() => { nextcocktail(props)}}>
                                Nächster Cocktail
                                </Button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
} 