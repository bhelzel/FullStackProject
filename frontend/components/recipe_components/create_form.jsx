import React from 'react';

export default class CreateForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            recipeType: '',
            region: '',
            vegan: false,
            vegetarian: false,
            pescetarian: false,
            ingredients: [],
            directions: []
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.postRecipe({
        //     name: 
        // })
    }

    update(field) {
        if (field === 'vegan' || field === 'vegetarian' || field === 'pescetarian') {
            return e => {
                this.state.field === false ?
                this.setState({ [field]: true }) :
                this.setState({ [field]: false }); 
            };
        } else if (field === 'ingredients') {
            return e => { 
                let ingredient = document.getElementById('ingredient-input');
                let ingredients = this.state.ingredients.push(ingredient.value);
                console.log(this.state.ingredients);
                this.setState({ [field]: ingredients });
                ingredient.value = '';
            };
        } else if (field === 'directions') { 
            return e => {
                let direction = document.getElementById('direction-input');
                let directions = this.state.directions.push(direction.value);
                this.setState({ [field]: directions });
            };
        }
        return e => this.setState({
            [field]: e.target.value
        });
    }

    addIngredient() {
        let item = document.getElementById('ingredient-input');
        let ingredientsList = this.state.ingredients.push(item.value);
        this.setState({
            [ingredients]: ingredientsList
        });
        item.innerHTML = '';
    }

    addDirection() {
        let item = document.getElementById('direction-input');
        item.innerHTML = '';
    }

    render() {
        console.log(this.state.ingredients);
        return(
            <form className="create-container">
                <div className="recipe-info">
                    <input className="info-input" type="text" placeholder="Recipe Name" value={this.state.name} onChange={this.update('name')} />
                    <input className="info-input" type="text" placeholder="Recipe Region" value={this.state.region} onChange={this.update('region')}/>
                    <input className="info-input" type="text" placeholder="Recipe Type" value={this.state.recipeType} onChange={this.update('recipeType')} />
                </div>
                <div className="diet-div">
                    <label className="create-label">Vegan:
                        <input type="checkbox" className="checkboxes" value={this.state.vegan} onClick={this.update('vegan')}/>
                    </label>
                    <label className="create-label">Vegetarian:
                        <input type="checkbox" className="checkboxes" value={this.state.vegatarian} onClick={this.update('vegetarian')} />
                    </label>
                    <label className="create-label">Pescetarian:
                        <input type="checkbox" className="checkboxes" value={this.state.pescetarian} onClick={this.update('pescetarian')} />
                    </label>
                </div>
                <div className="ingredient-div"> 
                    <div className="ingredients">
                        <ul id="ingredient-list">
                            {
                                this.state.ingredients.length > 0 ?
                                this.state.ingredients.map(ingredient => {
                                    return (<li>{ingredient}</li>)
                                }) :
                                ''
                            }
                        </ul>  
                        <div className="add-div">
                            <label className="create-label">Ingredients:</label>
                            <input type="text" className="list-input" id="ingredient-input" />
                            <button id="add-ingredient" onClick={this.update('ingredients')} >Add Ingredient</button>
                        </div>                      
                    </div>
                    <div className="directions">
                        <ol id="direction-list">
                            {
                                this.state.directions.length > 0 ?
                                this.state.directions.map(direction => {
                                    return (<li>{direction}</li>)
                                }) :
                                ''
                            }
                        </ol>
                        <div className="add-div">
                            <label className="create-label">Directions:</label>
                            <input type="text" id="direction-input" className="list-input" onChange={this.update('directions')} />
                            <button id="add-direction">Add Direction</button>
                        </div>        
                    </div>
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        )
    }
}