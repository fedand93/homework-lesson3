if (a === b) {
    console.log('a равно b');
  }
  while (a > b) {
    console.log('b все еще меньше a');
    b = b + 10; 
  }
  if (a > b) {
    console.log('a больше b');
  } else { 
    console.log('b не меньше a');  
  }  
  for (let a = 0; a < 10; a = a + 1) {  
    // этот блок выполнится 10 раз  
    b = b + a;
 }