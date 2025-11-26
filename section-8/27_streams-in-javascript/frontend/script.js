const input = document.querySelector("input");

const decoder = new TextDecoder();

input.addEventListener("change", async () => {
  const file = input.files[0];

  //Implementing using stream
  const readStream = file.stream();

  const reader = readStream.getReader();
  const result = reader.read();

  console.log(decoder.decode(result.value));

  const result2 = reader.read();

  console.log(decoder.decode(result2.value));
  const result3 = reader.read();

  console.log(decoder.decode(result3.value));
  const result4 = reader.read();

  console.log(decoder.decode(result4.value));
  const result5 = reader.read();

  console.log(decoder.decode(result5.value));
  const result6 = reader.read();

  console.log(decoder.decode(result6.value));
  const result7 = reader.read();

  console.log(decoder.decode(result7.value));
  const result8 = reader.read();

  console.log(decoder.decode(result8.value));
  const result9 = reader.read();

  console.log(decoder.decode(result9.value));
  const result10 = reader.read();

  console.log(decoder.decode(result10.value));

  // We can directly log like this but we also have stream here in js, implemented above
  // const str = await file.text();
  // console.log(str);
});
