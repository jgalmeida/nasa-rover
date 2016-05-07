var assert = require('chai').assert

var Plateau = require('../lib/plateau')

describe('Plateau', function () {
  it('creates a plateau', function () {
    var plateau = new Plateau(5, 5)

    assert.ok(plateau)
  })

  describe('#canMove', function () {
    context('valid coordinates', function () {
      it('has valid x and valid y', function () {
        var plateau = new Plateau(5, 5)
        var canMove = plateau.canMove(3, 4)

        assert.ok(canMove)
      })
    })

    context("invalid coordinate", function () {
      var plateau = new Plateau(5, 5)

      it('bigger x', function () {
        var canMove = plateau.canMove(10, 3)

        assert.notOk(canMove)
      })

      it('lower x', function () {
        var canMove = plateau.canMove(-10, 3)

        assert.notOk(canMove)
      })

      it('bigger y', function () {
        var canMove = plateau.canMove(3, 10)

        assert.notOk(canMove)
      })

      it('lower y', function () {
        var canMove = plateau.canMove(3, - 10)

        assert.notOk(canMove)
      })

      it('invalid y and x', function () {
        var canMove = plateau.canMove(-10, 10)

        assert.notOk(canMove)
      })
    })
  })
})
