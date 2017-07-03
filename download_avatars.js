var request = require('request');


console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ayeshakh";
var GITHUB_TOKEN = '079722d4d5dc00d5c43970624d256101cfa7e633';

function getRepoContributors(repoOwner, repoName, cb) {

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};
request(options, function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
  console.log('body:', body);
  });

};

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

//var request = require('request');
//var fs = require('fs');

//request.get('https://sytantris.github.io/http-examples')               // Note 1
  //     .on('error', function (err) {                                   // Note 2
    //     throw err;
      // })
       //.on('response', function (response) {                           // Note 3
        // console.log('Response Status Code: ', response.statusCode);
       //})
       //.pipe(fs.createWriteStream('./downloaded.html'));
