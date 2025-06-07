function estimateTransactionFee(){
    // Prompts the user to enter the amount of money they wish to send
   const amountInput =prompt("Unatuma Ngapi? (KES):");

  // Convert input into a number   
     let amountToSend = Number(amountInput);

   //   transactionfee structure 
   const basicTansactionFee = (0.015 * amountToSend );
   const minimumFee = 10;
   const maximumFee = 70;

   //  Checks if input is a number  
 if  (typeof amountToSend === 'number' && amountToSend > 0){

    //  print output to console 
      if (basicTansactionFee  < 10)  {
       console.log(`
        Sending KES ${amountToSend}: 
        Calculated Transaction Fee: KES ${minimumFee}
        Total amount to be debited: KES ${minimumFee + amountToSend}

        Send Money Securely!
        `)
   }
   else if ( basicTansactionFee >=10 && basicTansactionFee <=70){
    console.log(`
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${basicTansactionFee}
        Total amount to be debited: KES ${basicTansactionFee + amountToSend}

        Send Money Securely!
        `)
   }
   else {
   console.log(`
        Sending KES ${amountToSend}: 
        Calculated Transaction Fee: KES ${maximumFee}
        Total amount to be debited: KES ${maximumFee + amountToSend}

        Send Money Securely!
        `)}
}
   else {console.log(alert("Invalid input!,please put a valid amount"))}

}

estimateTransactionFee()