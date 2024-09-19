// document.getElementById('Login-btn').addEventListener('click', function(event){
//     event.preventDefault();

//     const inputPhone = document.getElementById('input-phone-field').value;
//     const inputPin = document.getElementById('input-pin-field').value;

    // if(typeof inputPhone !== "number" && typeof inputPin !== "number"){
    //     alert('Invalid Input');
    //  }
    // const phoneNumber = parseFloat(inputPhone);
    // const pinNumber = parseFloat(inputPin);

//     if(inputPhone === '8' && inputPin === '1234'){
//         console.log('your in home page');
//         window.location.href = '/Home.html'
//     }
//     else{
//         alert("Invalid Input")
//     }
// })

// ================= Practice part ================== //

document.getElementById('Login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-phone-field').value;
    const inputPinNumer = document.getElementById('input-pin-field').value;

    if(inputNumber === '8' && inputPinNumer === '1234'){
        console.log('your are loggin to home page');
        window.location.href = '/Home.html'

    }
    else{
        alert('Invalid Input');
    }
})