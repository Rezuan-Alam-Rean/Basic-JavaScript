let names = ["rean", "mahin", "tahasin",];

let index = -1;

let name = names[++index];

setInterval(() => {

    name = names[index++];

    console.log(name, name.length);

    if (index >= names.length) index = 0; // reset index to 0 when it reaches the end of the array

}, 1000);