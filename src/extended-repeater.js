module.exports = function repeater(str, options ) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    let result = '';
    
    let repeatTimesStr = 1;
    if(options.repeatTimes) repeatTimesStr = options.repeatTimes;

    let separatorStr = '+';
    if(options.separator) separatorStr = options.separator;

    let additionStr = '';
    if(options.addition !== undefined) additionStr = options.addition;

    let repeatTimesAddition = 1;
    if(options.additionRepeatTimes) repeatTimesAddition = options.additionRepeatTimes;
    
    let separatorAddition = '|';
    if(options.additionSeparator) separatorAddition = options.additionSeparator;
    
    for(let i = 0; i < repeatTimesStr; i++){
      result += str;
      for(let j = 0; j <repeatTimesAddition; j++){
        if(j < repeatTimesAddition - 1){
          result += additionStr + separatorAddition;
        }
        else result += additionStr;
      }
      if(i < repeatTimesStr - 1) result+= separatorStr;
    }
    return result;
};
  