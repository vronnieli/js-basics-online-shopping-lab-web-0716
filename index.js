var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var object = item
  cart.push({[object]:price})
  console.log(`${object} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var sentence = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        sentence+=`${item} at $${cart[i][item]}, `
      }
    }
    var finalSentence = sentence.slice(0,-2)
    finalSentence+="."
    console.log(finalSentence)
  } else {console.log("Your shopping cart is empty.")}
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    debugger
    var newCart = []
    if (cart[i][item] !== undefined) {
      delete cart[i]
      for (var i = 0; i <cart.length; i++) {
        if (cart[i] !== undefined) {
          newCart.push(cart[i])
        }
      }
      cart = newCart
      return newCart
    }
  }
  return console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
