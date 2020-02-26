module.exports = function getSeason(date) {
  //throw 'Not implemented';
  // remove line with error and write your code here
    if(!date) return "Unable to determine the time of year!";
    else{
      if(toString.call(date) != "[object Date]") throw new Error();
      else{

        let month = date.getMonth();
         
        const list = { 
          0: "winter",
          1: "winter",
          2: "spring",
          3: "spring",
          4: "spring",
          5: "summer",
          6: "summer",
          7: "summer",
          8: "autumn",
          9: "autumn",
          10: "autumn",
          11: "winter"
        }

        return `${list[month]}`;
      }
    }


};
