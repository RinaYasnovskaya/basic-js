const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw 'Not implemented';
  // remove line with error and write your code here

  if(typeof(sampleActivity) != 'string' || isNaN(parseFloat(sampleActivity))) return false; 
  
  if(sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) return false;
  else return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  
};
