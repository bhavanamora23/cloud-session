function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const resultElement =document.getElementById("result");
    resultElement.textContent = "Random Number:" + randomNumber;
}