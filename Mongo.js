var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/companies');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connection Open to MongoDB');
});

var LeanCompanySchema = mongoose.Schema({
   firstname: String,
   lastname: String,
   rollnumber: Number
});

var LeanCompany = mongoose.model('LeanCompanies', LeanCompanySchema);


function onLeanCompanySave (err, student) {
  if (err){
     console.log("Saving Failed" + student.firstname);
  }else{
  	 console.log("Saving Successful" + student.firstname);
  }
} 

module.exports.mongoose = mongoose
module.exports.LeanCompany = LeanCompany;
module.exports.onLeanCompanySave = onLeanCompanySave;
