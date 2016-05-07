module.exports = Rover

function Rover (data, plateau) {
  this._x = Number(data.x)
  this._y = Number(data.y)
  this._direction = data.direction
  this._trajectory = data.trajectory

  this._plateau = plateau
}

Rover.prototype.go = function () {
  for (var i = 0; i < this._trajectory.length; i++) {
    var instruction = this._trajectory.charAt(i)

    switch (instruction) {
      case 'L':
        this.rotateLeft()
        break
      case 'R':
        this.rotateRight()
        break
      case 'M':
        this.move()
        break
    }
  }
}

Rover.prototype.rotateLeft = function () {
  switch (this._direction) {
    case 'N':
      this._direction = 'W'
      break
    case 'E':
      this._direction = 'N'
      break
    case 'S':
      this._direction = 'E'
      break
    case 'W':
      this._direction = 'S'
      break
  }
}

Rover.prototype.rotateRight = function () {
  switch (this._direction) {
    case 'N':
      this._direction = 'E'
      break
    case 'E':
      this._direction = 'S'
      break
    case 'S':
      this._direction = 'W'
      break
    case 'W':
      this._direction = 'N'
      break
  }
}

Rover.prototype.move = function () {
  switch (this._direction) {
    case 'N':
      if (this._plateau.canMove(this._x, this._y + 1)) {
        this._y += 1
      }
      break
    case 'E':
      if (this._plateau.canMove(this._x + 1, this._y)) {
        this._x += 1
      }
      break
    case 'S':
      if (this._plateau.canMove(this._x, this._y - 1)) {
        this._y -= 1
      }
      break
    case 'W':
      if (this._plateau.canMove(this._x - 1, this._y)) {
        this._x -= 1
      }
      break
  }
}

Rover.prototype.getPosition = function () {
  return this._x + ' ' + this._y + ' ' + this._direction
}
