document.title ="Product-Card"

 let nameEl = document.getElementById("nameEl")
 let img = document.getElementById("img")
 let price = document.getElementById("price")
 let desc = document.getElementById("Desc")
 let cart = document.getElementById("cart")
    // let Api = 'https://fakestoreapi.com/products'

    let myProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(response => {
                return response.json()
                
            })
            .then(data => {
                console.log(data)
                             
                cart.textContent = data[0].category
                nameEl.textContent = data[0].title
                img.textContent = data[0].image
                price.textContent = data[0].price
                desc.textContent = data[0].description
                
                
            });
}
myProducts()

