var assert = require('chai').assert

var Rover = require('../lib/rover')
var Plateau = require('../lib/plateau')

describe('Rover', function () {
  var plateau = new Plateau(5, 5)

  it('Creates a new Rover', function () {
    var rover = new Rover({x: 1, y: 2, direction: 'N', trajectory: 'LMLMLMLMM'}, plateau)

    assert.ok(rover)
  })

  describe('#rotateLeft', function () {
    context('direction N', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'N', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to W', function () {
        rover.rotateLeft()

        assert.equal(rover.getPosition(), '1 2 W')
      })
    })

    context('direction E', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'E', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to N', function () {
        rover.rotateLeft()

        assert.equal(rover.getPosition(), '1 2 N')
      })
    })

    context('direction S', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'S', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to E', function () {
        rover.rotateLeft()

        assert.equal(rover.getPosition(), '1 2 E')
      })
    })

    context('direction W', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'W', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to S', function () {
        rover.rotateLeft()

        assert.equal(rover.getPosition(), '1 2 S')
      })
    })
  })

  describe('#rotateRight', function () {
    context('direction N', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'N', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to E', function () {
        rover.rotateRight()

        assert.equal(rover.getPosition(), '1 2 E')
      })
    })

    context('direction E', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'E', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to S', function () {
        rover.rotateRight()

        assert.equal(rover.getPosition(), '1 2 S')
      })
    })

    context('direction S', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'S', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to W', function () {
        rover.rotateRight()

        assert.equal(rover.getPosition(), '1 2 W')
      })
    })

    context('direction W', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'W', trajectory: 'LMLMLMLMM'}, plateau)

      it('switches direction to N', function () {
        rover.rotateRight()

        assert.equal(rover.getPosition(), '1 2 N')
      })
    })
  })

  describe('#move', function () {
    it('cannot move over the plateau x limits', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'W', trajectory: 'LMLMLMLMM'}, plateau)

      rover.move()
      assert.equal(rover.getPosition(), '0 2 W')
      rover.move()
      assert.equal(rover.getPosition(), '0 2 W')
      rover.move()
      assert.equal(rover.getPosition(), '0 2 W')
    })

    it('cannot move over the plateau y limits', function () {
      var rover = new Rover({x: 1, y: 4, direction: 'N', trajectory: 'LMLMLMLMM'}, plateau)

      rover.move()
      assert.equal(rover.getPosition(), '1 5 N')
      rover.move()
      assert.equal(rover.getPosition(), '1 5 N')
      rover.move()
      assert.equal(rover.getPosition(), '1 5 N')
    })

    it('moves the rover', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'W', trajectory: 'LMLMLMLMM'}, plateau)

      rover.move()
      assert.equal(rover.getPosition(), '0 2 W')
    })
  })

  describe('#go', function () {
    it('changes coordinates according to trajectory', function () {
      var rover = new Rover({x: 1, y: 2, direction: 'N', trajectory: 'LMLMLMLMM'}, plateau)

      rover.go()
      assert.equal(rover.getPosition(), '1 3 N')
    })
  })
})
