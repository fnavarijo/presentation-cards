export const AppRouter = {
  init() {
    const currentPath = window.location.pathname
    this.navigate(currentPath)

    return this
  },
  navigate(to) {
    const mainContainer = document.querySelector('main')

    let currentPage = null

    history.pushState({ route: to }, null, to)

    switch (to) {
      case '/':
        currentPage = document.createElement('card-creator-page')
        break
      case '/share':
        currentPage = document.createElement('card-share-page')
        break
      case '/viewer':
        currentPage = document.createElement('card-viewer-page')
        break
      default:
        currentPage = document.createElement('not-found-page')
    }

    mainContainer.innerHTML = ''
    mainContainer.appendChild(currentPage)


  }
}