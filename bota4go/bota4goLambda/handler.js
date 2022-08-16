// const moment = require('moment');

exports.bota4goLambda = async(event) =>{
    console.log('bota4go Your function run')

    // const message = moment().format();
    const message = 'Privet bota'

    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };

    return response;
}