const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')
const message = document.createElement('h1')

localStorage.setItem("It's a secret to everybody.", "I have no clue what I'm doing")

welcome.innerHTML = ''
// message.textContent = 'Testing'
// welcome.append(message)

if (hour = isMorning) {
    message.textContent = 'Good Morning'
    welcome.append(message)
}

else if (hour = isAfternoon) {
     message.textContent = 'Good Afternoon'
     welcome.append(message)
}
else {
     message.textContent = 'Good Evening'
     welcome.append(message)
}
const urls = [
     'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
 ].map(url => { (new Image()).src = url; return url })
 
 const images = document.querySelectorAll('#carousel img')
 
 let currentImage = 0
 const showImages = () => {
     const offset = currentImage % urls.length
     images.forEach((image, index) => {
         const imageIndex = (index + offset + urls.length) % urls.length
         image.src = urls[imageIndex]
     })
 }


function increaseImages() {
     currentImage ++
     showImages()
}

function decreaseImages() {
     currentImage --
     showImages()
}
const prev = document.getElementById('prev')

prev.addEventListener ('click', () => {decreaseImages()})


const next = document.getElementById('next')

next.addEventListener ('click', () => {increaseImages()})



 showImages()

 setTimeout(() => {
     increaseImages()
 }, 2000)
 
 setInterval(() => {
     increaseImages()
 }, 2000)