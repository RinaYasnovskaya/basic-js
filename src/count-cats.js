module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  let count = 0;
	if(Array.isArray(matrix) && matrix.length > 0){
  	let array = matrix.flat();
    for(let i = 0; i < array.length; i++){
    	if(array[i] == "^^" ) count ++;
    }
    return count;
  }
   else return 0;
};
