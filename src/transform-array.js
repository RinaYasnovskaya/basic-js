module.exports = function transform(arr) {
    //throw 'Not implemented';
    // remove line with error and write your code here


    let result = [];
  	if(Array.isArray(arr)){
      if(arr.length === 0) return [];
   		for(let i = 0; i < arr.length; i++){

      	if(arr[i] === "--discard-next"){
         	i++;
        }
        else if(arr[i] === "--discard-prev"){
        	result.pop();
        }
        else if(arr[i] === "--double-next"){
        	result.push(arr[i + 1]);
        }
        else if(arr[i] === "--double-prev"){
        	result.push(arr[i - 1]);
        }
        else result.push(arr[i]);
   }
   		return result.filter(item => item !== undefined);
    }
   else throw Error();

};
