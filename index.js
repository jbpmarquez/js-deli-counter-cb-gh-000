var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = deliLine.shift()
    return (`Currently serving ${name}.`);
  }
}


function currentLine(katzDeliLine) {
  // var array = []
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      katzDeli.push(`${i=== 0 ? '' : ' '}${i + 1}. ${katzDeliLine[i]}`)
    }
  }
  return `The line is currently: ${katzDeli}`
}
