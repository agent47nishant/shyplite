var helper = require('../helper/helper');

exports.q1 = (request, response) => {
    try {
        helper.evenOdd().then(result=>{
            response.json({
                    'Ans1 : ': {
                        '0..100': result.all,
                        'even': result.even
                    }
                });
        })
    } catch (err) {
        response.json({ 'Error': err });
    }
}


exports.q2 = (request, response) => {
    try {
        let input = request.params.num;
        helper.squareofEven(input).then(result => {
            response.json({ 'Ans2 ': result });
        }).catch(function (err) {
            response.json({ 'Ans2 - Error : ': err });
        })

    } catch (err) {
        response.json({ 'Error': err });
    }
}

exports.q3 = (request, response) => {
    try {
        let i = 0;
        var even = [];
        while (i <= 100) {
            if (i % 2 == 0) {
                even.push(i * i);
            }
            i = i + 1;
        }
        response.json({
            'Ans3 : ': {
                'square of even': even
            }
        });

    } catch (err) {
        response.json({ 'Error': err });
    }
}

exports.q4 = (request, response) => {
    try {
        let i = 0;
        var even = [];
        while (i <= 100) {
            if (i % 2 == 0) {
                even.push(i * i);
            }
            i = i + 1;
        }

        var sum = even.reduce(function (a, b) {
            return a + b;
        }, 0);

        response.json({
            'Ans4 : ': {
                'sum of square of even': sum
            }
        });

    } catch (err) {
        response.json({ 'Error': err });
    }
}

exports.q5 = (request, response) => {
    try {
        helper.evenOdd().then(result=>{
            response.json({
                    'Ans5 : ': {
                        'Number Of Errors ': result.errorCount,
                        'Resultant Array ': result.even,
                        'Number of Objects in Resultant Array ': result.even.length
                    }
                });
        })
    } catch (err) {
        response.json({ 'Error': err });
    }
}

  
