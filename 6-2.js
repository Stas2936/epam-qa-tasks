function abc(a,b) {
  try {
    if(b === 0) {
      throw new Error ('на ноль делить нельзя!')
  }
  let c = a / b;
  console.log(c);
  } 
  catch(e){
    console.log(e.message)
  }
}
abc(1,0)
