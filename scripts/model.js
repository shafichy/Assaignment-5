// function randomSeat(){
//     const seat = [A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4,G1,G2,G3,G4];


    

//     const randomNumber = Math.random()*28;
//     const index = Math.round(randomNumber);
//     const seatNumber = seat[index];
//     return seatNumber;
// }


function setBackgroundColor(elementId){
    element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}  

function setInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function color(elementId){
    element = document.getElementById(elementId)
    element.classList.add('text-stone-50');
}

const allSeat = document.getElementsByClassName('seat-part')
let count = 0;
let count1 = 40;
let price = 0;
let price1 =0;
for(const seat of allSeat){
    seat.addEventListener('click', function(e){
      
        
        const seatColor = e.target.innerText;
        setBackgroundColor(seatColor);

        color(e.target.innerText);
        
        count++;
        setInnerText('seat-Number',count);

        count1--;
        setInnerText('seat-decrease', count1);
       

      const cartContainer = document.getElementById('cart-container');

      const li = document.createElement('li');
     
      
      const p = document.createElement('p');
      p.innerText = e.target.innerText;
      console.log(p);
      
      const p1 = document.createElement('p');
      p1.innerText = 'Economy';
  console.log(p1);
      const p2 = document.createElement('p');
      p2.innerText = '550';

      li.appendChild(p);
      li.appendChild(p1);
      li.appendChild(p2);
       
      cartContainer.appendChild(li);

        price+=550;
        setInnerText('ticket-cost', price);
        
        price1+=550;
        setInnerText('grand-cost', price1);


       
    //    const AllSeat = randomSeat();
    //    console.log(AllSeat.innerText);

    //    setBackgroundColor(AllSeat.innerText);

    })
}