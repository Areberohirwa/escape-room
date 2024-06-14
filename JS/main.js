
console.log('...main is loaded...');
alert('Jij bevindt zich in een badkamer en het deur zit op slot. Jij moet zo snel doen anders vind de pscho jij en dan ga jij dood.');
alert('De groter deur is de kast en de kleiner de uitgaan van de badkamer en dus de bruin deur is de kluisje .');
alert('Eerste moet een verborgen woorden vinden en dan in het text vak vulllen en dan krijg jij meer instructies later hoop dat het goed gaat. ')

// variables

let passwordMessage = "";
let escapeRoomRandomPassword;
let escapeRoomLockerRandomPassword;

// querySeletors
let escapeRoomDoor = document.querySelector(".escape-room-1-door");
let escapeRoomDoorNextPage = document.querySelector('.escape-room-1-leave-room');
let escapeRoomPassword = document.querySelector("#password-name");
let escapeRoomSubmitButton = document.querySelector('#password-name-submit-button');
let escapeRoomLockerDoor = document.querySelector('.escape-room-1-locker-2');
let escapeRoomLockerFirstDoor = document.querySelector('.escape-room-1-locker');
let escapeRoomFirstLockerKey = document.querySelector('.locker-1-key');
let escapeRoomSecondLockerKey = document.querySelector('.locker-2-key');


// functions 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Geeft een willekeurig getal tussen 1000 en 9999 terug
function getRandomNumber() {
    escapeRoomRandomPassword = getRandomIntInclusive(1000, 9999);
    escapeRoomLockerRandomPassword = getRandomIntInclusive(1000, 9999)
}


escapeRoomSubmitButton.addEventListener('click', function () {
    let passwordInput = escapeRoomPassword.value;
    passwordMessage = "Saige Fuentes";
    if (passwordInput == passwordMessage) {
        alert('goed zo');
        getRandomNumber();
        alert('Onthoud dit wachtword nummer. Nu kun jij de kast openen ' + escapeRoomRandomPassword);
        escapeRoomLockerDoor.disabled = false;
    } else {
        alert('probeer opnieuw');
        escapeRoomLockerDoor.disabled = true;
    }
})

escapeRoomLockerDoor.addEventListener('click', function () {
    const getPasswordInput = prompt('U heeft een wachtwoord gekregen. Type het wachwoord nummer in');

    if (getPasswordInput.length >= 4 && getPasswordInput == escapeRoomRandomPassword) {
        alert('Goed zo');
        document.querySelector('.locker-1-key').style.visibility = 'visible';
    } else {
        alert('probeer opniew');
    }
})

escapeRoomFirstLockerKey.addEventListener('click', function () {
    document.querySelector('.locker-1-key').style.visibility = 'hidden';
    console.log('you clicked the key');
    alert('goed zo');
    getRandomNumber();
    alert('Jij krijgt dit combolock nummer.Nu kun jij de kluisje openen ' + escapeRoomLockerRandomPassword);
    escapeRoomLockerFirstDoor.disabled = false;
})

escapeRoomLockerFirstDoor.addEventListener('click', function () {
    const getUserNumber = prompt('type hier de wachtword');

    if (getUserNumber.length >= 4 && getUserNumber == escapeRoomLockerRandomPassword) {
        alert('Goed zo');
        document.querySelector('.locker-2-key').style.visibility = 'visible';
    }else{
        alert('probeer opnieuw')
    }
})

escapeRoomSecondLockerKey.addEventListener('click', function () {
    document.querySelector('.locker-2-key').style.visibility = 'hidden';
    console.log('you clicked the locker key');
    alert('goed zo');
    alert('Nu moet jij een vraag beantwoorden');
    const randomQuestion = prompt('Hoe oud is de jongen uit dit verhaal?');

    if (randomQuestion == 18) {
        alert('Mooi zo!! Nu kun jij de deur probeer te openen.');
        alert('Nu kun jij niet terug gaan. success!!');

        escapeRoomLockerFirstDoor.disabled = true;
        escapeRoomLockerDoor.disabled = true;
        escapeRoomDoor.disabled = false;

    } else {
        alert('probeer opnieuw');
        escapeRoomDoor.disabled = true;
    }

})

escapeRoomDoor.addEventListener('click', function () {
    document.querySelector('body').style.background = "url('../img/background 2 powerpoint.png') /contain";
    alert('Jij bent zo ver gekomen maar het is nog niet vorbij snel anders reed jij het niet.')

    alert('Jij krijgt 5 letters en daar moet jij een word van maken.')

    const getUserWordsInput = prompt('Hier zijn 5 letters maak een word van: L, E, O, H & T ');

    if (getUserWordsInput == 'hotel' || getUserWordsInput == 'HOTEL') {
        alert('goed zo !!')
        document.querySelector('.escape-room-1-leave-room').style.visibility = 'visible';
    } else {
        alert("probeer opnieuw;")
    }
    
})
