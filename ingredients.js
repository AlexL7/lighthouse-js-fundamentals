var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;

while(count < ingredients.length){
  console.log(ingredients[count]);
  count = count + 1;

}
console.log("End of while loop");

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);

}
console.log ("End of for loop");
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = ingredients.length; i > 0; i--){
  console.log(ingredients[i-1]);
}