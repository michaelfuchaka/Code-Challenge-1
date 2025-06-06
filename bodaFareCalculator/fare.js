
function calculateBodaFare(){
    // Prompts the user to enter the distance 
  let  distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  distanceInKm = Number(distanceInput);
 
  //   Fare Calculation Rules:
  const baseFare = 50;
  const chargePerKm= 15;

  //  Total estimated

   const totalDistanceFare= distanceInKm * chargePerKm;
   const totalFare = baseFare + totalDistanceFare;

//   console output
if (typeof distanceInKm=== 'number' && distanceInKm >0 ){
  console.log(`
   Uko kwote? Io ni ${distanceInKm}km:
   Ukikalia Pikipiki: KES ${baseFare}
   Mpaka Uko: KES ${totalDistanceFare}
   Total: KES ${totalFare}

   Panda Pikipiki!
    
    `);
}
  else 
  {console.error(alert("Wacha mambo mkubwa,Weka kilometer twende!"))
    } 
}

 calculateBodaFare()