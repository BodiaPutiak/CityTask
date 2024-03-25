const data = [
  // { start: "Warszawa"},
  { start: "Białystok", end: "Olsztyn", time: 210 },
  { start: "Białystok", end: "Warszawa", time: 132 },
  { start: "Białystok", end: "Lublin", time: 226 },
  { start: "Białystok", end: "Bydgoszcz", time: 306 },
  { start: "Białystok", end: "Gdańsk", time: 289 },
  { start: "Białystok", end: "Łódź", time: 209 },
  { start: "Białystok", end: "Poznań", time: 306 },
  { start: "Białystok", end: "Szczecin", time: 448 },
  { start: "Białystok", end: "Gorzów Wielkopolski", time: 391 },
  { start: "Białystok", end: "Wrocław", time: 333 },
  { start: "Białystok", end: "Opole", time: 343 },
  { start: "Białystok", end: "Katowice", time: 309 },
  { start: "Białystok", end: "Kielce", time: 247 },
  { start: "Białystok", end: "Kraków", time: 327 },
  { start: "Białystok", end: "Rzeszów", time: 320 },
  { start: "Olsztyn", end: "Warszawa", time: 161 },
  { start: "Olsztyn", end: "Lublin", time: 263 },
  { start: "Olsztyn", end: "Bydgoszcz", time: 187 },
  { start: "Olsztyn", end: "Gdańsk", time: 114 },
  { start: "Olsztyn", end: "Łódź", time: 211 },
  { start: "Olsztyn", end: "Poznań", time: 268 },
  { start: "Olsztyn", end: "Szczecin", time: 367 },
  { start: "Olsztyn", end: "Gorzów Wielkopolski", time: 353 },
  { start: "Olsztyn", end: "Wrocław", time: 335 },
  { start: "Olsztyn", end: "Opole", time: 350 },
  { start: "Olsztyn", end: "Katowice", time: 316 },
  { start: "Olsztyn", end: "Kielce", time: 273 },
  { start: "Olsztyn", end: "Kraków", time: 353 },
  { start: "Olsztyn", end: "Rzeszów", time: 355 },
  { start: "Warszawa", end: "Lublin", time: 118 },
  { start: "Warszawa", end: "Bydgoszcz", time: 200 },
  { start: "Warszawa", end: "Gdańsk", time: 229 },
  { start: "Warszawa", end: "Łódź", time: 104 },
  { start: "Warszawa", end: "Poznań", time: 198 },
  { start: "Warszawa", end: "Szczecin", time: 340 },
  { start: "Warszawa", end: "Gorzów Wielkopolski", time: 283 },
  { start: "Warszawa", end: "Wrocław", time: 225 },
  { start: "Warszawa", end: "Opole", time: 228 },
  { start: "Warszawa", end: "Katowice", time: 193 },
  { start: "Warszawa", end: "Kielce", time: 128 },
  { start: "Warszawa", end: "Kraków", time: 209 },
  { start: "Warszawa", end: "Rzeszów", time: 207 },
  { start: "Lublin", end: "Bydgoszcz", time: 286 },
  { start: "Lublin", end: "Gdańsk", time: 341 },
  { start: "Lublin", end: "Łódź", time: 189 },
  { start: "Lublin", end: "Poznań", time: 287 },
  { start: "Lublin", end: "Szczecin", time: 429 },
  { start: "Lublin", end: "Gorzów Wielkopolski", time: 372 },
  { start: "Lublin", end: "Wrocław", time: 314 },
  { start: "Lublin", end: "Opole", time: 319 },
  { start: "Lublin", end: "Katowice", time: 248 },
  { start: "Lublin", end: "Kielce", time: 148 },
  { start: "Lublin", end: "Kraków", time: 211 },
  { start: "Lublin", end: "Rzeszów", time: 114 },
  { start: "Bydgoszcz", end: "Gdańsk", time: 116 },
  { start: "Bydgoszcz", end: "Łódź", time: 155 },
  { start: "Bydgoszcz", end: "Poznań", time: 97 },
  { start: "Bydgoszcz", end: "Szczecin", time: 219 },
  { start: "Bydgoszcz", end: "Gorzów Wielkopolski", time: 183 },
  { start: "Bydgoszcz", end: "Wrocław", time: 197 },
  { start: "Bydgoszcz", end: "Opole", time: 254 },
  { start: "Bydgoszcz", end: "Katowice", time: 258 },
  { start: "Bydgoszcz", end: "Kielce", time: 262 },
  { start: "Bydgoszcz", end: "Kraków", time: 312 },
  { start: "Bydgoszcz", end: "Rzeszów", time: 380 },
  { start: "Gdańsk", end: "Łódź", time: 206 },
  { start: "Gdańsk", end: "Poznań", time: 197 },
  { start: "Gdańsk", end: "Szczecin", time: 262 },
  { start: "Gdańsk", end: "Gorzów Wielkopolski", time: 281 },
  { start: "Gdańsk", end: "Wrocław", time: 295 },
  { start: "Gdańsk", end: "Opole", time: 345 },
  { start: "Gdańsk", end: "Katowice", time: 311 },
  { start: "Gdańsk", end: "Kielce", time: 314 },
  { start: "Gdańsk", end: "Kraków", time: 365 },
  { start: "Gdańsk", end: "Rzeszów", time: 422 },
  { start: "Łódź", end: "Poznań", time: 143 },
  { start: "Łódź", end: "Szczecin", time: 282 },
  { start: "Łódź", end: "Gorzów Wielkopolski", time: 226 },
  { start: "Łódź", end: "Wrocław", time: 145 },
  { start: "Łódź", end: "Opole", time: 167 },
  { start: "Łódź", end: "Katowice", time: 137 },
  { start: "Łódź", end: "Kielce", time: 139 },
  { start: "Łódź", end: "Kraków", time: 193 },
  { start: "Łódź", end: "Rzeszów", time: 274 },
  { start: "Poznań", end: "Szczecin", time: 168 },
  { start: "Poznań", end: "Gorzów Wielkopolski", time: 109 },
  { start: "Poznań", end: "Wrocław", time: 127 },
  { start: "Poznań", end: "Opole", time: 182 },
  { start: "Poznań", end: "Katowice", time: 232 },
  { start: "Poznań", end: "Kielce", time: 260 },
  { start: "Poznań", end: "Kraków", time: 286 },
  { start: "Poznań", end: "Rzeszów", time: 368 },
  { start: "Szczecin", end: "Gorzów Wielkopolski", time: 73 },
  { start: "Szczecin", end: "Wrocław", time: 247 },
  { start: "Szczecin", end: "Opole", time: 289 },
  { start: "Szczecin", end: "Katowice", time: 337 },
  { start: "Szczecin", end: "Kielce", time: 402 },
  { start: "Szczecin", end: "Kraków", time: 391 },
  { start: "Szczecin", end: "Rzeszów", time: 473 },
  { start: "Gorzów Wielkopolski", end: "Wrocław", time: 187 },
  { start: "Gorzów Wielkopolski", end: "Opole", time: 229 },
  { start: "Gorzów Wielkopolski", end: "Katowice", time: 278 },
  { start: "Gorzów Wielkopolski", end: "Kielce", time: 342 },
  { start: "Gorzów Wielkopolski", end: "Kraków", time: 332 },
  { start: "Gorzów Wielkopolski", end: "Rzeszów", time: 414 },
  { start: "Wrocław", end: "Opole", time: 81 },
  { start: "Wrocław", end: "Katowice", time: 129 },
  { start: "Wrocław", end: "Kielce", time: 252 },
  { start: "Wrocław", end: "Kraków", time: 183 },
  { start: "Wrocław", end: "Rzeszów", time: 265 },
  { start: "Opole", end: "Katowice", time: 83 },
  { start: "Opole", end: "Kielce", time: 210 },
  { start: "Opole", end: "Kraków", time: 138 },
  { start: "Opole", end: "Rzeszów", time: 220 },
  { start: "Katowice", end: "Kielce", time: 132 },
  { start: "Katowice", end: "Kraków", time: 67 },
  { start: "Katowice", end: "Rzeszów", time: 148 },
  { start: "Kielce", end: "Kraków", time: 100 },
  { start: "Kielce", end: "Rzeszów", time: 145 },
  { start: "Kraków", end: "Rzeszów", time: 112 }
];




