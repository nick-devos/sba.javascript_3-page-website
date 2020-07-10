// import jquery-3.4.0
document.write('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>');
document.write('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>');

// import w3-include
document.write('<script src="http://www.w3schools.com/lib/w3data.js"></script>');

var gameList = [['The Last of Us: Part II', 'M - Mature', 94, 59.99], ['Ghost of Tsushima', 'M - Mature', 'tbd', 59.99], 
['Cyberpunk 2077', 'M - Mature', 'tbd', 59.99], ['Detroit Become Human', 'M - Mature', 78, 19.99], 
['Spyro Reignited Trilogy', 'E - Everyone', 82, 29.99], ['Need For Speed Heat', 'T - Teen', 72, 29.99], 
['Call of Duty Modern Warfare', 'M - Mature', 80, 59.99], ['MLB The Show 20', 'E - Everyone', 83, 39.99], ['Marvels Spider-Man Game of the Year Edition', 'T - Teen', 87, 39.99]];

function validateEmail() {
    var email = document.getElementById('email');
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(email.value)) {
        alert('Email entered is NOT valid!');
    }
    return;
}