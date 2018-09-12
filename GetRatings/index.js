module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var ratings = context.bindings.ratings;
    // for (var i = 0; i < ratings.length; i++) {
    //     var rating = ratings[i];
    //     // operate on each document
    // }
    context.res = {
            // status: 200, /* Defaults to 200 */
            body : ratings
        };
    context.done();
};