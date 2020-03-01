import React from "react";
//import {useState} from "react";
import Button from '@material-ui/core/Button';


//importieren css.file
import './cocktail.css'

//ermöglicht die Einzelansicht eines Cocktails
export default function Cocktail(props) {
    console.log(props.location)

    //let [state,setState] = useState(props);

    let cocktails = props.cocktails
    let choosencocktail = props.choosencocktail
    //console.log("cocktails",cocktails)
    //console.log("choosencocktail", choosencocktail)

    //Funktion um den nächsten Cocktail aufzurufen
    let nextcocktail = (props) => {

    if (props.choosencocktail >= (props.cocktails.length - 1)) {
        props.choosencocktail = 0
    } else {
        props.choosencocktail += 1
    }
        Cocktail(props)
    //angedachte Möglichkeit zum aktuallsieren der Seite
    //setTest({update:true}) 
}
      
    //Zusammenfassen aller Zutaten
    let ingredients = []    
    cocktails[choosencocktail].ingredients.map((element) =>
        ingredients.push(
            <tr >
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
                        <td id="Zutatenframe">
                            <h2>
                               Zutaten: 
                            </h2>
                            {ingredients}
                        </td>
                    </tr>
                    <tr>
                        <td id id="Zubereitungsframe">
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