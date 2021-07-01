const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const arr = tutorials.map( word => { 
    let data = word.split(' ');
  for (let i=0; i < data.length; i++){
    data[i] = data[i].charAt(0).toUpperCase() + data[i].substring(1);
  }
  return data.join(' ');
  
})
return arr
}

// const titleCased = () => { tutorials.map( word => {
//   let data = word.toLowerCase().split(' ');
//   for (let i = 0; i < data.length; i++){
//     data[i] = data[i].charAt(0).toUpperCase() + data[i].substring(1);
//   }
//   return data.join(' ')
// })}

// const titleCased = tutorials.map( word => {
//   let data = word.toLowerCase().split(' ');
//   for (let i = 0; i < data.length; i++){
//     data[i] = data[i].charAt(0).toUpperCase() + data[i].substring(1);
//   }
//   return data.join(' ')
// })