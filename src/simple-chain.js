const chainMaker = {
  interResult : [],
  
  getLength() {
    return this.interResult.length;

  },
  addLink(value) {
    this.interResult.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof(position) !== "number" || position < 1 || position > this.interResult.length)
    {
      this.interResult = [];
      throw new Error;
    }
    else this.interResult.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.interResult.reverse();
    return this;
  },
  finishChain() {
    let result = this.interResult;
    this.interResult = [];
    return result.join("~~");
  }
};

module.exports = chainMaker;
