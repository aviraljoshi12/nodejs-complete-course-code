const response = await fetch("http://192.168.1.9:4000");
console.log({ response });

const data = await response.json();
console.log(data);
