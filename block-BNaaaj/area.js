// area of circle

function getAreaCircle (r) {
  return 3.14*r*r;
}

//area of square
function getAreaSquare (r) {
    return r * r;
  }

  //area of rectangular

  function getAreaRect (l ,b) {
    return l * b;
  }
  module.exports ={
      circle :getAreaCircle ,
      square :getAreaSquare ,
      rectangle :getAreaRect,
  }