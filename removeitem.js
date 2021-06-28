


  $( document ).ready(function() {
    $( "#Inventory_table2 tr" ).on( "click", function() {
        console.log( this.children.length);
     for (let i = 1; i < this.children.length; i++) {
        let nameToDelete=this.children[0].innerText;
        let descToDelete=this.children[1].innerText;
        let categoryToDelete=this.children[2].innerText;
        let quantityAvailableToDelete=this.children[3].innerText;
          let itemToRemove={
            name:nameToDelete,
            description:descToDelete,
            category: categoryToDelete,
            quantity_available: quantityAvailableToDelete
         }; 
         
         for (let w = 0; w < products_infoObject.length; w++) {
            if (products_infoObject[w].name==itemToRemove.name && products_infoObject[w].description==itemToRemove.description){
               products_infoObject.splice(products_infoObject[w],1);
               localStorage.setItem('products', JSON.stringify(products_infoObject));
            }    
         }

     }
    
    });
});




// $( "#Inventory_table2 tr" ).on( "click", function() {
//     console.log( "hi" );
//   });
// var selectRowToDelete=document.querySelectorAll("#Inventory_table2 tr");
// selectRowToDelete.forEach(Inventory_table2 =>{Inventory_table2.addEventListener("click",
//  function () {
//      for (let i = 1; i < selectRowToDelete.length; i++) {
//          let nameToDelete=selectRowToDelete[i].children[0];
//          let descToDelete=selectRowToDelete[i].children[1];
//          let categoryToDelete=selectRowToDelete[i].children[2];
//          let quantityAvailableToDelete=selectRowToDelete[i].children[3];
        
//         let itemToRemove={
//             name:nameToDelete,
//             description:descToDelete,
//             category: categoryToDelete,
//             quantity_available: quantityAvailableToDelete
//          }; 

//          if (products_infomation.includes(itemToRemove) ){
//              products_infoObject.splice(products_infoObject.indexOf(itemToRemove));
//              localStorage.setItem('products', JSON.stringify(products_infoObject));
//          }
         
//      }
 

//     })

// })
