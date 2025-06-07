
function calculateChaiIngredients (){
    
  //Prompts the user to enter the number of chai cups they want to make
     let chaiCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");

    //  converts the input to a number.
    let numberOfCups = Number(chaiCups);

   //  Calculates the required amount for each ingredient 
    const water = numberOfCups * 200;
    const milk = numberOfCups * 50;
    const tea =  numberOfCups* 1;
    const sugar = numberOfCups* 2;

  // Prints the results to the console 
  if (typeof numberOfCups==='number' && numberOfCups > 0){
    console.log(`
        To make ${numberOfCups} cups of kenyan chai, you will need:
        Water:${water} ml
        Milk: ${milk} ml
        Tea Leaves (Majani): ${tea} tablespoons
        Sugar (Sukari): ${sugar} teaspoons

        Enjoy your Chai Bora!
        ` );
     }   
     else {console.log(alert("Invalid input!,please try again"))}
    }
   
      calculateChaiIngredients();
     
     

          