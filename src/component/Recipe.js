import React from 'react';


const Recipe = props => (
		<div className='container'>
			<div className='row'>
			{ props.recipes.map((recipes) => {
        	return  (
        			<div key={recipes.title} className="col-md-4" style={{marginBottom:'2rem'}}>
        				<div className="recipes__box">
        					<img className='recipe__box-img' src={recipes.image_url} alt={recipes.title}/>
        					<div className="recipe__text">
        						<h5 className="recipes__title">
        							{recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0,25)}...` }
        						</h5>
        						<p className="recipes__subtitle">Publisher: <span>{recipes.publisher}</span></p>
        					</div>
        					<button className="recipe_buttons">View Recipe</button>
        				</div>
        			</div>
        		);
        } ) }
			</div>
		</div>
	);

export default Recipe;