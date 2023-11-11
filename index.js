// get item text using their id name with function
function getItemTextById(id){
    const flowerName = document.getElementById(id).innerText;
    return flowerName;
}
// get the item price
function getThePriceById(id){
   const price =  document.getElementById(id).innerText;
   return parseFloat(price);
}
// create an element
function createElement(x){
    const elemnt = document.createElement(x);
    return elemnt;
}
let click = 0;
function clickHandler(id1, id2){
    const itemName = getItemTextById(id1);
    const itemPrice = getThePriceById(id2);
    const previousTotalPrice = getThePriceById('total');
    
    const itemList = document.getElementById('item-list');
    console.log(itemList)
    const newItem = createElement('li');
    newItem.innerText = itemName;
    
    if(itemList.innerText.includes(newItem.innerText) === false){
        itemList.appendChild(newItem)
        
    const newTotalPrice = previousTotalPrice + itemPrice;
    document.getElementById('total').innerText = newTotalPrice;
    
    const discountPrice = newTotalPrice * ( 30 / 100);
    const newGrandPrice = newTotalPrice - discountPrice;
    document.getElementById('discoun-total').innerText = newGrandPrice;
    }
    

}