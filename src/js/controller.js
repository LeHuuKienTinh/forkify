import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import { MODAL_CLOSE_SEC } from './config.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchVIew.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import bookmarksView from './views/bookmarkView.js'
import addRecipeView from './views/addRecipeView.js'

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1) || '5ed6604591c37cdc054bc886'
    if (!id) return
    recipeView.renderSpinner()

    resultsView.update(model.getSearchResultsPage())

    await model.loadRecipe(id)

    recipeView.render(model.state.recipe)
    bookmarksView.update(model.state.bookmarks)
  } catch (err) {
    recipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner()

    const query = searchView.getQuery()
    if (!query) return

    await model.loadSearchResults(query)

    resultsView.render(model.getSearchResultsPage(1))
    paginationView.render(model.state.search)

    // Bỏ hidden sau khi đã render xong
    document.querySelector('.results').classList.remove('hidden')
    document.querySelector('.pagination').classList.remove('hidden')
  } catch (err) {
    throw err
  }
}

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage))

  paginationView.render(model.state.search)
}

const controlServings = function (newServings) {
  model.updateServings(newServings)
  recipeView.update(model.state.recipe)
}

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)

  recipeView.update(model.state.recipe)

  bookmarksView.render(model.state.bookmarks)
}

function controlBookMarks(li) {
  document.querySelector('.bookmarks__list').classList.remove('hidden')
  document.querySelector('.bookmarks').classList.remove('hidden')
  document.querySelector('.bookmarks').style.opacity = 1
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner()

    await model.uploadRecipe(newRecipe)

    recipeView.render(model.state.recipe)

    addRecipeView.renderMessage()

    bookmarksView.render(model.state.bookmarks)

    window.history.pushState(null, '', `#${model.state.recipe.id}`)

    setTimeout(async function () {
      await addRecipeView.toggleWindow()
      addRecipeView._clearInput()
    }, MODAL_CLOSE_SEC * 1000)
  } catch (err) {
    addRecipeView.renderError(err.message)
  }
}

function controlHiddenListItem(li) {
  if (window.innerWidth <= 600) {
    li.closest('.results').classList.add('hidden')
    document.querySelector('.pagination').classList.add('hidden')
  }
}

function controlHiddenListBookmark(li) {
  li.closest('.bookmarks__list').classList.add('hidden')
  document.querySelector('.bookmarks').classList.add('hidden')
  document.querySelector('.bookmarks').style.opacity = 0
}

const init = function () {
  bookmarksView.addHandlerRender(controlBookMarks)
  bookmarksView.addHandlerClickBookmark(controlHiddenListBookmark)
  recipeView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
  addRecipeView.addHandlerUpload(controlAddRecipe)
  resultsView.addHandlerClick(controlHiddenListItem)
}

init()
