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
