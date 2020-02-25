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
        this.props.createRecipe(this.state);
    }

    addIngredient(item, e) {
        e.preventDefault(e);
        this.setState({
            ingredients: ingredients.push(item)
        });
    }
    render() {
        return(
            <div className="create-container">
                <form className="create-form">
                    <div className="recipe-info">
                        <input className="info-input" type="text" placeholder="Recipe Name" value={this.state.name}/>
                        <input className="info-input" type="text" placeholder="Recipe Region" value={this.state.region} />
                        <input className="info-input" type="text" placeholder="Recipe Type" value={this.state.recipeType} />
                    </div>
                    <div className="diet-div">
                        <label className="create-label">Vegan:
                            <input type="checkbox" className="checkboxes" value={this.state.vegan}/>
                        </label>
                        <label class="create-label">Vegetarian:
                            <input type="checkbox" className="checkboxes" value={this.state.vegatarian}/>
                        </label>
                        <label class="create-label">Pescetarian:
                            <input type="checkbox" className="checkboxes" value={this.state.pescetarian}/>
                        </label>
                    </div>
                    <div className="ingredient-div"> 
                        <ul className="ingredient-list"></ul>  
                        <label className="create-label">Ingredients:
                            <input type="text" className="list-input" value={this.state.ingredients}/>
                        </label>
                        <ol className="direction-list"></ol>
                        <label className="create-label">Directions:
                            <input type="text" className="list-input" value={this.state.directions}/>
                        </label>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}