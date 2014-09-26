var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/companies');

// Set up the mongose console for error handling
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connection Open to MongoDB');
});

// Define the schema
var LeanCompanySchema = mongoose.Schema({
   companyname: String,
   city: String,
   state: String,
   zip: String,
});

var LeanCompany = mongoose.model('LeanCompanies', LeanCompanySchema);

// Function to save the LeanCompany data.
function onLeanCompanySave(err, leancompany) {
  if (err){
      console.log("Saving Failed - " + leancompany.companyname);
  }else{
      console.log("Saving Successful - " + leancompany.companyname);
  }
} 

module.exports.mongoose = mongoose
module.exports.LeanCompany = LeanCompany;
module.exports.onLeanCompanySave = onLeanCompanySave;
