import React,{useState} from "react";
import Button from '@material-ui/core/Button';

//Funktion um den nächsten Cocktail aufzurufen

export function Cocktail(props) {
    const [state,setState] = useState(props);
    let nextcocktail = (state) => {

    if (state.choosencocktail >= (state.cocktails.length - 1)) {
        state.choosencocktail = 0
    } else {
        state.choosencocktail += 1
    }
    Cocktail(state)
    setState({update:true})
}
    let cocktails = state.cocktails
    let choosencocktail = state.choosencocktail
       
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
                                onClick={()=>{nextcocktail(state)}}>
                                Nächster Cocktail
                                </Button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
} 