module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  // remove line with error and write your code here

  let res = [];
  if(Array.isArray(members) && members.length > 0){

  	for( let i = 0; i <members.length; i++){
 		 	if(typeof(members[i]) === 'string'){
      	res.push(members[i].trim()[0]);
      }
      else continue;
  	}
    return res.map(elem => elem.toUpperCase()).sort().join('');
  }
  else return false;
};
