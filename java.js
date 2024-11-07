


var productNameInput =document.getElementById('productName');
var productCategoryInput =document.getElementById('productCategory');
var productPricetInput =document.getElementById('productPricet');
var proDescInput =document.getElementById('proDesc');
var addBtn = document.getElementById('addBtn');
var searchInput = document.getElementById('searchInput');



var productList ;
var MainIndex = 0 ;

if(localStorage.getItem("productList") != null){
    productList =JSON.parse(localStorage.getItem("productList"))
    displyProduct()

    }else{
        productList=[]

    };

function getInputData(){

var products = {

name: productNameInput.value,
category:productCategoryInput.value,
price:productPricetInput.value,
Description: proDescInput.value,
}





if(addBtn.innerHTML == "Add Product"){
    productList.push(products);
   
}else{
    productList.splice(MainIndex,1,products)
    addBtn.innerHTML = "Add Product"
    };

localStorage.setItem("productList", JSON.stringify(productList));
displyProduct();
clear();







}

function displyProduct(){
    var cartona ="";

    for( var i =0 ; i <productList.length; i++ ){
    
        cartona +=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].Description}</td>
        <td><button onclick="deleteProduct(${i})" class=" btn btn-danger">Delete</button></td>
        <td><button onclick="updateProduct(${i})"   class=" btn btn-warning">Update</button></td>
      </tr>  
     `
    }
    
    document.getElementById('tbody').innerHTML= cartona;
   

}

function clear(){

    productNameInput.value="";
    productCategoryInput.value="";
    productPricetInput.value="";
    proDescInput.value="";

}


function GetInputsData(){

    console.log("hi")
}

function deleteProduct(index){

    productList.splice(index,1)

    localStorage.setItem("productList", JSON.stringify(productList))

    displyProduct()

}

function updateProduct(index){
    
    MainIndex= index;

    productNameInput.value = productList[index].name;
    productCategoryInput.value = productList[index].category;
    productPricetInput.value = productList[index].price;
    proDescInput.value = productList[index].Description;
    addBtn.innerHTML = "Update Product"

}


function search(){
var searchTerm = searchInput.value;

console.log(searchTerm)

var cartona ="";

    for( var i =0 ; i <productList.length; i++ ){
    
        if(productList[i].name.toLowerCase().includes(searchTerm.toLowerCase())){

            cartona +=`
            <tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].Description}</td>
            <td><button onclick="deleteProduct(${i})" class=" btn btn-danger">Delete</button></td>
            <td><button onclick="updateProduct(${i})"   class=" btn btn-warning">Update</button></td>
          </tr>  
         `
        }
        
        }
  
    document.getElementById('tbody').innerHTML= cartona;


}

