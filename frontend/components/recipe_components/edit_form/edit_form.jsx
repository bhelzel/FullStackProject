import React from 'react';
class EditForm extends React.Component {
    
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

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId);
    }

    handleSubmit(e) {
        e.preventDefault();
        let recipe = Object.assign(this.state);
        Object.defineProperty(recipe, 'recipe_type', Object.getOwnPropertyDescriptor(recipe, 'recipeType'));
        delete recipe.recipeType;
        delete recipe.photo;
        console.log(recipe);
        this.props.editRecipe(recipe);
    }

    update(field) {
        if (field === 'vegan' || field === 'vegetarian' || field === 'pescetarian') {
            return e => {
                this.state[field] === false ?
                    this.setState({ [field]: true }) :
                    this.setState({ [field]: false });
            };
        } else if (field === 'ingredients') {
            return e => {
                e.preventDefault();
                let ingredient = document.getElementById('ingredient-input');
                let ingredients = this.state.ingredients;
                ingredients.push(ingredient.value);
                this.setState({ [field]: ingredients });
                ingredient.value = '';
            };
        } else if (field === 'directions') {
            return e => {
                e.preventDefault();
                let direction = document.getElementById('direction-input');
                let directions = this.state.directions;
                directions.push(direction.value);
                this.setState({ [field]: directions });
                direction.value = '';
            };
        } else if (field === 'file') {
            return e => {
                e.preventDefault();
                this.setState({ [field]: e.target.files[0] });
            };
        }
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value });
        };

    }

    render() {
        return(
            <form className="create-form" onSubmit={this.handleSubmit}>
                <div className="top-div">
                    <div className="first-input-div">
                        <input type="file" className="photo-input" onChange={this.update('file')} />
                    </div>
                    <div className="recipe-info">
                        <input className="info-input" type="text" placeholder={this.state.name} value={this.state.name} onChange={this.update('name')} />
                        <input className="info-input" type="text" placeholder={this.state.recipeType} value={this.state.region} onChange={this.update('region')} />
                        <input className="info-input" type="text" placeholder={this.state.region} value={this.state.recipeType} onChange={this.update('recipeType')} />
                    </div>
                </div>
                <div className="ingredient-div">
                    <div className="ingredients">
                        <ul className="list" id="ingredient-list">
                            {
                                this.state.ingredients.length > 0 ?
                                    this.state.ingredients.map(ingredient => {
                                        return (<li><input className="list-input" placeholder={ingredient}/></li>)
                                    }) :
                                    ''
                            }
                        </ul>
                        <div className="add-div">
                            <textarea type="text" className="textarea-input" id="ingredient-input" placeholder="Ingredient" />
                            <button id="add-ingredient" className="add-btn" onClick={this.update('ingredients')} >Add Ingredient</button>
                        </div>
                    </div>
                    <div className="directions">
                        <ol className="list" id="direction-list">
                            {
                                this.state.directions.length > 0 ?
                                    this.state.directions.map(direction => {
                                        return (<li><input className="list-input" placeholder={direction} /></li>)
                                    }) :
                                    ''
                            }
                        </ol>
                        <div className="add-div">
                            <textarea type="text" id="direction-input" className="textarea-input" placeholder="Direction" />
                            <button id="add-direction" className="add-btn" onClick={this.update('directions')}>Add Direction</button>
                        </div>
                    </div>
                </div>
                <div className="diet-div">
                    <p>Vegetarian:</p>
                    <div className="check-container">
                        <input type="checkbox" id="checkbox1" className="checkboxes" value={this.state.vegan} onClick={this.update('vegan')} />
                        <label for="checkbox1" className="create-label" onClick={this.update('vegan')}></label>
                    </div>
                    <p>Vegan:</p>
                    <div className="check-container">
                        <input type="checkbox" id="checkbox2" className="checkboxes" value={this.state.vegatarian} onClick={this.update('vegetarian')} />
                        <label for="checkbox2" className="create-label" onClick={this.update('vegetarian')}></label>
                    </div>
                    <p>Pescetarian:</p>
                    <div className="check-container">
                        <input type="checkbox" id="checkbox3" className="checkboxes" value={this.state.pescetarian} onClick={this.update('pescetarian')} />
                        <label for="checkbox3" className="create-label" onClick={this.update('pescetarian')}></label>
                    </div>
                </div>
                <input type="submit" className="create-submit" value="Edit Recipe" />
            </form>
        ) 
    }
}

export default EditForm;