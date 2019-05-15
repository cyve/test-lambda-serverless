var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'}),
    lambda = new AWS.Lambda();

var params = {
    FunctionName: 'test-lambda-serverless-dev-hello',
    Payload: JSON.stringify({ name: "Cyril" })
};
lambda.invoke(params, function(error, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(JSON.parse(response.Payload));
    }
});
