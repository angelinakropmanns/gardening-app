const homeButton = document.querySelector('.home-btn')
const createButton = document.querySelector('.create-btn')
const profileButton = document.querySelector('.profile-btn')
const settingsButton = document.querySelector('.settings-btn')

homeButton.addEventListener('click', () => {
  homeButton.classList.add('active')
  createButton.classList.remove('active')
  profileButton.classList.remove('active')
  settingsButton.classList.remove('active')
})
createButton.addEventListener('click', () => {
  homeButton.classList.remove('active')
  createButton.classList.add('active')
  profileButton.classList.remove('active')
  settingsButton.classList.remove('active')
})
profileButton.addEventListener('click', () => {
  homeButton.classList.remove('active')
  createButton.classList.remove('active')
  profileButton.classList.add('active')
  settingsButton.classList.remove('active')
})
settingsButton.addEventListener('click', () => {
  homeButton.classList.remove('active')
  createButton.classList.remove('active')
  profileButton.classList.remove('active')
  settingsButton.classList.add('active')
})
