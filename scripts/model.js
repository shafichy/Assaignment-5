function setBackgroundColor(elementId){
    element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
}  


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

function discountPrice(value){
    const discountPrice = price * value;

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


const allSeat = document.getElementsByClassName('seat-part')
let count = 0;
let count1 = 40;
let price = 0;
let price1 =0;
let sum = 0;
let cnt = 0;
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
        if(sum === 4){
            setBackgroundColor('apply-btn');
            document.getElementById('apply-btn').disabled = false;
        }
        else{
            document.getElementById('apply-btn').disabled = true;
        }
        
        }

        else{
            alert('You have booked already 4 seat');
        }
       

    })
}


const applyButton = document.getElementById('apply-btn');


applyButton.addEventListener('click', function(e){



  const inputCupon = document.getElementById('input-field').value;

   if(price >= 2200){

    hiddenElement('apply-btn');
    hiddenElement('input-field');
    if(inputCupon === "NEW15"){
        discountPrice(0.15);
    
    }
    else if(inputCupon === "Couple 20")
    {
        
        discountPrice(0.2);
   
    }
    else{
        alert("Invalid Coupone");
       }
   }
   else{
    
    alert("PLease booking atleast 4 seats");
   }

})


const nextButton = document.getElementById('next-btn');
const textInput = document.getElementById('phone')

textInput.addEventListener('input', function(){
   
    const phoneNumber = textInput.value;
    if(phoneNumber.length > 3 && sum > 0 ){

        setBackgroundColor('next-btn');
         
        nextButton.disabled = false;
    }
    else{
        nextButton.disabled = true;
    }
})












 //   const discountPrice = price * 0.15;

    //   const discountElement = document.getElementById('discount-price1');

    // const discountText = document.getElementById('discount-price2');

    // const discountText1 = document.getElementById('discount-price3')

    // const p = document.createElement('p');
    // p.innerText = 'Discount Price';
    // discountElement.appendChild(p);


    // const p3 = document.createElement('p');
    // p3.innerText = 'BDT'
    // discountText1.appendChild(p3);

    // const p1 = document.createElement('p');
    // p1.innerText = discountPrice;
    // discountText.appendChild(p1);

    // const grandTotal = document.getElementById('grand-cost');
    // grandTotal.innerText = price - discountPrice;




 //     const discountPrice = price * 0.2;

    //     const discountElement = document.getElementById('discount-price1');
  
    //   const discountText = document.getElementById('discount-price2');
  
    //   const discountText1 = document.getElementById('discount-price3')
  
    //   const p = document.createElement('p');
    //   p.innerText = 'Discount Price';
    //   discountElement.appendChild(p);
  
  
    //   const p3 = document.createElement('p');
    //   p3.innerText = 'BDT'
    //   discountText1.appendChild(p3);
  
    //   const p1 = document.createElement('p');
    //   p1.innerText = discountPrice;
    //   discountText.appendChild(p1);

    //   const grandTotal = document.getElementById('grand-cost');
    //   grandTotal.innerText = price - discountPrice;