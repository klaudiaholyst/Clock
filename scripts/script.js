const secondHand = document.querySelector('div.hand--second');
const minuteHand = document.querySelector('div.hand--minute');
const hourHand = document.querySelector('div.hand--hour');

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = (seconds/60) * 360 + 90;
    const minutesDegree = (minutes/60) * 360 + 90;
    const hoursDegree = (hours/12) * 360 + 90;

    console.log(hours)
    console.log(hoursDegree)

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000)
