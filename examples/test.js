//
// function SerenityTest() {
//   console.log('test');
//
//   this.sayHello = function() {
//     console.log('hello!');
//   };
//
// }
//
// function SerenityOther(serenitySingle) {
//   this.serenitySingle = serenitySingle;
//
// }
//
// function SerenityOtherTwo(serenitySingle, serenityOther) {
//   this.serenitySingle = serenitySingle;
//   this.serenityOther = serenityOther;
//   this.serenityOther.serenitySingle.sayHello();
// }
//
// serenity.service(SerenityTest, 'Serenity', []);
// serenity.service(SerenityOther, 'SerenityOther', ['Serenity']);
// serenity.service(SerenityOtherTwo, 'SerenityOtherTwo', ['SerenityOther', 'Serenity']);
//
//
// console.log(serenity);
