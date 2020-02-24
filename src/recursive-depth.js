module.exports = class DepthCalculator {
    	calculateDepth( arr, depth = 0, all = []) {
        //throw 'Not implemented';
        // remove line with error and write your code here
        depth++;
        all.push(depth);
        for(let item of arr){
        	if(Array.isArray(item))  this.calculateDepth(item, depth, all);
			else continue;
		}
      	return Math.max(...all);
 	}
    
};

