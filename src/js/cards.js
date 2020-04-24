import bookmarkImageSrc from '../images/label.png'

let cards = [
  {
    title: 'Sandkraut',
    text: `<ul class="card__list">
    <li>Lat.: Arenaria montana</li>
    <li>Bodendecker</li>
    <li>wird bis zu 10 cm hoch</li>
    <li>immergrün</li>
    <li>frosthart</li>
    <li>weiße Blüten</li>
    <li>Blütezeit von Mai bis Juli</li>
    <li>geeignet für Steingarten, oder Dachbegrünung</li>
    <li>beliebt auch als Grabbepflanzung</li>
    <li>auch Hangbepflanzung möglich</li>
    <li>kann mit anderen Stauden kultiviert werden</li>
  </ul>`,
    isBookmarked: false,
  },
  {
    title: 'Moossteinbrech',
    text: `<ul class="card__list">
    <li>Lat.: Saxifraga arendsii</li>
    <li>Pflanzengattung: Steinbrech (Saxifraga)</li>
    <li>Bezeichnung der Art: Moossteinbrech (Saxifraga arendsii)</li>
    <li>Natürliches Vorkommen in den Alpen und Pyrenäen</li>
    <li>Krautige, wintergrüne Pflanze mit kriechendem Wuchs</li>
    <li>Wuchshöhe 3 bis 10 cm, selten bis 20 cm</li>
    <li>Weiße, gelbe, rosa oder rote Blüten</li>
    <li>von März/April bis Mai/Juni</li>
    <li>Runde bis lanzettliche Blätter in Rosettenanordnung</li>
    <li>Winterhart und mehrjährig</li>
    <li>Trivialnamen: Moosartiger Steinbrech</li>
</ul>`,
    isBookmarked: false,
  },
  {
    title: 'Königsfarn',
    text: `<ul class="card__list">
    <li>Lat.: Osmunda regalis</li>
    <li>ursprünglich an hiesigen Küsten beheimatet</li>
    <li>kann bis zu 180 cm hoch werden</li>
    <li>Solitärpflanze</li>
    <li>lange, zweifach gefiederte Wedel</li>
    <li>sommergrün</li>
    <li>Blätter ändern im Herbst die Farbe zu goldgelb</li>
    <li>verträgt Staunässe</li>
    <li>auch im Kübel kultivierbar</li>
    <li>sehr frosthart, verträgt Temperaturen bis -45° Celsius</li>
  </ul>`,
    isBookmarked: false,
  },
]

const container = document.querySelector('[data-js = "card-container"]')
const submitForm = document.querySelector('form')

function renderAllCards(cards) {
  container.innerHTML = ''
  cards.forEach(renderSingleCard)
}

submitForm.addEventListener('submit', event => {
  event.preventDefault()
  onSubmit(event)
  submitForm.reset()
})

function onSubmit(event) {
  event.preventDefault()
  const { title: titleInput, text: textInput } = submitForm
  const newCard = {
    title: titleInput.value,
    text: textInput.value,
  }
  cards = [...cards, newCard]
  renderAllCards(cards)
}

renderAllCards(cards)

function renderSingleCard(card) {
  const el = document.createElement('section')
  el.className = 'card__style'
  el.innerHTML = `
    <img src="${bookmarkImageSrc}" class="card__bookmark ${
    card.isBookmarked ? ' card__bookmark--active' : ''}"
    alt="Bookmark" />
    <header class="card__header">
      <h2>${card.title}</h2>
    </header>
    <p class="card">${card.text}</p>
    `
    const bookmark = el.querySelector('.card__bookmark')
  
    bookmark.addEventListener('click', () => {
    toggleBookmark(card)
  })

    const buttonDelete = document.createElement('button')
    buttonDelete.className = 'card__delete'
    buttonDelete.textContent = 'x'
    el.appendChild(buttonDelete)

    buttonDelete.addEventListener('click', () => {
      deleteCard(card)
    })
  container.appendChild(el)
}

function toggleBookmark(card) {
  const index = cards.indexOf(card)
  cards = [
    ...cards.slice(0, index),
    { ...card, isBookmarked: !card.isBookmarked },
    ...cards.slice(index + 1),
  ]
  renderAllCards(cards)
}

function deleteCard(card) {
  const index = cards.indexOf(card)
  cards = [...cards.slice(0, index), ...cards.slice(index + 1)]
  renderAllCards(cards)
}

