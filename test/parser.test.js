var assert = require('chai').assert

var Parser = require('../lib/parser')

describe('Parser', function () {
  it('returns friendly json data regarding plateau and rovers data', function () {
    var rawInstructions = '5 5\n'
                          + '1 2 N\n'
                          + 'LMLMLMLMM\n'
                          + '3 3 E\n'
                          + 'MMRMMRMRRM\n'

    var jsonData = Parser(rawInstructions)

    assert.ok(jsonData)

    assert.equal(jsonData.upperX, 5)
    assert.equal(jsonData.upperY, 5)

    assert.ok(jsonData.rovers)
    assert.equal(jsonData.rovers.length, 2)

    assert.equal(jsonData.rovers[0].x, 1)
    assert.equal(jsonData.rovers[0].y, 2)
    assert.equal(jsonData.rovers[0].direction, 'N')
    assert.equal(jsonData.rovers[0].trajectory, 'LMLMLMLMM')

    assert.equal(jsonData.rovers[1].x, 3)
    assert.equal(jsonData.rovers[1].y, 3)
    assert.equal(jsonData.rovers[1].direction, 'E')
    assert.equal(jsonData.rovers[1].trajectory, 'MMRMMRMRRM')
  })
})
