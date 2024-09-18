// include the following line if planning to use prompt function with Node.js:
// const prompt = require('prompt-sync')();

const products1 = [{name: "Laptop", price: 1000}, {name: "Phone", price: 600}, {name: "Tablet", price: 300}]
const products2 = [{name: "Headphones", price: 200}, {name: "Mouse", price: 50}]

function increaseProductPrices(products){
    // console.log('products',products)
    //use a map to go through and update each product prices
    const updatedProducts = products.map((product)=>{
        // Increase the price by 10%
        // product.price  = (product.price * 1.1).toFixed(2)

        //Set the decimal place
        // product.price = (product.price).toFixed(2) * 1.1
        // product.price = product.price.toFixed(2)

        // Round it up
        // product.price = Math.round(product.price)

        //Shortcut
        product.price = Math.round(product.price * 1.1)

        //Debug 1: Check if the product pricing is updated correctly
        // console.log('price',product.price)

        //Debug 2: Check if products is correct
        // console.log('product',product)
        return product
})

return updatedProducts
}

//Run the functions
console.log('Updated price', increaseProductPrices(products1))
console.log('Updated price 2', increaseProductPrices(products2))