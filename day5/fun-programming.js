// function main(a)
// {
//    console.log(a);
//    console.log(a());
// }

// main(function(){
//    return "iam cbf1"
// })
// main(function(){
//     return "iam cbf2"
// })

// let main1 = function(task)
// {
//     console.log(task(10, 10));
// }

// main1(function(a , b){
//     return a + b
// })
// main1(function(a , b){
//     return a - b
// })
// main1(function(a , b){
//     return a * b
// })
// main1(function(a , b){
//     return a / b
// })



// let a = () => console.log("hello");
// console.log(a);
// a()

// let b = () => { return "hello" }
// console.log(b);
// console.log(b());

let operation = (a , b , task) => {
    console.log(task(a , b));

}
// operation(a = Number(prompt("enter a for addition")),
//           b = Number(prompt("enter b for addition")),
//          (a , b) => {
//             return a + b
//          })

// operation(a = Number(prompt("enter a for sub")),
//           b = Number(prompt("enter b for sub")),
//          (a , b) => {
//            return a - b
//         })

// operation(a = Number(prompt("enter a for multiply")),
//           b = Number(prompt("enter b for multiply")),
//          (a , b) => {
//          return a * b
//       })

operation(a = Number(prompt("enter a for divide")),
          b = Number(prompt("enter b for divide")),
         (a , b) => {
         return a / b
      })