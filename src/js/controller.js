import recipeFaker from '../../public/data.json'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultView from './views/resultsView.js'
import bookmarkView from './views/bookmarkView.js'
import paginationView from './views/paginationView.js'
import addRecipeView from './views/addRecipeView.js'
import { MODAL_CLOSE_SEC } from './config.js'

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1)

    if (!id) return

    recipeView.renderSpinner()

    //Update results view to mark selected search result
    resultView.update(model.getSearchResultsPage())

    //0 Updating bookmarks vỉew
    bookmarkView.update(model.state.bookmarks)

    // 1) Loading recipe
    await model.loadRecipe(id)

    //2) Redering recipe
    recipeView.render(model.state.recipe)
    controlServings(model.state.recipe.servings)
  } catch (err) {
    recipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner()
    //1 Get search query
    const query = searchView.getQuery()
    if (!query) return

    //2 Load search results
    await model.loadSearchResults(query)

    //3 Render results
    resultView.render(model.getSearchResultsPage())

    //4 Render initial pagination buttons
    paginationView.render(model.state.search)
  } catch (err) {
    console.log(err)
  }
}

const controlPagination = function (goToPage) {
  //1 Render new results
  resultView.render(model.getSearchResultsPage(goToPage))

  //2 Render new  pagination buttons
  paginationView.render(model.state.search)
}

const controlServings = function (newServings) {
  model.updateServings(newServings)
  recipeView.update(model.state.recipe)
}

const controlAddBookmark = function () {
  //1 Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)

  //2 Update recipe view
  recipeView.update(model.state.recipe)

  //3 Render bookmarks
  bookmarkView.render(model.state.bookmarks)
}

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmarks)
}

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner()
    //Upload the new recipe data
    await model.uploadRecipe(newRecipe)

    //Render recipe
    recipeView.render(model.state.recipe)

    //Success message
    addRecipeView.renderMessage

    //Render bookmark view
    bookmarkView.render(model.state.bookmarks)

    //Change ID in url
    window.history.pushState(null, '', `${model.state.recipe.id}`)

    //Close form
    setTimeout(function () {
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000)
  } catch (err) {
    console.error(err)
    addRecipeView.renderError(err.message)
  }
}

function init() {
  bookmarkView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandleSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
  addRecipeView.addHandlerUpload(controlAddRecipe)
}

init()

