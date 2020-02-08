import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core/'

export function cocktailfilter(props) {

    let cocktails = props.cocktails
    let Ingredients = props.Ingredients
    let allcocktails = props.allcocktail

    let selectedIngredients = Ingredients.filter((element) => element.selected===true);
    let content = []
    let filteredcocktails = []

    //Überprüfen welche Zutaten zwischen den Ausgewählten und dem Cocktail übereinstimmen
    let matchIngridents = (cocktail,selectedIngredients)=>{
    let matchedIngridients = 0;
    cocktail.ingridients.forEach(element => {
        
        if (selectedIngredients.indexOf(element) !== -1) {
            matchedIngridients += 1
        }
        
    })
    let matchingrate = matchedIngridients/cocktail.length()
    return matchingrate
}
    //Abfrage ob die Zutaten übereinstimmen oder alle Cocktails angezeigt werden sollen
    if (allcocktails===true){
        filteredcocktails = cocktails
    }else{
        Object.values(cocktails).forEach(element => {

        if (matchIngridents(element, selectedIngredients) !== 0){
        filteredcocktails.push(element)}
        })
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
                Folgende Cocktails wurden herausgefiltert:
            </h2>
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
} 