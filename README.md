`User/client Brief:` A pizza company called `Pizza co.` needs a simple way of allowing customers to order pizzas and get them delivered to their home.

`Project requirements from the business perspective (Pizza Co.)`

1. Applcation to be build is a very simple simulation of users,where they can place an order for one or more pizza from a menu.

2.Application does not actually need user accounts and no login functionality .User just simply input their names before using the app.

3. Pizza menu oughts to change from time to time ,so it should be loaded from an API.

4. Since users can order multiple different pizza from menu,we need a `cart` for holding various orders placed by user before they order.

5. Ordering in this application only needs a name,phone number and address.

6. If possible GPS location should be provided for easy delivery of pizzas.

7. `Additional feature:`Users should be able to mark their order as priority for an additional of 20% of cart price.

8. Orders are made by sending a post request with order data,(user data+selected pizza) to API.

9. Payments are made on delivery,so no payment processing is necesssary in the app.

10. Once user places an order,each order will get a unique ID that should be displayed so that user can later look up their order based on ID.

11. Users should also mark order as priority even after placing order.

` Features and Pages`

- We should include feature categories derived from the defined requirements.

`1.User feature`-refers to everything related to the user.

`2.Menu feature`-all features related to loading and displaying menu

`3.Cart feature`-users can be able to add one or more items from the menu.

`4 Order feature`-everything related to an order such as placing an order or looking up an order.

`Necessary pages`

1.`Homepage(/)`

2.`Piza menu(/menu)`

3.`Cart(/cart)`

4.`Place a new order(/order/new)`

5.`Looking up an order(/order/:orderId)`

`Folder Structure`

 <!--
src-
  |
  |----feature
         |
         |---user
         |---menu
         |---cart
         |---order
   |
   |---ui
   |---services
   |---context
   |---hooks
   |---pages
 -->
