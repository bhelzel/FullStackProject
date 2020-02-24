import React from 'react';

export default class CreateForm extends React.Component {
    
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return(
            <div class="create-container">
                <form class="create-form">
                    <label class="create-label">Recipe name:
                        <input type="text"/>
                    </label>
                    <label class="create-label">Recipe type:
                        <input type="text" />
                    </label>
                    <label class="create-label">Region:
                        <input type="text" />
                    </label>
                    <label class="create-label">Ingredients:
                        <input type="text" />
                    </label>
                    <label class="create-label">Directions:
                        <input type="text" />
                    </label>
                    <label class="create-label">Vegan:
                        <input type="text" />
                    </label>
                    <label class="create-label">Vegetarian:
                        <input type="text" />
                    </label>
                    <label class="create-label">Pescetarian:
                        <input type="text" />
                    </label>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}