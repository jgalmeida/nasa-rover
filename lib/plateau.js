module.exports = Plateau

function Plateau (upperX, upperY) {
  this._upperX = Number(upperX)
  this._upperY = Number(upperY)
}

Plateau.prototype.canMove = function (newX, newY) {
  return (newX >= 0 && newX <= this._upperX) &&
         (newY >= 0 && newY <= this._upperY)
}
