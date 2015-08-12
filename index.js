var exec = require("child_process").exec;

console.log("I guess running `node index.js` is easier than running `npm install` `grunt`");

var npm_install = exec("npm install", function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});

npm_install.on("close", function(code) {
  var grunt = exec("grunt", function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
  });

  grunt.on("close", function(code) {
    console.log("All done ;-)");
  });
});
