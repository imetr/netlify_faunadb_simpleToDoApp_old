exports.handler = (event, context, callback) => {
    console.log('hello all')
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            data: 'foo'
        })
    })
}