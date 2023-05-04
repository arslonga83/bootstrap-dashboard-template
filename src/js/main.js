// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const btn = document.querySelector('.btn-slide');

btn.addEventListener('click', () => {
  document.querySelector('.side-nav').classList.toggle('slide')
  document.querySelector('.open').classList.toggle('d-none')
  document.querySelector('.close').classList.toggle('d-none')
})