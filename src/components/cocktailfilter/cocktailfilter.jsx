import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core/'


export function cocktailfilter(props) {
    console.log("props",props)
    let cocktails = props.cocktails
    let Ingredients = props.Ingredients
    let allcocktails = props.allcocktails
    console.log(Ingredients)
    let selectedIngredientsTrue = Ingredients.filter((element) => element.selected===true);
    let selectedIngredients = []
    selectedIngredientsTrue.forEach(element => {
        selectedIngredients.push(element.name)
    })

    let content = []
    let filteredcocktails = []

    //Überprüfen welche Zutaten zwischen den Ausgewählten und dem Cocktail übereinstimmen
    let matchIngridents = (cocktail,selectedIngredients)=>{
    let matchedIngredients = 0;
    console.log("selected",selectedIngredients)
    console.log(cocktail.ingredients)
    cocktail.ingredients.forEach(element => {
        
        if (selectedIngredients.indexOf(element) !== -1) {
            matchedIngredients = matchedIngredients + 1
        }
        
    })
    console.log(matchedIngredients, cocktail.ingredients.length)
    let matchingrate = Math.round(matchedIngredients/cocktail.ingredients.length*100)/100
    return matchingrate
}
    //Abfrage ob die Zutaten übereinstimmen oder alle Cocktails angezeigt werden sollen
    console.log("allcocktails",allcocktails)
    if (allcocktails===true){
        filteredcocktails = cocktails
    }else{
        Object.values(cocktails).forEach(element => {

        if (matchIngridents(element, selectedIngredients) !== 0){
        filteredcocktails.push(element)}
        })
    }
    
    let message = "Folgende Cocktails wurden herausgefiltert:"
    if (filteredcocktails.length === 0){
        message = "Es konnten keine passenden Cocktails gefunden werden"
    }

    // Ausgabe aller gefilterter Cocktails mit Bild und Name 
    Object.values(filteredcocktails).forEach(element => {
        let image = require('../../images/' + element.img + '.jpg');
        let cocktailname = element.name
        let matchingrate = matchIngridents(element,selectedIngredients)

        content.push(
            <table>
                <ListItem //button alignItems="flex-start" component={Link} to={'/cocktail'} onClick={() => { props.aktiv(element.id) }}
                >
                    <ListItemAvatar>
                        <Avatar alt="Image" src={image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={cocktailname} secondary={matchingrate} />
                </ListItem>
            </table>
        )
    });

    return (

        <div>
            <h2>
                {message}
            </h2>
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
} 