let myButton = document.getElementById("myButton");
function handleClick() {
  findTheShortestWay();
}

myButton.addEventListener("click", handleClick);
// myButton.addEventListener("click", console.log('hello'))

const findTheShortestWay = () => {
  let total = [];
  let arr = [];
  let dataCopy = [...data]; 
  let currCity = 'Warszawa';
  let startCityArr = [];
  while (dataCopy.length > 0) {
    //Find all objects that have currCity value under the key start or end 
    dataCopy.forEach((item) => {
      if (item.start === currCity || item.end === currCity) {
        //Push those objects to the new array
        arr.push(item)
      }
    })

    if (arr.length === 0) {
      continue;
    }
    //This if block is for final iteration when the program needs to find the shortest way from the last city back to city where it started.
    //In this case Warszawa
    if (currCity === 'Warszawa') {
      startCityArr = [...arr]
    }
    //Find the smallest time value of an object in arr variable from the line 91
    const smallestTime = arr.reduce((min, obj) => obj.time < min.time ? obj : min, arr[0]);
    //Flip the object so that it continues the pattern.
    //Ex: 
    // {start: 'Warszawa', end: 'Łódź', time: 104}
    // {start: 'Łódź', end: 'Katowice', time: 137}
    // {start: 'Katowice', end: 'Kraków', time: 67}
    // {start: 'Kraków', end: 'Kielce', time: 100}
    if (total.length > 1 && smallestTime.start !== total[total.length-1].end) {
      let temp = smallestTime.start
      smallestTime.start = total[total.length - 1].end;
      smallestTime.end = temp;
    }
    //Push flepped objects to the total array where we will store the shortest way around all of the cities
    total.push(smallestTime);
    //Delete all the objects which start city we've already found the smallest time value of
    dataCopy = dataCopy.filter((item) => (item.start !== smallestTime.start && item.end !== smallestTime.start));
    //Reasign variable currCity to the next city
    if (smallestTime.start === currCity) {
      currCity = smallestTime.end;
    } else if (smallestTime.end === currCity) {
      currCity = smallestTime.start;
    }
    //Clear arr variable
    arr = [];
    //This if block is for final iteration when the program needs to find the shortest way from the last city back to city where it started.
    if (dataCopy.length === 0) {
      const smallestWarsawBackTime = startCityArr.filter(item => item.start === smallestTime.end || item.end === smallestTime.end);
      total.push(...smallestWarsawBackTime);
    }
  }
  //Find the total time that shortest posibble route from New York around all of the cities and back to Warszawa
  const result = total.reduce((acc, item) => {
    return acc += item.time
  }, 0)
  console.log(total);
  console.log(result);
};