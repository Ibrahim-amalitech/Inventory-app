


if(localStorage.getItem('products') === null){
   var products_infomation=[{
      "name": "PULLOVER LIGHT PINK",
      "description": "bright peach color",
      "category": "BOYS WEAR",
      "quantity_available": "17",
       "image": "./imgs/bright_peach0.jpg"
   },
  
   {
       "name": "BOYS PULLOVER ASH",
       "description": "light gray heather color",
       "category": "BOYS WEAR",
       "quantity_available": "80",
       "image": "./imgs/light_gray_heather0.jpg"
    },
    
  
    {
       "name": "PULLOVER MAGENTA",
       "description": "flat blue color",
       "category": "KIDS WEAR",
       "quantity_available": "130",
       "image": "./imgs/flat_blue0.jpg"
    },
    
    {
       "name": "BOYS PULLOVER BLUE",
       "description": "hull blue",
       "category": "GIRLS WEAR",
       "quantity_available": "69",
       "image": "./imgs/hull_blue0.jpg"
    },
  
    {
      "name": "Metal lantern",
      "description": "white color",
      "category": "HOME EQUIPMENTS",
      "quantity_available": "200",
      "image": "./imgs/lantern.jpg"
   },
  
   {
       "name": "LIGHT HOLDER",
       "description": "Glass star and frosted",
       "category": "HOME EQUIPMENTS",
       "quantity_available": "20",
       "image": "./imgs/holder.jpg"
    },
    
  
    {
       "name": "INFINIX PHONE",
       "description": "BRAND S4, 3-6 Gigabyte RAM, 720X1520 Pixels",
       "category": "ANDROID PHONES",
       "quantity_available": "30",
       "image": "./imgs/Infinix_S4.jpg"
    },
    
    {
       "name": "SAMSUNG GALAXY",
       "description": "A 12, 2-6 Gigabyte RAM, 720X1600 Pixels",
       "category": "ANDROID PHONES",
       "quantity_available": "69",
       "image": "./imgs/Samsung_A12.jpg"
    }
  ];
window.localStorage.setItem('products', JSON.stringify(products_infomation));
}
// products_info object is stringified and stored in local storage

//  convert local storage to objects and assign 
// it to letiable by using JSON.parse() to enable usage in code.
// let products_infoObject=JSON.parse(window.localStorage.getItem('products'));

let productData = localStorage.getItem('products');
let products_infoObject = JSON.parse(productData);

// Get table row element and append 

for (let i = 0; i < products_infoObject.length; i++) {
    let prodName=products_infoObject[i].name;
    let prodDescription=products_infoObject[i].description;
    let prodQuantityAvailable=products_infoObject[i].quantity_available;
    let prodCategory=products_infoObject[i].category
    let rowToAppend="<tr><td>" + prodName + "</td><td>" + prodDescription + "</td><td>" + prodCategory + "</td><td>" + prodQuantityAvailable + "</td></tr>"
    $(".first-row").last().after(rowToAppend);
} 




                       


                  // calculate values for summary table

$('#item-total').html(((document.getElementById("Inventory-table").lastChild.childNodes).length)-2);


let table=document.getElementById("Inventory-table"), sumVal=0;
for (let i = 1; i < table.rows.length; i++) {
   sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
   document.getElementById("items-instock").innerHTML =  sumVal;
   let CategorySet= new Set(table.rows[i].cells[2].innerHTML);
   document.getElementById("category-total").innerHTML = CategorySet.size;
}


// change color of items to reflect out of stock, in stock or almost out of stock

function changeItemColor() {
    for (let i = 0; i < ((document.getElementsByTagName("tr").length)-1); i++) { 
        let tableRow=document.getElementsByTagName("tr")[i];
        let itemRowQuantity=document.getElementsByTagName("tr")[i].children[3].innerHTML;
        let itemRowQuantityInt=parseInt(itemRowQuantity)
     if(itemRowQuantityInt==0){tableRow.style.backgroundColor="red";}
     else if(itemRowQuantityInt<=20){
      tableRow.style.backgroundColor="orange";
   }
    else if(isNaN(itemRowQuantityInt)){tableRow.style.backgroundColor="white";}
     else   {
      tableRow.style.backgroundColor="green";
  }
      
      
        }
       
    }
   changeItemColor(); 
    

            
                                // add item section


function addItemClick() {

// 1.Getting form inputs from add item page
let nameFromForm=document.getElementById("formId").elements.item(0).value;
let descFromForm=document.getElementById("formId").elements.item(1).value;
let quantityAvailableFromForm=document.getElementById("formId").elements.item(3).value;
let categoryFromForm=document.getElementById("formId").elements.item(2).value;
let itemAdded={
   name:nameFromForm,
   description:descFromForm,
   quantity_available: quantityAvailableFromForm,
   category: categoryFromForm
};


products_infoObject.push(itemAdded);
localStorage.setItem('products', JSON.stringify(products_infoObject));

alert('working');

// let AddrowToAppend="<tr><td>" + nameFromForm + "</td><td>" + descFromForm + "</td><td>" + categoryFromForm + "</td><td>" + quantityAvailableFromForm + "</td></tr>"
// $(".first-row").last().after(AddrowToAppend);    

}

                             