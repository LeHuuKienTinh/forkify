import recipeFaker from '../../public/data.json'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)

    if (!id) return

    recipeView.renderSpinner()

    // 1) Loading recipe
    await model.loadRecipe(id)

    //2) Redering recipe
    recipeView.render(model.state.recipe)
  } catch (err) {
    recipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if(!query) return;
    
    await model.loadSearchResults('pizza')
    console.log(model.state.search.results)
  } catch (err) {
    console.log(err)
  }
}
controlSearchResults()

function init() {
  recipeView.addHandlerRender(controlRecipes)
}

init()

