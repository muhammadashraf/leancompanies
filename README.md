Getting "Lean Companies" application code
=============================

This is the code for the sample 'LeanCompanies' application.

Clone this branch with the following commands (in a fresh folder)
```sh
$ git init
$ git clone https://github.com/muhammadashraf/leancompanies.git
```
Install the npm module dependencies:
```sh
$ cd leancompanies
$ npm install
```

To load the data into the MongoDB database:
```sh
$ mongo
```
and then copy the content of the file, LoadCompaniesInMongoDB.txt, into the shell running mongo.