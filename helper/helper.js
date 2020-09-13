const { response } = require("express");

exports.squareofEven = (data) => {
    return new Promise((resolve, reject) => {
        if (data % 2 == 0) {
            let res = data * data;
            resolve(res);
        }else{
            reject('Odd Number');
        }
    })
    
}

exports.evenOdd = () => {
    return new Promise((resolve, reject) => {
        let i = 0;
        var response = {};
        var output = [];
        var even = [];
        while (i <= 100) {
            output.push(i);
            if (i % 2 == 0) {
                even.push(i);
            }
            i = i + 1;
        }
        response.all = output;
        response.even = even;
        response.errorCount = output.length - even.length;
        resolve(response);
    })
    
}


