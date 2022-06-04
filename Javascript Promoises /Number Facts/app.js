// Part 1: Number Facts

let url = 'http://numbersapi.com/';

// 1.
let faveNumPromise = axios.get(`${url}7?json`);
faveNumPromise.then((res) => console.log(res.data.text));


// 2.

let multipleNumsPromise = [];
for (let i = 1; i < 5; i++) {
  multipleNumsPromise.push(axios.get(`${url}${i}?json`));
}

Promise.all(multipleNumsPromise).then((multipleNumsPromise) => {
  for (res of multipleNumsPromise) {
    console.log(res.data.text);
  }
});


let multNums = [55, 2, 3];
$.getJSON(`${url}${multNums}?json`).then((data) => {
  //   console.log(data);
});


// 3.

// The way that is shown in the solution, still displays undefined
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $('body').append(`<p>${data.text}</p>`));
});