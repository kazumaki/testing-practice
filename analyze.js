const analyze = (array) => ({
  average: array.reduce((sum, current) => sum + current) / array.length,
  max: Math.max(...array),
  min: Math.min(...array),
  length: array.length,
});

export default analyze;