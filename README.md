# Shopping Cart DOM Project
## Project Description

This project is a simple shopping cart application built using HTML, CSS, and JavaScript DOM manipulation. Users can interact with products in the cart by increasing or decreasing quantities, removing items, liking products, and viewing the total price updated in real time.

## Features
1. Adjust Item Quantity
Click the + button to increase the quantity of a product.
Click the − button to decrease the quantity.
Quantity cannot go below 0.
2. Delete Items
Click the trash icon to remove a product from the shopping cart.
3. Like Products
Click the heart icon to like or unlike a product.
The heart changes color when selected.
4. Dynamic Total Price
The total price updates automatically whenever:
A quantity changes.
A product is removed from the cart.

## Technologies Used
HTML5
CSS3
JavaScript (DOM Manipulation)
Bootstrap 5
Font Awesome

## How It Works
### Quantity Management

JavaScript listens for click events on the plus and minus icons and updates the quantity displayed for each product.

### Item Deletion

When the trash icon is clicked, the corresponding product card is removed from the DOM.

### Like Button

The heart icon toggles a CSS class that changes its color to indicate whether the item is liked.

### Total Calculation

A function recalculates the total cost by multiplying each product's unit price by its quantity and summing all products.

## Screenshots

<img width="1366" height="768" alt="Screenshot (11)" src="https://github.com/user-attachments/assets/f53dc614-83e0-4d22-8906-603b68583434" />



<img width="1366" height="768" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/a5ec0ab4-4ba3-4797-a5a2-d5f4a6ca28d6" />



## Learning Objectives

#### This project demonstrates how to:

Select DOM elements using JavaScript.
Handle user interactions with event listeners.
Modify element content dynamically.
Remove elements from the DOM.
Toggle CSS classes.
Update UI data in real time.
Future Improvements
Save cart data using Local Storage.
Add product quantities on page load.
Display item subtotals.
Add animations for likes and deletions.
Connect the cart to a backend database.

## Author
Victor Gichobi


