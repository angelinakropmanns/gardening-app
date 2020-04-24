console.log('Hello World')
const slider = document.getElementById('slider')
const body = document.querySelector('body')

if (sessionStorage.getItem('mode') == 'dark') {
  darkmode()
} else {
  nodark()
}

slider.addEventListener('change', function () {
  if (slider.checked) {
    darkmode()
  } else {
    nodark()
  }
})

function darkmode() {
  body.classList.add('darkmode')
  slider.checked = true
  sessionStorage.setItem('mode', 'dark')
}
function nodark() {
  body.classList.remove('darkmode')
  slider.checked = false
  sessionStorage.setItem('mode', 'light')
}
