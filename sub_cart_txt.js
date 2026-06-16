"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Vanessa Dela Cruz
   Date: April 15, 2024

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
//add event listener to run the setupCart function when the window loads
window.addEventListener("load", setupCart);

//sets up the event handlers for the Add to Order button on the web page
function setupCart()
{
   //get all elements with class "addButton"
   var addButtons = document.getElementsByClassName("addButton");
   //loop through each "add" button
   for (var i = 0; i < addButtons.length; i++)
   {
      //adds click event listener to the button, calling the addItem function
      addButtons[i].onclick = addItem;
   }
}

//adds items to the cart with its description and keeps track of the number of items per product
function addItem(e)
{
   //get sibling element of the clicked button
   var foodItem = e.target.nextElementSibling;
   //get the ID attribute of the food item
   var foodID = foodItem.getAttribute("id");
   //clone the food item element
   var foodDescription = foodItem.cloneNode(true);
   //get the cart element
   var cartBox = document.getElementById("cart");

   //variable to check if the order is a duplicate
   var duplicateOrder = false;
   //loop through each child element of the cart
   for (var n = cartBox.firstElementChild; n !== null; n = n.nextElementSibling)
   {
      //check if the ID of element node matches the foodID
      if (n.id === foodID)
      {
         //if condition is met, increment the quantity
         duplicateOrder = true;
         n.firstElementChild.textContent++;
         break;
      }
   }
   //if not a duplicate, add item to the cart
   if(duplicateOrder === false)
   {
      //create span element
      var orderCount = document.createElement("span");
      orderCount.textContent = "1";
      //insert the order count before the first element of the foodDescription
      foodDescription.insertBefore(orderCount, foodDescription.firstElementChild);
      //append the foodDescription to the cart
      cartBox.appendChild(foodDescription);
   }
}
