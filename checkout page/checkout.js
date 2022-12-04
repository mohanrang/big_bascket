
var cartArr = JSON.parse(localStorage.getItem("addtocart"))||[];
document.querySelector("#itemno").innerText= cartArr.length;

function displaycart(cartArr){
document.getElementById("tbody").innerHTML="";

cartArr.map(function(elem,index){
  
  var row= document.createElement("tr")


  var col1 = document.createElement("td")
  col1.setAttribute("id","namecol")
  var p1 = document.createElement("p")
  p1.innerText= elem.brand.toUpperCase()
  var p2 = document.createElement("p")
  p2.innerText=elem.name+"-"+elem.weight;
  p2.setAttribute("id","veg")

 var col2 = document.createElement("td")
  col2.setAttribute("id","Rs")
  col2.innerText = "Rs"+elem.rate
 

  var col3=document.createElement("td")
  var btn1 = document.createElement("button")
  var img = document.createElement("img")
  img.setAttribute("src","outline_remove_black_24dp.png")
  btn1.append(img)
  img.style.width = "12px";
  btn1.style.border = "none";
  



  btn1.addEventListener("click",function(){
   dec(index)
 })
  
  var btn2 = document.createElement("button")
 btn2.addEventListener("click",function(){
   inc(index)
 })

  var img = document.createElement("img")
  img.setAttribute("src","outline_add_black_24dp.png")
  btn2.append(img)
  img.style.width = "12px";
  btn2.style.border = "none";
 
 
  var qtyinput = document.createElement("input")
  qtyinput.setAttribute("id","qtyinput")
  qtyinput.setAttribute("value",elem.qty)
  qtyinput.style.width = "25px";
  qtyinput.style.border = "#c6c6c6";
  qtyinput.style.outline = "none";
  qtyinput.style.textAlign = "center";

  
  var div = document.createElement("div")  
  div.setAttribute("id","quant")
  div.append(btn1,qtyinput,btn2)
  div.style.border ="1px solid #efefef";
  div.style.width ="81px";
  div.style.backgroundColor = "#f0f0f0";
  div.style.borderRadius = "5px";

  var col4 = document.createElement("td")
   col4.innerText = "Rs"+""+elem.rate*elem.qty;
   
  var col5 = document.createElement("td")
  col5.innerText="X"
  col5.setAttribute("id","remove")
  col5.addEventListener("click",function(){
    removeitem(index)
  })
  


  col3.append(div)
  col1.append(p1,p2)
  row.append(col1,col2,col3,col4,col5)
  document.querySelector("#tbody").append(row)

  
})
}

total();
function total(){
var total = cartArr.reduce(function(acc,elem){
   return acc+ (elem.rate*elem.qty)

},0)
document.getElementById("total").textContent = total;
document.getElementById("subtotal").textContent =total;
localStorage.setItem("SubTotal",total);

}

displaycart(cartArr)
total();

function inc(index){
  cartArr[index].qty++;
localStorage.setItem("Quantity",JSON.stringify(cartArr));
displaycart(cartArr)
total();
}

function dec(index){
   
  cartArr[index].qty--;
   localStorage.setItem("Quantity",JSON.stringify(cartArr));
   displaycart(cartArr)
   total();
}




document.querySelector("#empty").addEventListener("click",clearall)

function clearall(){
cartArr=[]
document.querySelector("#subtotal").innerText="";
document.querySelector("#total").innerText="";
localStorage.setItem("addtocart",JSON.stringify(cartArr));
// document.querySelector("#itemno").innerText= cartArr.length;
// document.querySelector("#cartnum").innerText= cartArr.length;
window.location.reload();
displaycart(cartArr)
}



function show2() {
  document.querySelector("#cartnum").innerText= cartArr.length;
}

//////////////login sighnup/////////////////
// let signUp = document.getElementById("sign-up");
// let signIn = document.getElementById("sign-in");
// function signup() {
//   signUp.style.display = "flex";
//   signIn.style.display = "none";
// }

// function signin() {
//   // signUp.style.display = "none";
//   signIn.style.display = "flex";
// }

// function closeOption() {
//   // signUp.style.display = "none";
//   signIn.style.display = "none";
// }
// closeOption();
// function user_data() {
//   var mobile = document.getElementById("mobile-email").value;
//   var name = document.getElementById("name").value;
//   var obj = {
//     mobile: mobile,
//     name: name,
//   };
//   var arr;
//   arr = localStorage.getItem("user_cart");
//   if (arr == null) {
//     arr = [];
//   } else {
//     arr = localStorage.getItem("user_cart");
//     arr = JSON.parse(arr);
//   }
//   arr.push(obj);
//   localStorage.setItem("user_cart", JSON.stringify(arr));
//   // signIn.style.display = "none";
//   // location.reload();
//   var showname = document.getElementById("showname");
//   arr = localStorage.getItem("user_cart");
//   arr = JSON.parse(arr);
//   showname.innerHTML = "hello " + arr[arr.length - 1].name;
//   closeOption();
// }


document.querySelector("#checkout").addEventListener("click",checkout)
function checkout(){
  window.location.href="../payment/address.html"
}

function removeitem(index){
cartArr.splice(index,index+1)
localStorage.setItem("addtocart",JSON.stringify(cartArr));
// document.querySelector("#itemno").innerText= cartArr.length;
// document.querySelector("#cartnum").innerText= cartArr.length;
window.location.reload();
window.reload
total();
displaycart(cartArr)

}

document.querySelector("#continue").addEventListener("click", continueshop)
function continueshop(){
window.location.href="../product page/product.html"
}

document.getElementById("dropdown").addEventListener("change", function (e) {
  window.location.href = e.target.value;
});
document.getElementById("navigationbarcart").textContent =
  "My Basket " + cartArr.length + " Items";
