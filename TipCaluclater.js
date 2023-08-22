let billAmountInput=document.getElementById("billAmount");
let percentageTipInput=document.getElementById("percentageTip");
let tipAmountInput=document.getElementById("tipAmount");
let totalAmountInput=document.getElementById("totalAmount");
let errorMessageElement=document.getElementById("errorMessage");
let errorMessage="Please Enter a Valid Input";

function caluclateTip(){
    let billAmountInputValue=billAmountInput.value;
    let percentageTipInputValue=percentageTipInput.value;
    if (billAmountInputValue===""){
        errorMessageElement.textContent=errorMessage;
    }
    else if(percentageTipInputValue===""){
        errorMessageElement.textContent=errorMessage;
 
    }
    else{
        errorMessageElement.textContent="";
        let billAmount=parseInt(billAmountInputValue);
        let percentageTip=parseInt(percentageTipInputValue);
        
        let caluclatedTip= (percentageTip/100)* billAmount;
        let totalAmount=billAmount+caluclatedTip;
        
        tipAmountInput.value=caluclatedTip;
        totalAmountInput.value=totalAmount;
    }
}








