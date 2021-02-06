function solve(data, criteria) {
    let dataParsed = JSON.parse(data);
    let criteriaParsed = criteria.split('-');

    let result = '';
    [...dataParsed].filter(e => e[criteriaParsed[0]] === criteriaParsed[1]).map((el, index) => {
           result += `${index}. ${el.first_name} ${el.last_name} - ${el.email}\n`
    })
    return result.trim();
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')