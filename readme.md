Vendr
============
<!-- 
### Get Started

```terminal
> npm i
> npm run sass
> npm run serve
```

### AuthConfig

Fill in your AuthConfig with keys from [Auth0](https://auth0.com/)

```javascript
export const domain = '' 
export const clientId = '' 
export const audience = '' 
``` -->

### Vendr

Student will build a Vending machine application using the MVC design pattern and Encapsulation

Vendr

Ever wonder what life might be like owning a vending machine? Wonder no more!

## Goals

Students will use JavaScript in an MVC pattern in order to create their own vending machine. In order to create their vending machine, students will utilize a Model, Service, and Controller to manipulate their ProxyState data.

## Suggestions

Create a Class
Create a new Class for your vending machine items.
```javascript
export default class Snack{
    constructor (name, price){
        this.name = name, 
        this.price = price
        ...
    }
}
```
Note: You need not have every property or member in this class in your classes, and likewise, you may include additional properties not shown above.

## Create Instances 

Create at least one instance of a snack in your AppState, ex:
```javascript
snacks = [new Snack('Mountain Sprite', 2.50), new Snack('Root Dew', 5.75)];
```
Create a Controller and Service
Add your business logic and GET RICH by manipulating the DOM!

Start by adding a button to the page to increase a transactionTotal by .25 every click, make sure this goes through the controller to the service

From there you will want to add a clickable item to the page for each snack in your snacks array that you can click to try to "purchase" that snack