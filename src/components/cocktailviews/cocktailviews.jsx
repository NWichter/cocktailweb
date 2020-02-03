import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core/'

//importieren css.file
import './cocktailviews.css'

export function cocktailviews(cocktails) {

    let content = []
    
    // Ausgabe aller Cocktails mit Bild und Name 
    Object.values(cocktails).forEach(element => {
        let image = require('../../images/' + element.img + '.jpg');
        let cocktailname = element.name
        
        content.push(
            <table id="cocktailviewstable">
                <ListItem //button alignItems="flex-start" component={Link} to={'/cocktail'} onClick={() => { props.aktiv(element.id) }}
                >
                    <ListItemAvatar>
                        <Avatar alt="Image" src={image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={cocktailname}/>
                </ListItem>
            </table>
        )
    });

    return (

        <div>
            <h2>
                Alle Cocktails:
            </h2>
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
} 