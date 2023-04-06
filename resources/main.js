let tryAgain;
tryAgain = 'yes';
while (tryAgain == 'yes') {
    const old = prompt(`how old are you?`);
    const state = ['child', 'teenager', 'adult', 'pensioner'];
    if (old <= 11) {
        alert(`you are ${state[0]}`);
        tryAgain = prompt(`you didn't lie?`);
    } else if (old <= 17) {
        alert(`you are ${state[1]}`); 
        tryAgain = prompt(`you didn't lie?`);
    } else if (old <=59) {
        alert(`you are  ${state[2]}`);
        tryAgain = prompt(`you didn't lie?`);
    } else if (old >= 60) {
        alert(`you are ${state[3]}`);
        tryAgain = prompt(`you didn't lie?`);
    } else {
        tryAgain=prompt(`you must write your age. Do you want try again?`);
    }
}
// Запитай у користувача його вік і визначи, ким він є:
// дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.



// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
//  який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const symbol = prompt(`Enter the number of which symbol you needed`);
if (symbol == '1') {
    alert('!')
} else if (symbol == '2') {
    alert('@');
} else if (symbol == '3') {
    alert('#');
} else if (symbol == '4') {
    alert('$');
} else if (symbol == '5') {
    alert('%');
} else if (symbol == '6') {
    alert('^');
} else if (symbol == '7') {
    alert('&');
} else if (symbol == '8') {
    alert('*');
} else if (symbol == '9') {
    alert('(');
} else if (symbol == '0') {
    alert(')');
} else {
    alert('you must write number from 0 to 9');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let number1;
let number2;
let number3;
let number4;
let sign;
const quatityNumber = prompt(`enter quantity of number (2-4)`);

if (quatityNumber == '2') {
    number1 = prompt(`enter first number`);
    number2 = prompt(`enter second number`);
    sign = prompt(`enter the sign`)
    if (sign == '+') {
        alert(Number(number1) + Number(number2));
    } else if (sign == '-') {
        alert(Number(number1) - Number(number2));
    } else if (sign == '*') {
        alert(Number(number1) * Number(number2));
    } else if (sign == '/') {
        alert(Number(number1) / Number(number2));
    } else if (sign == '**') {
        alert(Number(number1) ** Number(number2));
    } else if (sign == '%') {
        alert(Number(number1) % Number(number2));
    } else {
        alert(`you must write corect sign (+,-,*,/,**,%)`);
    }
} else if (quatityNumber == '3') {
    number1 = prompt(`enter first number`);
    number2 = prompt(`enter second number`);
    number3 = prompt(`enter third number`);
    sign = prompt(`enter the sign`)
    if (sign == '+') {
        alert(Number(number1) + Number(number2) + Number(number3));
    } else if (sign == '-') {
        alert(Number(number1) - Number(number2) - Number(number3));
    } else if (sign == '*') {
        alert(Number(number1) * Number(number2) * Number(number3));
    } else if (sign == '/') {
        alert(Number(number1) / Number(number2) / Number(number3));
    } else if (sign == '**') {
        alert(Number(number1) ** Number(number2) ** Number(number3));
    } else if (sign == '%') {
        alert(Number(number1) % Number(number2) % Number(number3));
    } else {
        alert(`you must write corect sign (+,-,*,/,**,%)`);
    }
} else if (quatityNumber == '4') {
    number1 = prompt(`enter first number`);
    number2 = prompt(`enter second number`);
    number3 = prompt(`enter third number`);
    number4 = prompt(`enter fourth number`); 
    sign = prompt(`enter the sign`)
    if (sign == '+') {
        alert(Number(number1) + Number(number2) + Number(number3) + Number(number4));
    } else if (sign == '-') {
        alert(Number(number1) - Number(number2) - Number(number3) - Number(number4));
    } else if (sign == '*') {
        alert(Number(number1) * Number(number2) * Number(number3) * Number(number4));
    } else if (sign == '/') {
        alert(Number(number1) / Number(number2) / Number(number3) / Number(number4));
    } else if (sign == '**') {
        alert(Number(number1) ** Number(number2) ** Number(number3) ** Number(number4));
    } else if (sign == '%') {
        alert(Number(number1) % Number(number2) % Number(number3) % Number(number4));
    } else {
        alert(`you must write corect sign (+,-,*,/,**,%)`);
    }
} else {
    alert(`sorry`);
}


// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const sale3 = 3;
const sale5 = 5;
const sale7 = 7;
const purchaseSum = prompt(`How much is your purchase cost?`);

if (purchaseSum < '200') {
    alert(`We have not discount for you. You must pay ${purchaseSum}`);
} else if ('200' < purchaseSum < '300') {
    alert(`you have a ${sale3}% discount. You must pay (${purchaseSum - ((purchaseSum * sale3) / 100)})`);
} else if  ('300' < purchaseSum < '500') {
    alert(`you have a ${sale5}% discount. You must pay (${purchaseSum - ((purchaseSum * sale5) / 100)})`);
} else if (purchaseSum > 500) {
    alert(`you have a ${sale7}% discount. You must pay (${purchaseSum - ((purchaseSum * sale7) / 100)})`);
} else {
    alert(`How much is your purchase cost?`);
}
