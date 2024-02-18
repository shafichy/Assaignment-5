// function randomSeat(){
//     const seat = [A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4,G1,G2,G3,G4];


    

//     const randomNumber = Math.random()*28;
//     const index = Math.round(randomNumber);
//     const seatNumber = seat[index];
//     return seatNumber;
// }


function setBackgroundColor(elementId){
    element = document.getElementById(elementId);
    element.classList.add('bg-green-500')
}  

// function setDisabled(elementId){
//     element = document.getElementById(elementId);
//     element.disabled = true;
// }
function setInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function color(elementId){
    element = document.getElementById(elementId)
    element.classList.add('text-stone-50');
}

function hiddenElement(elementId){
    element = document.getElementById(elementId);
    element.classList.add('hidden');
}


const allSeat = document.getElementsByClassName('seat-part')
let count = 0;
let count1 = 40;
let price = 0;
let price1 =0;
let sum = 0;
for(const seat of allSeat){
    seat.addEventListener('click', function(e){
       
      
      
        if(sum < 4){
        const seatColor = e.target.innerText;
      
        setBackgroundColor(seatColor);
      
        
        color(e.target.innerText);
        
        count++;
        setInnerText('seat-Number',count);

        count1--;
        setInnerText('seat-decrease', count1);
       

      const cartContainer = document.getElementById('cart-container1');

      
     
      
      const p = document.createElement('p');
      p.innerText = e.target.innerText;
      
      cartContainer.appendChild(p);
   
      
    const cartContainer1 = document.getElementById('cart-container2')
      const p1 = document.createElement('p');
      p1.innerText = 'Economy';
  cartContainer1.appendChild(p1);

  const cartContainer2 = document.getElementById('cart-container3')
      const p2 = document.createElement('p');
      p2.innerText = '550';
      cartContainer2.appendChild(p2);



        price+=550;
        setInnerText('ticket-cost', price);
        
        price1+=550;
        setInnerText('grand-cost', price1);
        sum++;
        // if(sum === 4){
        //     return sum;
        // }
        }

        else{
            alert('You have booked already 4 seat');
        }

      


    })
}


const applyButton = document.getElementById('apply-btn');

applyButton.addEventListener('click', function(e){

if(price < 2200){
 applyButton.disabled = true;
}
else{
  const inputCupon = document.getElementById('input-field').value;

   if(price >= 2200){
   setBackgroundColor('apply-btn');
    hiddenElement('apply-btn');
    hiddenElement('input-field');
    if(inputCupon === "NEW15"){
      const discountPrice = price * 0.15;

      const discountElement = document.getElementById('discount-price1');

    const discountText = document.getElementById('discount-price2');

    const discountText1 = document.getElementById('discount-price3')

    const p = document.createElement('p');
    p.innerText = 'Discount Price';
    discountElement.appendChild(p);


    const p3 = document.createElement('p');
    p3.innerText = 'BDT'
    discountText1.appendChild(p3);

    const p1 = document.createElement('p');
    p1.innerText = discountPrice;
    discountText.appendChild(p1);

    const grandTotal = document.getElementById('grand-cost');
    grandTotal.innerText = price - discountPrice;

    
    }
    else if(inputCupon === "Couple 20")
    {
        const discountPrice = price * 0.2;

        const discountElement = document.getElementById('discount-price1');
  
      const discountText = document.getElementById('discount-price2');
  
      const discountText1 = document.getElementById('discount-price3')
  
      const p = document.createElement('p');
      p.innerText = 'Discount Price';
      discountElement.appendChild(p);
  
  
      const p3 = document.createElement('p');
      p3.innerText = 'BDT'
      discountText1.appendChild(p3);
  
      const p1 = document.createElement('p');
      p1.innerText = discountPrice;
      discountText.appendChild(p1);

      const grandTotal = document.getElementById('grand-cost');
      grandTotal.innerText = price - discountPrice;
    }
    else{
        alert("Invalid Coupone");
       }
   }
   else{
    alert("PLease booking atleast 4 seats");
   }
}
})


const nextButton = document.getElementById('next-btn');
const textInput = document.getElementById('phone')

textInput.addEventListener('input', function(){
   
    const phoneNumber = document.getElementById('phone').value;
    if(phoneNumber.length > 4 && sum > 0){
        
        nextButton.disabled = false;
    }
    else{
        nextButton.disabled = true;
    }
})