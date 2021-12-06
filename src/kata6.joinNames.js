const joinNames = namesObj => {
    const namesArray = namesObj.map(element => element.name);
    const lastName = namesArray.pop();
    const firstNames = namesArray.join(", ");
  
  return firstNames.concat(` & ${lastName}`);
    };
module.exports = joinNames;

