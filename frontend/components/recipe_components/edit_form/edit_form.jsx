import React from 'react';
export default class EditForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.recipe.name,
            recipeType: this.props.recipe.recipeType,
            region: this.props.recipe.region,
            vegan: this.props.recipe.vegan,
            vegetarian: this.props.recipe.vegetarian,
            pescetarian: this.props.recipe.pescetarian,
            ingredients: this.props.recipe.ingredients,
            directions: this.props.recipe.directions
        };
    }

    render() {
        return(
            <form className="edit-form">
                
            </form>
        ) 
    }
}