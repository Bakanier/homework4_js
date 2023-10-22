// for (let num = 2; num <= 50; num++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(num);
//     }
// }



// const A = parseInt(prompt("Введите число:"));


// if (!isNaN(A) && A > 0) {
//     for (let i = 1; i <= A; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             console.log(i); 
//         }
//     }
// } else {
//     console.log("Введите правильное число. >_<");
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// const N = parseInt(prompt("Введите число:"));


// if (!isNaN(N) && N > 0) {
//     let sum = 0;  
//     for (let i = 1; i <= N; i++) {
//         sum += i;
//     }

//     console.log("Сумма всех чисел от 1 до " + N + " равна " + sum);
// } else {
//     console.log("Введите правильное число. >_<");
// }


// const multiplier = 7;

// for (let i = 1; i <= 10; i++) {
//     const result = multiplier * i;
//     console.log(multiplier + " x " + i + " = " + result);
// }


// const number = prompt("Введите число:"); 
// let sum = 0;


// if (!isNaN(number)) {
//     for (let i = 0; i < number.length; i++) {
//         const digit = parseInt(number[i]); 
//         sum += digit; 
//     }
//     console.log("Сумма цифр введенного числа: " + sum);
// } else {
//     console.log("Введите правильное число. >_<");
// }


const levels = parseInt(prompt("Введите высоту пирамиды:"));


for (let i = 1; i <= levels; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
    }