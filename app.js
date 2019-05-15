'use strict';

module.exports.hello = async (event, context, callback) => {
    let error = null;
    let response = null;

    try {
        let name = event.queryStringParameters ? event.queryStringParameters.name : event.name;
        if (name === 'bitch') {
            throw 'Invalid name `bitch`';
        }

        response = {
            message: 'Hello ' + (name || 'world') + ' from Lambda function in NodeJS',
            event: event,
            context: context,
        };

        if (event.requestContext) {
            response = {
                statusCode: 200,
                body: JSON.stringify(response, null, 2),
            };
        }
    } catch(e) {
        error = e;
    }

    callback(error, response);
};
