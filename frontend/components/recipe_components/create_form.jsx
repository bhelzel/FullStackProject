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
                let ingredients = this.state.ingredients;
                ingredients.push(ingredient.value);
                this.setState({ [field]: ingredients });
                ingredient.value = '';
            };
        } else if (field === 'directions') { 
            return e => {
                let direction = document.getElementById('direction-input');
                let directions = this.state.directions;
                directions.push(direction.value);
                this.setState({ [field]: directions });
                direction.value = '';
            };
        }
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        return(
            <form className="create-container">
                <div className="recipe-info">
                    <input className="info-input" type="text" placeholder="Recipe Name" value={this.state.name} onChange={this.update('name')} />
                    <input className="info-input" type="text" placeholder="Recipe Region" value={this.state.region} onChange={this.update('region')}/>
                    <input className="info-input" type="text" placeholder="Recipe Type" value={this.state.recipeType} onChange={this.update('recipeType')} />
                </div>
                <div className="ingredient-div"> 
                    <div className="ingredients">
                        <ul className="list" id="ingredient-list">
                            {
                                this.state.ingredients.length > 0 ?
                                this.state.ingredients.map(ingredient => {
                                    return (<li>{ingredient}</li>)
                                }) :
                                ''
                            }
                        </ul>  
                        <div className="add-div">
                            <textarea type="text" className="textarea-input" id="ingredient-input" placeholder="Ingredient"/>
                            <button id="add-ingredient" className="add-btn" onClick={this.update('ingredients')} >Add Ingredient</button>
                        </div>                      
                    </div>
                    <div className="directions">
                        <ol className="list" id="direction-list">
                            {
                                this.state.directions.length > 0 ?
                                this.state.directions.map(direction => {
                                    return (<li>{direction}</li>)
                                }) :
                                ''
                            }
                        </ol>
                        <div className="add-div">
                            <textarea type="text" id="direction-input" className="textarea-input" placeholder="Direction"/>
                            <button id="add-direction" className="add-btn" onClick={this.update('directions')}>Add Direction</button>
                        </div>        
                    </div>
                </div>
                <div className="diet-div">
                    <label className="create-label">Vegan:</label>
                    <input type="checkbox" className="checkboxes" value={this.state.vegan} onClick={this.update('vegan')} />
                    
                    <label className="create-label">Vegetarian:</label>
                    <input type="checkbox" className="checkboxes" value={this.state.vegatarian} onClick={this.update('vegetarian')} />
                    
                    <label className="create-label">Pescetarian:</label>
                    <input type="checkbox" className="checkboxes" value={this.state.pescetarian} onClick={this.update('pescetarian')} />
                    
                </div>
                <button type="submit" className="create-submit">Create Recipe</button>
            </form>
        )
    }
}