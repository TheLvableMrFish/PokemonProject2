class Store{
    constructor(){
        //object to hold intems in cart
        this.itemsInCart = {
            itemCount: 0,
            subTotal: 0,
            itemAdded: 0,
            itemSubtracted: 0,
            priceMinus: 0,
            priceAdd: 0
        }

        //object hold inventory
        this.inventory = {
            item1:{
                id: 1,
                img: 'media/001.png',
                type: 'grass poison',
                price: 300,
                qty: 0,
                name: 'Bulbasaur',
                info: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'
            },
            item2:{
                id: 2,
                img: 'media/002.png',
                type: 'grass poison',
                price: 500,
                qty: 0,
                name: 'Ivysaur',
                info: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'
            },
            item3:{
                id: 3,
                img: 'media/003.png',
                type: 'grass poison',
                price: 700,
                qty: 0,
                name: 'Venusaur',
                info: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
            },
            item4:{
                id: 4,
                img: 'media/004.png',
                type: 'fire',
                price: 300,
                qty: 0,
                name: 'Charmander',
                info: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
            },
            item5:{
                id: 5,
                img: 'media/005.png',
                type: 'fire',
                price: 500,
                qty: 0,
                name: 'Charmeleon',
                info: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'
            },
            item6:{
                id: 6,
                img: 'media/006.png',
                type: 'fire flying',
                price: 700,
                qty: 0,
                name: 'Charizard',
                info: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'
            },
            item7:{
                id: 7,
                img: 'media/007.png',
                type: 'water',
                price: 300,
                qty: 0,
                name: 'Squirtle',
                info: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
            },
            item8:{
                id: 8,
                img: 'media/008.png',
                type: 'water',
                price: 500,
                qty: 0,
                name: 'Wartortle',
                info: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.'
            },
            item9:{
                id: 9,
                img: 'media/008.png',
                type: 'water',
                price: 700,
                qty: 0,
                name: 'Blastoise',
                info: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'
            },
            item10:{
                id: 10,
                img: 'media/010.png',
                type: 'bug',
                price: 200,
                qty: 0,
                name: 'Caterpie',
                info: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.'
            },
            item11:{
                id: 11,
                img: 'media/011.png',
                type: 'bug',
                price: 300,
                qty: 0,
                name: 'Metapod',
                info: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.'
            },
            item12:{
                id: 12,
                img: 'media/012.png',
                type: 'bug flying',
                price: 500,
                qty: 0,
                name: 'Butterfree',
                info: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'
            },
            item13:{
                id: 13,
                img: 'media/013.png',
                type: 'bug poison',
                price: 200,
                qty: 0,
                name: 'Weedle',
                info: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.'
            },
            item14:{
                id: 14,
                img: 'media/014.png',
                type: 'bug poison',
                price: 300,
                qty: 0,
                name: 'Kakuna',
                info: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'
            },
            item15:{
                id: 15,
                img: 'media/015.png',
                type: 'bug poison',
                price: 500,
                qty: 0,
                name: 'Beedrill',
                info: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'
            },
            item16:{
                id: 16,
                img: 'media/016.png',
                type: 'normal flying',
                price: 300,
                qty: 0,
                name: 'Pidgey',
                info: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'
            },
            item17:{
                id: 17,
                img: 'media/017.png',
                type: 'normal flying',
                price: 400,
                qty: 0,
                name: 'Pidgeotto',
                info: 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.'
            },
            item18:{
                id: 18,
                img: 'media/018.png',
                type: 'normal flying',
                price: 500,
                qty: 0,
                name: 'Pidgeot',
                info: 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'
            },
            item19:{
                id: 19,
                img: 'media/019.png',
                type: 'normal',
                price: 200,
                qty: 0,
                name: 'Rattata',
                info: 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.'
            },
            item20:{
                id: 20,
                img: 'media/020.png',
                type: 'normal',
                price: 500,
                qty: 0,
                name: 'Raticate',
                info: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.'
            },
            item21:{
                id: 21,
                img: 'media/021.png',
                type: 'normal flying',
                price: 300,
                qty: 0,
                name: 'Spearow',
                info: 'Inept at flying high. However, it can fly around very fast to protect its territory.'
            },
            item22:{
                id: 22,
                img: 'media/022.png',
                type: 'normal flying',
                price: 500,
                qty: 0,
                name: 'Fearow',
                info: 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.'
            },
            item23:{
                id: 23,
                img: 'media/023.png',
                type: 'poison',
                price: 300,
                qty: 0,
                name: 'Ekans',
                info: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.'
            },
            item24:{
                id: 24,
                img: 'media/024.png',
                type: 'poison',
                price: 500,
                qty: 0,
                name: 'Arbok',
                info: 'The frightening patterns on its belly have been studied. Six variations have been confirmed.'
            },
            item25:{
                id: 25,
                img: 'media/025.png',
                type: 'electric',
                price: 300,
                qty: 0,
                name: 'Pikachu',
                info: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.'
            },
            item26:{
                id: 26,
                img: 'media/026.png',
                type: 'electric',
                price: 500,
                qty: 0,
                name: 'Raichu',
                info: 'Its long tail serves as a ground to protect itself from its own high-voltage power.'
            },
            item27:{
                id: 27,
                img: 'media/026.png',
                type: 'd-none',
                price: 0,
                qty: 0,
                name: 'none',
                info: 'This is here to fix a bug, the last on the list seems to be off when using the  "<" & ">" '
            }
        }
    }

    init(){
        this.loadItems();
        this.popUpInfo();
        this.addToCart();
        this.takeFromCart();
        this.checkout();
    }

    loadItems(){
        //load items on page
        let count = 0;

        let products1 = document.getElementById('products1');
        // let products2 = document.getElementById('products2');
        // let products3 = document.getElementById('products3');
        products1.innerHTML = '';
        // products2.innerHTML = '';
        // products3.innerHTML = '';
        // console.log('worekd');

        // based by class in the item
        for(const key in this.inventory){
            const item = this.inventory[key];
            const product = document.createElement('div');
            product.className = 'col-md-3 product';
            product.innerHTML = `<div class="${item.type} pokemon">
            <div class="pokemon-number">#${item.id}</div>
            <img src="${item.img}" alt="${item.name}" class="img-fluid " onerror="this.src='download.jpg'">
            <div class="col-10 name">${item.name}</div>
                
                <div class="row">
                <div class="cost"> $${item.price.toFixed(2)}</div>
                <button class="btn-secondary minus-button" data-id="${item.id}">&#60</button>
                <div class="qty-amount ${item.id}"> ${item.qty}</div>
                <button class="btn-secondary add-button" data-id="${item.id}">&#62</button>
                <button class="btnInfo" data-info="${item.info}" id="btnInfo"><i class="icon-info"></i></button>
                <div class="info d-none" >${item.info}</div>
                `
                ;
                // <button class="btn-secondary less-btn">&lt;</button>
                // <spawn class="numOfId">${item.qty}<span>
                // <button class="btn-secondary more-btn">&#62;</button> </div></div>

            // if(item.class == 'main'){
            products1.append(product);
            // } else if(item.class == 'side'){ products2.append(product)}
            // else if(item.class == 'drink'){products3.append(product);}
            // else{console.log('error')}
        } 
    }

    popUpInfo(){
        let qty = 0;
        let buttons = document.querySelectorAll('.btnInfo');
        for(const key in this.inventory){
            const item = this.inventory[key];
            buttons.forEach(button =>{
                button.addEventListener('click', () =>{
                    if(button.dataset['info'] == item.info){
                        let currItem = document.querySelectorAll('.info');
                        for(const key2 in currItem){
                            const item2 = currItem[key2];
                        currItem.forEach(function () {
                            if(item.info == item2.innerText){
                                // console.log(item2, item.info);
                                if(qty < 1){
                                    
                                
                                if(item2.classList.contains('d-none')){
                                    item2.classList.remove('d-none');
                                } else{
                                    item2.classList.add('d-none');
                                    // console.log('did\'t work');
                                }
                                
                                
                                } 
                                qty++
                            }}) 
                            qty = 0;
                        }

                                
                       
                        // console.log(item);
                        // console.log(item.info);
                        
                        
                        
                    }
                })
            })
        }
    }

    addToCart(){
        //set variables
        let buttons = document.querySelectorAll('.add-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubTotal = document.getElementById('cartSubTotal');
        let itemAdded = 0;
        let priceAdd = 0;
        let numOfId = document.querySelectorAll('.numOfId');
        let itemAmount = document.querySelectorAll('.qty-amount');

        //for in loop to loop through this.inventory
        for(const key in this.inventory){
            const item = this.inventory[key];
            //add event listener to each button
            buttons.forEach(button =>{
                button.addEventListener('click', () =>{
                    //if the id of the data attribute matches item .id
                    if(button.dataset['id'] == item.id){
                        itemAdded++;
                        priceAdd = priceAdd + item.price;
                        //store changed itemCount and price inot this.itemInCart
                        this.itemsInCart.itemAdded = itemAdded;
                        // this.itemsInCart.subTotal = price;
                        
                        
                        
                        item.qty++;

                        let currItem = document.querySelectorAll('.qty-amount');
                        for(const key2 in currItem){
                            const item2 = currItem[key2];
                            // console.log(item2);
                        currItem.forEach(function () {
                            if(item2.classList.contains(item.id)){
                                item2.innerText = item.qty;      
                                
                        }}) 
                        
                        
                        
                    }}

                    //send back to the DOM
                    this.itemsInCart.priceAdd = priceAdd;
                    cartItems.innerText = this.itemsInCart.itemSubtracted + itemAdded;
                    cartSubTotal.innerText = (parseInt(priceAdd) + parseInt(this.itemsInCart.priceMinus)).toFixed(2);
                    
                })
            })
        }
        
    }

    takeFromCart(){
        //set variables
        let buttons = document.querySelectorAll('.minus-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubTotal = document.getElementById('cartSubTotal');
        let itemSubtracted = 0;
        let priceMinus = 0;
        let numOfId = document.querySelectorAll('.numOfId');
        let itemAmount = document.querySelectorAll('.qty-amount');

        //for in loop to loop through this.inventory
        for(const key in this.inventory){
            const item = this.inventory[key];
            //add event listener to each button
            buttons.forEach(button =>{
                button.addEventListener('click', () =>{
                    //if the id of the data attribute matches item .id
                    if(button.dataset['id'] == item.id && item.qty > 0){
                        itemSubtracted--;
                        priceMinus = priceMinus - item.price;
                        //store changed itemCount and price inot this.itemInCart
                        this.itemsInCart.itemSubtracted = itemSubtracted;
                        
                        // this.itemsInCart.subTotal = price;
                        
                        
                        
                        item.qty--;

                        let currItem = document.querySelectorAll('.qty-amount');
                        for(const key2 in currItem){
                            const item2 = currItem[key2];
                            // console.log(item2);
                        currItem.forEach(function () {
                            if(item2.classList.contains(item.id)){
                                item2.innerText = item.qty;      
                                
                        }}) 
                        
                        
                        
                    }
                    }

                    //send back to the DOM
                    this.itemsInCart.priceMinus = priceMinus;
                    cartItems.innerText = this.itemsInCart.itemAdded + itemSubtracted;
                    // console.log(priceMinus+this.itemsInCart.priceAdd);
                    cartSubTotal.innerText = (parseInt(priceMinus) + parseInt(this.itemsInCart.priceAdd)).toFixed(2);
                    
                })
            })
        }
        
    }

    checkout(){
        //set variables
        let tabel = document.getElementById('tbody');
        let checkout = document.getElementById('checkout');
        let mainMenu = document.querySelector('.main-menu');
        let mainCheckout = document.querySelector('.main-checkout');
        let subTimesQty = 0;
        let subTotalValue = document.getElementById('subtotalValue');
        let totalValue = document.getElementById('totalValue');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let wallet = document.getElementById('amount_in_wallet');
        checkout.addEventListener('click', ()=>{
            let amount = cartSubTotal.innerText;

            if(parseInt(amount) <= parseInt(wallet.innerText)){
            if(mainCheckout.classList.contains('d-none')){
            // remove d-none from checkout and add d-none to homepage, d-none is display none in bootstrap
            mainCheckout.classList.remove('d-none');
            // mainMain.classList.add('d-none');
            mainMenu.classList.add('d-none');

            
            if(this.itemsInCart.itemCount == 1){
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} item`;
            } else {checkoutItemCount.innerText = `${this.itemsInCart.itemCount} items`;}

            // load content on checkout page
            for(const key in this.inventory){
                const item = this.inventory[key];

                subTimesQty = (item.qty * item.price).toFixed(2);
                subTotalValue.innerText = this.itemsInCart.subTotal.toFixed(2);
                // tipValue.innerText = `${tip * 100}%`;
                // tax = this.itemsInCart.subTotal * .07;
                // taxValue.innerText = tax.toFixed(2);
                totalValue.innerText = (amount);
                // + tax + (tip * this.itemsInCart.subTotal)

                //if qty > 0 (item has been added to cart)
                if(item.qty> 0){
                    
                    const tableRow = document.createElement('tr');
                    tableRow.className = 'product-checkout';

                    tableRow.innerHTML += `
                        <td id="checkoutImg">
                            <img src="${item.img}" alt="${item.alt}" class="img-fluid checkout-img">
                            <div class="product-desc">
                                <p class="item-name">${item.name}</p>
                            </div>
                        </td>
                        
                        <td>
                            <p class="unit-price">${item.price.toFixed(2)}</p>
                        </td>
                        <td>
                            <div id="itemQuanity">
                                <p id="qtyInput">${item.qty}</p>
                            </div>
                        </td>
                        <td id="itemSubtotal">${subTimesQty}</td>`;

                        tabel.append(tableRow);
                }
            }
        }
    } else{
        alert('Insufficient Funds');
    }
    })
    }
    
}

let action = new Store();

action.init();



























var amount_in_wallet = 3000;
document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;

// var poke_sale_1 = true;
// var poke_sale_2 = true;
// var poke_sale_3 = true; 
// var poke_sale_4 = true;
// var poke_sale_5 = true;
// var poke_sale_6 = true;

const starter_button1 = document.getElementById("starter_grass");
const starter_button2 = document.getElementById("starter_fire");
const starter_button3 = document.getElementById("starter_water");
 






// function changeImage()
// {
// var img = document.getElementById("img-section1");
// img.src="media/pikachu.png";
// return false;
// }

function changeImage1()
{
var img = document.getElementById("img-grass");
img.src="media/001.png";
var img2 = document.getElementById("img-fire");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-water");
img3.src="media/poke-ball-img.png";
return false;
}

// var img2 = document.getImgById("img-fire");
// var img3 = document.getImgById("img-water");
// img2.src="media/poke-ball-img.png";
// img3.src="media/poke-ball-img.png";

function changeImage2()
{
var img = document.getElementById("img-fire");
img.src="media/004.png";
var img2 = document.getElementById("img-grass");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-water");
img3.src="media/poke-ball-img.png";
return false;
}

function changeImage3()
{
var img = document.getElementById("img-water");
img.src="media/007.png";
var img2 = document.getElementById("img-fire");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-grass");
img3.src="media/poke-ball-img.png";
return false;
}

// function changeImage4()
// {
//         var img = document.getElementById("section4-img-1");
//         var img2 = document.createElement("img2");
//         img2.src = "media/poke-sale1.png";
//         if(amount_in_wallet >= 300 && poke_sale_1){
//                 poke_sale_1 = false;
//                 amount_in_wallet = amount_in_wallet - 300;
                
//                 img.src="media/poke-sale1.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }

// return false;
// }

// function changeImage5()
// {
//         var img = document.getElementById("section4-img-2");
//         // var img2 = document.createElement("img2");
//         // img2.src = "media/poke-sale2.png";
//         if(amount_in_wallet >= 300 && poke_sale_2){
//                 poke_sale_2 = false;
//                 amount_in_wallet = amount_in_wallet - 300;
                
//                 img.src="media/poke-sale2.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }


// return false;
// }

// function changeImage6()
// {
//         var img = document.getElementById("section4-img-3");
//         var img2 = document.createElement("img3");
//         img2.src = "media/poke-sale2.png";
//         if(amount_in_wallet >= 300 && poke_sale_3){
//                 poke_sale_3 = false;
//                 amount_in_wallet = amount_in_wallet - 300;
                
//                 img.src="media/poke-sale3.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }

// return false;
// }

// function changeImage7()
// {
//         var img = document.getElementById("section4-img-4");
//         var img2 = document.createElement("img4");
//         img2.src = "media/poke-sale4.png";
//         if(amount_in_wallet >= 999 && poke_sale_4){
//                 poke_sale_4 = false;
//                 amount_in_wallet = amount_in_wallet - 999;
                
//                 img.src="media/poke-sale4.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }

// return false;
// }

// function changeImage8()
// {
//         var img = document.getElementById("section4-img-5");
//         var img2 = document.createElement("img5");
//         img2.src = "media/poke-sale5.png";
//         if(amount_in_wallet >= 999 && poke_sale_5){
//                 poke_sale_5 = false;
//                 amount_in_wallet = amount_in_wallet - 999;
                
//                 img.src="media/poke-sale5.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }

// return false;
// }

// function changeImage9()
// {
// var img = document.getElementById("section4-img-6");
//         var img2 = document.createElement("img6");
//         img2.src = "media/poke-sale6.png";
//         if(amount_in_wallet >= 999 && poke_sale_6){
//                 poke_sale_6 = false;
//                 amount_in_wallet = amount_in_wallet - 999;
                
//                 img.src="media/poke-sale6.png";
//                 document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
//         }
// return false;
// }


// Pokemon Game Start

// var r = document.querySelector(":root");

// function myFunction_set(){
//         r.style.setProperty("--page2", -1)
//         r.style.setProperty("--page1", -1);
//         r.style.setProperty("--page3", 1);
// }

// function myFunction_exit(){
//         r.style.setProperty("--page2", -1)
//         r.style.setProperty("--page1", 1);
//         r.style.setProperty("--page3", -1);
// }

// function myFunction_game(){
//         r.style.setProperty("--page2", 1)
//         r.style.setProperty("--page1", -1);
//         r.style.setProperty("--page3", -1);
// }

// Pokemon Game End


// for random generator later

// var choice = Math.floor(Math.random() * 5);

// if(choice == 1){
//         img.src="media/bulbasuar-img.png";
// }
// else if( choice == 2){
//         img.src="media/char-img.png";
// }
// else if(choice == 3){
//         img.src="media/pikachu.png";
// }
// else if(choice == 4){
//         img.src="media/poke-sale1.png";
// }
// else if(choice == 0){
//         img.src="media/poke-sale4.png";
// }