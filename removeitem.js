
// let deleteItemDiv=document.getElementById("items-todelete");

 $(document).on('click', '#Inventory_table2 tr',function() {
    alert("working");
 });
 document.getElementById("Inventory_table2").children
 function removeItems() {
     let selectRowToDelete=document.querySelectorAll("#Inventory_table2 tr");
     for (let i = 1; i < selectRowToDelete.length; i++) {
         
         
     }
 }
//                             // deleteing items

// let deleteItemDiv=document.getElementById("items-todelete");



// for (let i = 0; i < products_infoObject.length; i++) {
//     let prodName=products_infoObject[i].name;
//     let prodDescription=products_infoObject[i].description;
//     let prodQuantityAvailable=products_infoObject[i].quantity_available;
//     let prodCategory=products_infoObject[i].category
//     let rowToAppend="<tr><td>" + prodName + "</td><td>" + prodDescription + "</td><td>" + prodCategory + "</td><td>" + prodQuantityAvailable + "</td></tr>"
//     $(".first-row").last().after(rowToAppend);
//  } 



     
//  });
//  document.getElementById('Inventory_table2').addEventListener('click', () => {
//     alert('hi');
//  })
 
//  $( document ).ready(function() {
//     console.log( "ready!" );
//  });