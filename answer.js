Ans1:

function q1() {
    let i = 0;
    var output = [];
    while (i <= 100) {
        output.push(i);
        i = i + 1;
    }
    console.log(output);
}



Ans2:

function q2() {
    let i = 0;
    var output = [];
    while (i <= 100) {
        if (i % 2 == 0) {
            output.push(i);
        }
        i = i + 1;
    }
    console.log(output);
}


Ans3:

var testEven = new Promise(function (resolve, reject) {
    if (Date.now() % 2 === 0) {
        resolve('Even');
    } else {
        reject('Odd');
    }
});


testEven.then(function (result) {
    console.log(result);
}, function (err) {
    console.error(err);
});