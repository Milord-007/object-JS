const obj1 = {
    name: 'Ardasher',
    greet(city) {
      console.log(`Hello, ${this.name} from ${city}`);
    }
  };
  
  const obj2 = {
    name: 'Mister'
  };
  
  obj1.greet.call(obj2, 'New York'); // выводит "Hello, Mister from New York"