// Function click event handlers
function addRemoveTicket(ticket, addTicket) {
    const ticketInput = document.getElementById(ticket + '-quantity');
    const ticketCount = parseInt(ticketInput.value)
    let ticketNewCount = ticketCount;
    if (addTicket == true) {
        ticketNewCount = ticketCount + 1;
    } else if (addTicket == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    let totalTicket = 0;
    if (ticket == 'first-class') {
        totalTicket = ticketNewCount * 150;
    } else if (ticket == 'economy') {
        totalTicket = ticketNewCount * 100;
    }
    ticketInput.value = ticketNewCount
    document.getElementById(ticket + '-total').innerText = totalTicket;
    totalCalculation()
}


// Function Calculation Total
function totalCalculation() {
    const firstClassQuantity = getInputValue('first-class-quantity')
    const economyQuantity = getInputValue('economy-quantity')
    const totalAmount = firstClassQuantity * 150 + economyQuantity * 100;
    document.getElementById('total-amount').innerText = totalAmount;

    const vat = Math.round(totalAmount * 0.1);
    document.getElementById('vat').innerText = vat;

    const grandTotal = totalAmount + vat;
    document.getElementById('grand-total').innerText = grandTotal;

}


// Function Input Value Converted into Number
function getInputValue(id) {
    const inputValue = document.getElementById(id);
    const inputNumber = parseInt(inputValue.value)
    return inputNumber;
}


// Function Book Now Button
function bookNowBtn() {
   const totalInput = document.getElementById('total-amount').innerText;
  if(totalInput > 1){
     document.getElementById('booking-form').style.display = 'none'
     document.getElementById('discover').style.display = 'none'
     document.getElementById('give-thanks').style.display =  'block'
    }else{
       alert('Please select your ticket')
   }
}