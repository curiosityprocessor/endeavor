function add(a:number, b:number) {
  return a + b;
}

let result = add(10, 20); //no error
// add(10, '20'); //ERROR: parameter of String type cannot be assigned to number type

result.toLocaleString(); //supports auto-complete
