
var newTestObj = {
  helloTo: 'helloWhat',

  sayHello() {
    console.log(`Hello ${this.helloTo}`);
  }

};

function newTest() {
  return newTestObj;
}

function somethingWithDepOnNewTest(newTest) {
  newTest.helloTo = 'Someone';
  console.log(newTest.sayHello());
}

serenity.register(newTest, 'NewTest', []);
serenity.register(somethingWithDepOnNewTest, 'NewTestDep', ['NewTest']);





console.log(serenity);
