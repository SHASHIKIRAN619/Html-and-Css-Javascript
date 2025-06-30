const passwordBox = document.getElementById('password');

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + number + lowerCase + symbol;

function createpassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        
            password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand('copy');
}
