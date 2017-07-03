var request = require('request');
var fs = require('fs');
var input = process.argv.slice(2);
var repoOwner = input[0];
var repoName = input[1];

  console.log('Welcome to the GitHub Avatar Downloader!');

  var GITHUB_USER = "YOUR USERNAME HERE";
  var GITHUB_TOKEN = "YOUR ACCESSTOKEN HERE";
  var GITHUB_USER = "ayeshakh";
  var GITHUB_TOKEN = '079722d4d5dc00d5c43970624d256101cfa7e633';

  function getRepoContributors(repoOwner, repoName, cb) {

    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    console.log(requestURL);


    var options = {
      url: requestURL,
      headers: {
        'User-Agent': 'request'
      }
    };

 request(options, function(err, response, body) {
    if (err) {
      throw err;
    }
    console.log('Response Status Code:', response.statusCode);


    var contributors = JSON.parse(body);
    contributors.forEach(function(contributor){
      console.log('Avatar URL:', contributor.avatar_url);
      downloadImageByURL(contributor.avatar_url, './avatars/' + contributor.login + ".jpg");
    });

   });

};

  function downloadImageByURL(url, filepath) {
    request.get(url)               // Note 1
    .on('error', function (err) {                                   // Note 2
     throw err;
    })
    .on('response', function (response) {                           // Note 3
     console.log('Response Status Code: ', response.statusCode);
    })
    .pipe(fs.createWriteStream(filepath));
  }


getRepoContributors(repoOwner, repoName);


  // getRepoContributors("jquery", "jquery", function(err, result) {
  //   console.log("Errors:", err);
  //   console.log("Result:", result);
  // });
  //step 7