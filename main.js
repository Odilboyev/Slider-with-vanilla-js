const slider = document.querySelector('.slider')
      active = document.querySelector('#active');
      line1 = document.querySelector('#line-1')
      line2 = document.querySelector('#line-2')
      line3 = document.querySelector('#line-3')
      line4 = document.querySelector('#line-4')
      container = document.querySelector('.container')
      logo = document.getElementById('logo')

line1.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)'
    active.style.top = '0'
    container.style.background = 'linear-gradient( 112.7deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% )'
    logo.src = './images/js.svg'
})

line2.addEventListener('click', () => {
    slider.style.transform = 'translateX(-25%)'
    active.style.top = '80px'
    container.style.background = 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'
    logo.src = './images/react.svg'
})

line3.addEventListener('click', () => {
    slider.style.transform = 'translateX(-50%)'
    active.style.top = '160px'
    container.style.background = 'linear-gradient( 109.6deg,  rgb(79, 187, 119) 11.2%, rgb(19, 104, 107) 91.1% )'
    logo.src = './images/vue.svg'
})

line4.addEventListener('click', () => {
    slider.style.transform = 'translateX(-75%)'
    active.style.top = '240px'
    container.style.background = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(226,37,37,1) 0%, rgba(211,49,49,1) 82.8% )'
    logo.src = './images/angular.svg'
})