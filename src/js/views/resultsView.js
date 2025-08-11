import View from './View'
import icons from 'url:../../img/icons.svg'
import previewView from './previewView'
class ResultView extends View {
  _parentElement = document.querySelector('.results')
  _errorMessage = 'No recipes found for your query! Please try again'
  _message = ''

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const li = e.target.closest('li.preview');
      if (!li) return; 
      handler(li);
    });
  }
  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join('')
  }
}

export default new ResultView()
