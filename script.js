// Add things
const len1 = document.getElementsByClassName("addButton").length;

for(let i=0; i<len1; i++){
    document.getElementsByClassName("addButton")[i].addEventListener("click", function(){
        let productAmount = document.getElementsByClassName("productAmount")[i];
        let updateAmount = parseInt(productAmount.value) + 1;
        productAmount.value = updateAmount;

        let price = document.getElementsByClassName("price")[i].innerText;
        if(i == 0){
            document.getElementsByClassName("price")[i].innerText = parseInt(price) + 1219;
        }
        else if(i == 1){
            document.getElementsByClassName("price")[i].innerText = parseInt(price) + 59;
        }
        totalPrice();
    });
    
}


// Remove things
const len2 = document.getElementsByClassName("rmvButton").length;

for(let i=0; i<len2; i++){
    document.getElementsByClassName("rmvButton")[i].addEventListener("click", function(){
        let productAmount = document.getElementsByClassName("productAmount")[i];
        let updateAmount = parseInt(productAmount.value) - 1;
        if(updateAmount < 0){
            return;
        }
        productAmount.value = updateAmount;

        let price = document.getElementsByClassName("price")[i].innerText;
        if(i == 0){
            document.getElementsByClassName("price")[i].innerText = parseInt(price) - 1219;
        }
        else if(i == 1){
            document.getElementsByClassName("price")[i].innerText = parseInt(price) - 59;
        }
        totalPrice();
    });

    document.getElementsByClassName("remove-item")[i].addEventListener("click", function(){
        document.getElementsByClassName("price")[i].innerText = "0";
        document.getElementsByClassName("productAmount")[i].value = "0";
        totalPrice();
    });
}

function totalPrice(){
    let sum = 0;
    const len = document.getElementsByClassName("price").length;
    for(let i=0; i<len; i++){
        let priceTotal = document.getElementsByClassName("price")[i].innerText;
        sum = sum + parseInt(priceTotal);
    }
    for(let i=0; i<len; i++){
        document.getElementsByClassName("total")[i].innerText = sum;
    }
}