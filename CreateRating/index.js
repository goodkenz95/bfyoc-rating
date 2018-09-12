
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(typeof req.body == "object" && (req.body.userId && req.body.productId &&(req.body.rating && req.body.rating >= 1 && req.body.rating <= 5)  )){

        var ratingId = uuidv4();
        context.bindings.newRating = JSON.stringify({ 
            id: ratingId,
            userId: req.body.userId,
            productId: req.body.productId,
            timestamp: Date.now(),
            locationName: req.body.locationName,
            rating: req.body.rating,
            userNotes: req.body.userNotes
        });
        context.res = {
            status: 201,
            body: {"status_code" : "SUCCESS",msg :"Rating stored successfully. Ref#: " + ratingId}
        };
    }else{
       context.res = {
            status: 422,
            body: {"status_code" : "FAILED","msg": "Incomplete or invalid data. Please put valid productId, userId and rating to 1-5."}
        }; 
    }
    
    /*if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200,
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }*/
    context.done();
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}