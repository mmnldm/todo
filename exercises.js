
// const btn = document.createElement('button');

// btn.innerText = 'Press me babe';
// document.body.appendChild(btn);
// document.title = "What's good?";

// function toUpper(str){
//     const newArr = [];

//    str.forEach(function (strArr){
//     newArr.push(strArr.toUpperCase());
//    });

//    console.log(newArr);
// }
// toUpper(['hello', 'world']);

// function arrayDouble(fArr){
//     const newD = [];

//     fArr.forEach(function(okay){
//         newD.push(okay);
//         newD.push(okay);
//     })
//     console.log(newD)
// }

// arrayDouble(['Bob']);

// function arraySum(numArray){
//     const total = 0;
//     numArray.forEach(function (num){
//         total = total + num;
//     })
//     console.log(total);
// }

// arraySum([1,2,3]);

// const newbtn = document.createElement('button');
// newbtn.setAttribute('id','todo-button')
// newbtn.innerText = "Button"
// document.body.appendChild(newbtn);

// newbtn.addEventListener('click', clik);

// function clik(){
//     newbtn.innerText = "Done";
// }

// const up = document.getElementById('counterup');
// const down = document.getElementById('counterdown');
// up.addEventListener('click', counterup);
// down.addEventListener('click', counterdown);

// const count = 0;

// function counterup(){

  
//     count = count + 1;

//     const counter = document.getElementById('counter');
//     counter.innerText = count;
// }

// function counterdown(){
//     count = count - 1;

//     if(count < 0) return 0;

//     const counter = document.getElementById('counter');
//     counter.innerText = count;
// }

// const include = document.getElementById('inc');
// include.addEventListener('click', newpage);

// function newpage(){
//     const title = document.getElementById('tit');
//     const text = title.value;

//     const div = document.createElement('div');
//     div.innerText = text;
//     document.body.appendChild(div);

// }

// const cart = document.getElementById('cart');
// const appleBtn = document.getElementById('apple-btn');
// const tomatoBtn = document.getElementById('tomato-btn');
// const eggsBtn = document.getElementById('eggs-btn');
// const clearBtn = document.getElementById('clear');

// appleBtn.addEventListener('click', () =>{
//     const appleDiv = document.createElement('div');
//     appleDiv.innerText = "Apple";
//     cart.appendChild(appleDiv);
// });

// tomatoBtn.addEventListener('click', () =>{
//     const tomatoDiv = document.createElement('div');
//     tomatoDiv.innerText = 'Tomato';
//     cart.appendChild(tomatoDiv);
// });

// eggsBtn.addEventListener('click', () =>{
//     const appleDiv = document.createElement('div');
//     appleDiv.innerText = 'Eggs';
//     cart.appendChild(appleDiv);
// });

// clearBtn.addEventListener('click', () => {
//     cart.innerHTML = '';
// })


// const convertToInch = document.getElementById('convertToInch');
// const convertToCm = document.getElementById('convertToCm');
// const result = document.getElementById('result');
// convertToCm.addEventListener('click', convertCm)

// convertToInch.addEventListener('click', () => {
//     const c_title = document.getElementById('ctitle');
//     const ct = c_title.value;

//     let calc = Number(ct * 2.54);
//     calc = Math.floor(calc);
//     const newEl = document.createElement('div');
//     newEl.innerText = calc + 'inches';
//     result.appendChild(newEl);

// });

// function convertCm(){
//     const c_title = document.getElementById('ctitle');
//     const ct = c_title.value;

//     let calc = Number(ct / 2.54);
//     calc = Math.floor(calc);
//     const newEl = document.createElement('div');
//     newEl.innerText = calc + 'Cm';
//     result.appendChild(newEl);
// }

// * New Example 

// function cartTotal(cartArray) {
//     let total = 0;
  
//     cartArray.forEach(function (item) {
//       total = total + item.price * item.quantity;
//     });
  
//     console.log(total);
//   }

//   cartTotal([
//     { name: 'Apple', price: 4, quantity: 2 },
//     { name: 'Orange', price: 3, quantity: 3 }
//   ]);



//   const receipt = document.getElementById('receipt');

//   function displayReceipt(cartArray) {
//     receipt.innerHTML = '';

//     cartArray.forEach(function (item) {
//       const receiptLine = document.createElement('div');
//       receiptLine.innerText = item.name + ' $' + item.price + ' * ' + item.quantity;
//       receipt.appendChild(receiptLine);
//     });

 // You can also calculate the total using just the loop above, but I like
 // to separate them out so each loop does one thing.
//     let cartTotal = 0;
//     cartArray.forEach(function (item) {
//       cartTotal = cartTotal + item.price * item.quantity;
//     });

//     const totalLine = document.createElement('div');
//     totalLine.innerText = 'Cart total = $' + cartTotal;
//     receipt.appendChild(totalLine);
//   }

//   displayReceipt([
//     { name: 'Apple', price: 4, quantity: 2 },
//     { name: 'Orange', price: 3, quantity: 3 }
//   ]);


// ? Check what's wrong with this code// 

let total = 0;

function createCart(foodPrices) {
  const foods = Object.keys(foodPrices);

  foods.forEach(function (food) {
    const cartItem = document.createElement('div');

    // Here we get the food price using the food variable.
    // If food = 'Apple', then foodPrices[food] is the same
    // as foodPrices['Apple'], which is the same as foodPrices.Apple
    const foodPrice = foodPrices[food];
    cartItem.innerText = food + ' $' + foodPrice;

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';

    // Sorry I didn't teach this (I'll revise in the 2022 edition)!
    // You'll have to use a function without a name here. If you
    // create a separate addToCart() function, it will not have
    // access to any of the variables in this function.
    addButton.onclick = function () {
      total = total + foodPrice;
    };

    cartItem.appendChild(addButton);

    // This wil render each food with an "Add" button onto the webpage.
    document.body.appendChild(cartItem)
  });
}

createCart({ Apple: 3, Orange: 4, Egg: 2 });

function aboveFreezing (temps){
  const tempsAboveFreezing = temps.filter(function(temp){
    return temp > 32;
  });
  return tempsAboveFreezing;
}

console.log(aboveFreezing([40,32,12,100,-3,0]));

function removeRed(foodArray){
  const redcolor = foodArray.filter(function(food){
    return food.color !== 'red';
  });
  return console.log(redcolor);
}

removeRed([{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }]);