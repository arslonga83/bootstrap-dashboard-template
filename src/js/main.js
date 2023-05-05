// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import ChartJS
import Chart from 'chart.js/auto'

// Side Navigation Slide 
const btn = document.querySelector('.btn-slide');

btn.addEventListener('click', () => {
  document.querySelector('.side-nav').classList.toggle('slide')
  document.querySelector('.open').classList.toggle('d-none')
  document.querySelector('.close').classList.toggle('d-none')
})


// chart 1
const ctx = document.getElementById('myChart1').getContext('2d')

const myChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9',
        'rgba(54, 162, 235, 0.9',
        'rgba(255, 206, 86, 0.9', 
        'rgba(75, 192, 192, 0.9', 
        'rgba(153, 102, 255, 0.9', 
        'rgba(255, 159, 64, 0.9)'
      ], 
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)'
      ], 
      borderWidth: 1
    }]
  }
})

// chart2
const ctx2 = document.getElementById('myChart2').getContext('2d')

const myChart2 = new Chart(ctx2, {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [12, 15, 3, 7, 12, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.3',
        'rgba(54, 162, 235, 0.3',
        'rgba(255, 206, 86, 0.3', 
        'rgba(75, 192, 192, 0.3', 
        'rgba(153, 102, 255, 0.3', 
        'rgba(255, 159, 64, 0.3)'
      ], 
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)'
      ], 
      borderWidth: 1
    }]
  }
})

// chart2
const ctx3 = document.getElementById('myChart3').getContext('2d')

const myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [12, 15, 3, 7, 12, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.3',
        'rgba(54, 162, 235, 0.3',
        'rgba(255, 206, 86, 0.3', 
        'rgba(75, 192, 192, 0.3', 
        'rgba(153, 102, 255, 0.3', 
        'rgba(255, 159, 64, 0.3)'
      ], 
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)'
      ], 
      borderWidth: 1
    }]
  }
})

export { Chart }
