const analyze = (array) => {
  return { 
    average: array.reduce((sum, current) => {return sum + current}) / array.length, 
    max: Math.max(...array), 
    min: Math.min(...array), 
    length: array.length
  }
}

export default analyze;