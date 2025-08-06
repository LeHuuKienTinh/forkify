import { async } from 'regenerator-runtime'
import { getJSON } from './helpers'
import { API_URL } from './config'
import recipeFaker from '../../public/data.json'

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
}

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`)

    // const data = await recipeFaker

    let { recipe } = data.data
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }
    console.log('Cong thuc', state.recipe)
  } catch (err) {
    throw err
  }
}

export const loadSearchResults = async function(query){
try{
  state.search.query = query 
  const data = await getJSON(`${API_URL}?search=${query}`)
  console.log('tim kiem',data)
  state.search.results = data.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    }
  })
  console.log(state.search.results)
} catch (err){
  throw err
}
}
console.log('da cap nhat')
loadSearchResults('pizza')