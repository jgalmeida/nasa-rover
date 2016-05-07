module.exports = function (rawInstructions) {
  var data = []
  var instructions = rawInstructions.split('\n')
  instructions.pop()

  var upperBounds = instructions.shift().split(' ')
  var upperX = upperBounds[0]
  var upperY = upperBounds[1]

  var i = 0
  while (i < instructions.length) {
    var rawPosition = instructions[i].split(' ')
    var rawTrajectory = instructions[i + 1]

    data.push({
      x: rawPosition[0],
      y: rawPosition[1],
      direction: rawPosition[2],
      trajectory: rawTrajectory
    })

    i += 2
  }

  return {
    upperX: upperX,
    upperY: upperY,
    rovers: data
  }
}
