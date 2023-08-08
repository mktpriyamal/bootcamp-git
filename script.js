
const initials = ['Dear','Hi','Hello','Mr','Mrs']
const regex = new RegExp(`\\b(?:${initials.join("|")})\\s\\w+[,]`,'g');

const testf = () => {
    let emailContent = document.getElementById('email').innerText;
   let output = regex.test(emailContent);
    console.log(output);
    document.getElementById('output').innerText = 'Output - '+JSON.stringify(output);
}
const matchf = () => {
    let emailContent = document.getElementById('email').innerText;
    let output = emailContent.match(regex);
    console.log(output);
    document.getElementById('output').innerText = 'Output - '+JSON.stringify(output);
}

const searchf = () => {
    let emailContent = document.getElementById('email').innerText;
    let output = emailContent.search(regex);
    console.log(output);
    document.getElementById('output').innerText = 'Output - '+JSON.stringify(output);
}

const replacef = () => {
    let emailContent = document.getElementById('email').innerText;
    let output = emailContent.replace(regex,'Receiver');
    console.log(output);
    document.getElementById('output').innerText = 'Output - '+JSON.stringify(output);
}
const splitf = () => {
    let emailContent = document.getElementById('email').innerText;
    let output = emailContent.split(regex);
    console.log(output);
    document.getElementById('output').innerText = 'Output - '+JSON.stringify(output);
}