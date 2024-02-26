/* const myArray = ["apple", "cherry", "banana", "kiwi"];

//1. Using for Each with an array
myArray.forEach(item => {
    console.log(item)
} ) */

const products = [
    {
        title:'Product 1',
        description: 'Description product 1',
        image: 'https://picsum.photos/200/150',
        price: 19.99,
        category: 'Electronics'
    },
    {
        title:'Product 2',
        description: 'Description product 2',
        image: 'https://picsum.photos/200/150',
        price: 29.99,
        category: 'Shoes'
    },
    {
        title:'Product 3',
        description: 'Description product 3',
        image: 'https://picsum.photos/200/150',
        price: 39.99,
        category: 'Electronics'
    }
];


/* products.forEach(product => {
    console.log (product);
})  */

/* products.forEach(product => {
    console.log (`Title: ${product.title} | Price ${product.price}`);
})  */

const filteredProducts = products.filter(product => product.category == "Electronics")
console.log(filteredProducts)

const createCard = product => {
    return `
     <div class="card">
        <h4>${product.title}</h4>
        <h2>${product.description}</h2>
        <img src="${product.image}" />
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>     
     </div> 
    `;
}

products.forEach(product => {
    console.log(createCard(product));
})

const productContainer = document.querySelector(".row")


// Insert the generated HTML for each product card intro the 
// products.forEach(product => {
//     productContainer.innerHTML += createCard(product);
// })

filteredProducts.forEach(product => {
    productContainer.innerHTML += createCard(product);
})