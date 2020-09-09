const MongoClient = require('mongodb').MongoClient;
const mongo_url = "mongodb://pharaoh.ninja:27017/sample";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(mongo_url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var objs = [];

  objs = [
  	{
  		title : "Treatise on Kings",
  		author : "John Locke",
  		tags : ["philosophy"],
  		imgURI : "treatise.png"
  		infoHash: "ac8cf2808409b0ca3d58a419b5e26660cb592756"
  	},
    {
  		title : "Leviathan",
  		author : "Thomas Hobbes",
  		tags : ["philosophy"],
  		imgURI : "treatise.png"
  	}
  ]

  for(var i = 0; i < objs.length; i++){
	  dbo.collection("customers").insertOne(objs[i], function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close(); //close after?
	  });
  }



});