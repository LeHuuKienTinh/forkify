import View from './View'

import previewView from './previewView'
import icons from 'url:../../img/icons.svg'

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list')
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it'
  _message = ''

  addHandlerRender(handler) {
    window.addEventListener('click', handler)
  }


  addHandlerClickBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const li = e.target.closest('li.preview')
      if (!li) return 
      handler(li)
    })
  }
  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join('')
  }
}

export default new BookmarksView()
