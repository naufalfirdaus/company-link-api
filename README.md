# manga-server
{
  "verbose": false,
  "watch": [
    "./server"
  ],
  "exec" : "babel-node ./server/server.js"
}
# manga-webpack
{ "verbose": false, "watch": [ "./server" ], "exec": "webpack --mode=development --config webpack.config.server.js && node ./dist/server.generated.js" }