var fs = require('fs')
var assert = require('assert')

var features = require('./lib')

var Rover = features.rover
var Plateau = features.plateau
var Parser = features.parser

var fileName = process.argv[2]
assert(fileName, 'You need to provide the instructions')

var data = fs.readFileSync(fileName, 'utf-8')
var parsedData = Parser(data)

var plateau = new Plateau(parsedData.upperX, parsedData.upperY)

for (var i = 0; i < parsedData.rovers.length; i++) {
  var r = new Rover(parsedData.rovers[i], plateau)
  r.go()

  console.log(r.getPosition())
}
