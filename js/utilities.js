const applyInput= document.getElementById('btn-button')
applyInput.style.backgroundColor='gray';
applyInput.setAttribute("disabled","");

const applyPurchase= document.getElementById('purchase')
applyPurchase.style.backgroundColor='gray';
applyPurchase.setAttribute("disabled","");

document.getElementById('kitchen-one').addEventListener('click',function(){

  //take the price of invidual one
  const innerValueInput = document.getElementById('bowl-price');
  const innerValueString =innerValueInput.innerText;
  const innerValue = parseFloat(innerValueString)
  // console.log(innerValue.toFixed(2));


  //take input from total price
  const totalPriceInput =document.getElementById('total-price');
  const totalPriceString =totalPriceInput.innerText;
  const totalPrice = parseFloat(totalPriceString)
  
  
  //add the individual and total value

  const finalPrice = innerValue + totalPrice;
  totalPriceInput.innerText =finalPrice;
  
  //get name value
  const setTextInputId = document.getElementById('name-one');
  const setTextInput= setTextInputId.innerText;
  //set name value
  const setTableValue = document.getElementById('selected-items');
  const count = setTableValue.childElementCount;
  const p= document.createElement('p')
  p.innerText = `${count+1}.${setTextInput}`;
  setTableValue.appendChild(p);

  //total price calculate without discount
  const finalPriceWithoutDiscountInput = document.getElementById('final-price')
  const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
  const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
  const finalPriceWithoutDiscount = finalPrice;
  finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;

  if(finalPriceWithoutDiscount>0){
    const applyInput= document.getElementById('purchase')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
  }


  //discount price calculation
  if(finalPrice>=200){
    const applyInput= document.getElementById('btn-button')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
   
    //get input as SELL20
    document.getElementById('btn-button').addEventListener('click',function(){
      const getInputValueString =  document.getElementById('promo-code');
    const getInputValue = getInputValueString.value;
    getInputValueString.value="";
    
    if(getInputValue==='SELL200'){
    
      //calculate after giving 20% discount
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      const discountPrice = totalPrice*0.2;
      console.log(discountPrice.toFixed(2));
      const discountPriceTwoNumber= (discountPrice.toFixed(2))
      
      //set the value to discount 
      const discountValueInput = document.getElementById('discount')
      discountValueInput.innerText =discountPriceTwoNumber

    //set the discount value in final total
     const finalTotalWithDiscountInput = document.getElementById('final-price')
     const finalAmount = totalPrice- discountPriceTwoNumber;
     const finalAmountTwoNumber =finalAmount.toFixed(2)
     console.log(finalAmountTwoNumber);
     finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
    

    
    }
    
    
    
    })
    

  }

 
})

document.getElementById('kitchen-two').addEventListener('click',function(){
  //take the price of invidual one
   const innerValueInput = document.getElementById('knife-price');
   const innerValueString =innerValueInput.innerText;
   const innerValue = parseFloat(innerValueString)
   // console.log(innerValue.toFixed(2));
 
   //take input from total price
   const totalPriceInput =document.getElementById('total-price');
   const totalPriceString =totalPriceInput.innerText;
   const totalPrice = parseFloat(totalPriceString)
   
   
   //add the individual and total value
 
   const finalPrice = innerValue + totalPrice;
   totalPriceInput.innerText =finalPrice;
   
   //get name value
  const setTextInputId = document.getElementById('name-two');
  const setTextInput= setTextInputId.innerText;
  //set name value
  const setTableValue = document.getElementById('selected-items');
  const count = setTableValue.childElementCount;
  const p= document.createElement('p')
  p.innerText = `${count+1}.${setTextInput}`;
  setTableValue.appendChild(p);

  //total price calculate without discount
  const finalPriceWithoutDiscountInput = document.getElementById('final-price')
  const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
  const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
  const finalPriceWithoutDiscount = finalPrice;
  finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;

  if(finalPriceWithoutDiscount>0){
    const applyInput= document.getElementById('purchase')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
  }


  //discount price calculation
  if(finalPrice>=200){
    const applyInput= document.getElementById('btn-button')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
   
    //get input as SELL20
    document.getElementById('btn-button').addEventListener('click',function(){
      const getInputValueString =  document.getElementById('promo-code');
    const getInputValue = getInputValueString.value;
    getInputValueString.value="";
    if(getInputValue==='SELL200'){
    
      //calculate after giving 20% discount
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      const discountPrice = totalPrice*0.2;
      console.log(discountPrice.toFixed(2));
      const discountPriceTwoNumber= (discountPrice.toFixed(2))
      
      //set the value to discount 
      const discountValueInput = document.getElementById('discount')
      discountValueInput.innerText =discountPriceTwoNumber

    //set the discount value in final total
     const finalTotalWithDiscountInput = document.getElementById('final-price')
     const finalAmount = totalPrice- discountPriceTwoNumber;
     const finalAmountTwoNumber =finalAmount.toFixed(2)
     console.log(finalAmountTwoNumber);
     finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
    

    
    }
   
    
    })


  }

 
  
 })

 document.getElementById('kitchen-three').addEventListener('click',function(){
  //take the price of invidual one
   const innerValueInput = document.getElementById('cooker-price');
   const innerValueString =innerValueInput.innerText;
   const innerValue = parseFloat(innerValueString)
   // console.log(innerValue.toFixed(2));
 
   //take input from total price
   const totalPriceInput =document.getElementById('total-price');
   const totalPriceString =totalPriceInput.innerText;
   const totalPrice = parseFloat(totalPriceString)
   
   
   //add the individual and total value
 
   const finalPrice = innerValue + totalPrice;
   totalPriceInput.innerText =finalPrice;
   
   //get name value
  const setTextInputId = document.getElementById('name-three');
  const setTextInput= setTextInputId.innerText;
  //set name value
  const setTableValue = document.getElementById('selected-items');
  const count = setTableValue.childElementCount;
  const p= document.createElement('p')
  p.innerText = `${count+1}.${setTextInput}`;
  setTableValue.appendChild(p);
  

  //total price calculate without discount
  const finalPriceWithoutDiscountInput = document.getElementById('final-price')
  const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
  const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
  const finalPriceWithoutDiscount = finalPrice;
  finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;

  if(finalPriceWithoutDiscount>0){
    const applyInput= document.getElementById('purchase')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
  }


  //discount price calculation
  if(finalPrice>=200){
    const applyInput= document.getElementById('btn-button')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
   
    //get input as SELL20
    document.getElementById('btn-button').addEventListener('click',function(){
      const getInputValueString =  document.getElementById('promo-code');
    const getInputValue = getInputValueString.value;
    getInputValueString.value="";
    if(getInputValue==='SELL200'){
    
      //calculate after giving 20% discount
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      const discountPrice = totalPrice*0.2;
      console.log(discountPrice.toFixed(2));
      const discountPriceTwoNumber= (discountPrice.toFixed(2))
      
      //set the value to discount 
      const discountValueInput = document.getElementById('discount')
      discountValueInput.innerText =discountPriceTwoNumber

    //set the discount value in final total
     const finalTotalWithDiscountInput = document.getElementById('final-price')
     const finalAmount = totalPrice- discountPriceTwoNumber;
     const finalAmountTwoNumber =finalAmount.toFixed(2)
     console.log(finalAmountTwoNumber);
     finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
    

    
    }
    
    
    })


  }
  
 })

 document.getElementById('sports-one').addEventListener('click',function(){
  //take the price of invidual one
   const innerValueInput = document.getElementById('cap-price');
   const innerValueString =innerValueInput.innerText;
   const innerValue = parseFloat(innerValueString)
   // console.log(innerValue.toFixed(2));
 
   //take input from total price
   const totalPriceInput =document.getElementById('total-price');
   const totalPriceString =totalPriceInput.innerText;
   const totalPrice = parseFloat(totalPriceString)
   
   
   //add the individual and total value
 
   const finalPrice = innerValue + totalPrice;
   totalPriceInput.innerText =finalPrice;
   
   //get name value
  const setTextInputId = document.getElementById('name-four');
  const setTextInput= setTextInputId.innerText;
  //set name value
  const setTableValue = document.getElementById('selected-items');
  const count = setTableValue.childElementCount;
  const p= document.createElement('p')
  p.innerText = `${count+1}.${setTextInput}`;
  setTableValue.appendChild(p);
  
  //total price calculate without discount
  const finalPriceWithoutDiscountInput = document.getElementById('final-price')
  const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
  const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
  const finalPriceWithoutDiscount = finalPrice;
  finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;

  if(finalPriceWithoutDiscount>0){
    const applyInput= document.getElementById('purchase')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
  }


  //discount price calculation
  if(finalPrice>=200){
    const applyInput= document.getElementById('btn-button')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
   
    //get input as SELL20
    document.getElementById('btn-button').addEventListener('click',function(){
      const getInputValueString =  document.getElementById('promo-code');
    const getInputValue = getInputValueString.value;
    getInputValueString.value="";
    if(getInputValue==='SELL200'){
    
      //calculate after giving 20% discount
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      const discountPrice = totalPrice*0.2;
      console.log(discountPrice.toFixed(2));
      const discountPriceTwoNumber= (discountPrice.toFixed(2))
      
      //set the value to discount 
      const discountValueInput = document.getElementById('discount')
      discountValueInput.innerText =discountPriceTwoNumber

    //set the discount value in final total
     const finalTotalWithDiscountInput = document.getElementById('final-price')
     const finalAmount = totalPrice- discountPriceTwoNumber;
     const finalAmountTwoNumber =finalAmount.toFixed(2)
     console.log(finalAmountTwoNumber);
     finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
    

    
    }
 
    
    })


  }
  
  })

  document.getElementById('sports-two').addEventListener('click',function(){
    //take the price of invidual one
     const innerValueInput = document.getElementById('jersey-price');
     const innerValueString =innerValueInput.innerText;
     const innerValue = parseFloat(innerValueString)
     // console.log(innerValue.toFixed(2));
   
     //take input from total price
     const totalPriceInput =document.getElementById('total-price');
     const totalPriceString =totalPriceInput.innerText;
     const totalPrice = parseFloat(totalPriceString)
     
     
     //add the individual and total value
   
     const finalPrice = innerValue + totalPrice;
     totalPriceInput.innerText =finalPrice;
     
     //get name value
    const setTextInputId = document.getElementById('name-five');
    const setTextInput= setTextInputId.innerText;
    //set name value
    const setTableValue = document.getElementById('selected-items');
    const count = setTableValue.childElementCount;
    const p= document.createElement('p')
    p.innerText = `${count+1}.${setTextInput}`;
    setTableValue.appendChild(p);
    
    //total price calculate without discount
    const finalPriceWithoutDiscountInput = document.getElementById('final-price')
    const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
    const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
    const finalPriceWithoutDiscount = finalPrice;
    finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
  
    if(finalPriceWithoutDiscount>0){
      const applyInput= document.getElementById('purchase')
      applyInput.style.backgroundColor='#E527B2';
      applyInput.style.color='white'
      applyInput.removeAttribute("disabled","");
    }
  
  
    //discount price calculation
    if(finalPrice>=200){
      const applyInput= document.getElementById('btn-button')
      applyInput.style.backgroundColor='#E527B2';
      applyInput.style.color='white'
      applyInput.removeAttribute("disabled","");
     
      //get input as SELL20
      document.getElementById('btn-button').addEventListener('click',function(){
        const getInputValueString =  document.getElementById('promo-code');
      const getInputValue = getInputValueString.value;
      getInputValueString.value="";
      if(getInputValue==='SELL200'){
      
        //calculate after giving 20% discount
        const totalPriceInput =document.getElementById('total-price');
        const totalPriceString =totalPriceInput.innerText;
        const totalPrice = parseFloat(totalPriceString)
        const discountPrice = totalPrice*0.2;
        console.log(discountPrice.toFixed(2));
        const discountPriceTwoNumber= (discountPrice.toFixed(2))
        
        //set the value to discount 
        const discountValueInput = document.getElementById('discount')
        discountValueInput.innerText =discountPriceTwoNumber
  
      //set the discount value in final total
       const finalTotalWithDiscountInput = document.getElementById('final-price')
       const finalAmount = totalPrice- discountPriceTwoNumber;
       const finalAmountTwoNumber =finalAmount.toFixed(2)
       console.log(finalAmountTwoNumber);
       finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
      
  
      
      }
      
      
      })
  
  
    }
    
    })
 
  document.getElementById('sports-three').addEventListener('click',function(){
      //take the price of invidual one
       const innerValueInput = document.getElementById('cates-price');
       const innerValueString =innerValueInput.innerText;
       const innerValue = parseFloat(innerValueString)
       // console.log(innerValue.toFixed(2));
     
       //take input from total price
       const totalPriceInput =document.getElementById('total-price');
       const totalPriceString =totalPriceInput.innerText;
       const totalPrice = parseFloat(totalPriceString)
       
       
       //add the individual and total value
     
       const finalPrice = innerValue + totalPrice;
       totalPriceInput.innerText =finalPrice;
       
       //get name value
      const setTextInputId = document.getElementById('name-six');
      const setTextInput= setTextInputId.innerText;
      //set name value
      const setTableValue = document.getElementById('selected-items');
      const count = setTableValue.childElementCount;
      const p= document.createElement('p')
      p.innerText = `${count+1}.${setTextInput}`;
      setTableValue.appendChild(p);
      
      //total price calculate without discount
      const finalPriceWithoutDiscountInput = document.getElementById('final-price')
      const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
      const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
      const finalPriceWithoutDiscount = finalPrice;
      finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
    
      if(finalPriceWithoutDiscount>0){
        const applyInput= document.getElementById('purchase')
        applyInput.style.backgroundColor='#E527B2';
        applyInput.style.color='white'
        applyInput.removeAttribute("disabled","");
      }
    
    
      //discount price calculation
      if(finalPrice>=200){
        const applyInput= document.getElementById('btn-button')
        applyInput.style.backgroundColor='#E527B2';
        applyInput.style.color='white'
        applyInput.removeAttribute("disabled","");
       
        //get input as SELL20
        document.getElementById('btn-button').addEventListener('click',function(){
          const getInputValueString =  document.getElementById('promo-code');
        const getInputValue = getInputValueString.value;
        getInputValueString.value="";
        if(getInputValue==='SELL200'){
        
          //calculate after giving 20% discount
          const totalPriceInput =document.getElementById('total-price');
          const totalPriceString =totalPriceInput.innerText;
          const totalPrice = parseFloat(totalPriceString)
          const discountPrice = totalPrice*0.2;
          console.log(discountPrice.toFixed(2));
          const discountPriceTwoNumber= (discountPrice.toFixed(2))
          
          //set the value to discount 
          const discountValueInput = document.getElementById('discount')
          discountValueInput.innerText =discountPriceTwoNumber
    
        //set the discount value in final total
         const finalTotalWithDiscountInput = document.getElementById('final-price')
         const finalAmount = totalPrice- discountPriceTwoNumber;
         const finalAmountTwoNumber =finalAmount.toFixed(2)
         console.log(finalAmountTwoNumber);
         finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
        
    
        
        }
        
        
        })
    
    
      }
      
      })



      document.getElementById('furniture-one').addEventListener('click',function(){
        //take the price of invidual one
        const innerValueInput = document.getElementById('play-price');
        const innerValueString =innerValueInput.innerText;
        const innerValue = parseFloat(innerValueString)
        // console.log(innerValue.toFixed(2));
      
        //take input from total price
        const totalPriceInput =document.getElementById('total-price');
        const totalPriceString =totalPriceInput.innerText;
        const totalPrice = parseFloat(totalPriceString)
        
        
        //add the individual and total value
      
        const finalPrice = innerValue + totalPrice;
        totalPriceInput.innerText =finalPrice;
        
        //get name value
       const setTextInputId = document.getElementById('name-seven');
       const setTextInput= setTextInputId.innerText;
       //set name value
       const setTableValue = document.getElementById('selected-items');
       const count = setTableValue.childElementCount;
       const p= document.createElement('p')
       p.innerText = `${count+1}.${setTextInput}`;
       setTableValue.appendChild(p);
       
       //total price calculate without discount
       const finalPriceWithoutDiscountInput = document.getElementById('final-price')
       const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
       const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
       const finalPriceWithoutDiscount = finalPrice;
       finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
     
       if(finalPriceWithoutDiscount>0){
         const applyInput= document.getElementById('purchase')
         applyInput.style.backgroundColor='#E527B2';
         applyInput.style.color='white'
         applyInput.removeAttribute("disabled","");
       }
     
     
       //discount price calculation
       if(finalPrice>=200){
         const applyInput= document.getElementById('btn-button')
         applyInput.style.backgroundColor='#E527B2';
         applyInput.style.color='white'
         applyInput.removeAttribute("disabled","");
        
         //get input as SELL20
         document.getElementById('btn-button').addEventListener('click',function(){
           const getInputValueString =  document.getElementById('promo-code');
         const getInputValue = getInputValueString.value;
         getInputValueString.value="";
         if(getInputValue==='SELL200'){
         
           //calculate after giving 20% discount
           const totalPriceInput =document.getElementById('total-price');
           const totalPriceString =totalPriceInput.innerText;
           const totalPrice = parseFloat(totalPriceString)
           const discountPrice = totalPrice*0.2;
           console.log(discountPrice.toFixed(2));
           const discountPriceTwoNumber= (discountPrice.toFixed(2))
           
           //set the value to discount 
           const discountValueInput = document.getElementById('discount')
           discountValueInput.innerText =discountPriceTwoNumber
     
         //set the discount value in final total
          const finalTotalWithDiscountInput = document.getElementById('final-price')
          const finalAmount = totalPrice- discountPriceTwoNumber;
          const finalAmountTwoNumber =finalAmount.toFixed(2)
          console.log(finalAmountTwoNumber);
          finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
         
         }
        
         
         })
     
     
       }
       
       })

     document.getElementById('furniture-two').addEventListener('click',function(){
      //take the price of invidual one
      const innerValueInput = document.getElementById('play-price');
      const innerValueString =innerValueInput.innerText;
      const innerValue = parseFloat(innerValueString)
      // console.log(innerValue.toFixed(2));
    
      //take input from total price
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      
      
      //add the individual and total value
    
      const finalPrice = innerValue + totalPrice;
      totalPriceInput.innerText =finalPrice;
      
      //get name value
     const setTextInputId = document.getElementById('name-eight');
     const setTextInput= setTextInputId.innerText;
     //set name value
     const setTableValue = document.getElementById('selected-items');
     const count = setTableValue.childElementCount;
     const p= document.createElement('p')
     p.innerText = `${count+1}.${setTextInput}`;
     setTableValue.appendChild(p);
     
     //total price calculate without discount
     const finalPriceWithoutDiscountInput = document.getElementById('final-price')
     const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
     const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
     const finalPriceWithoutDiscount = finalPrice;
     finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
   
     if(finalPriceWithoutDiscount>0){
       const applyInput= document.getElementById('purchase')
       applyInput.style.backgroundColor='#E527B2';
       applyInput.style.color='white'
       applyInput.removeAttribute("disabled","");
     }
   
   
     //discount price calculation
     if(finalPrice>=200){
       const applyInput= document.getElementById('btn-button')
       applyInput.style.backgroundColor='#E527B2';
       applyInput.style.color='white'
       applyInput.removeAttribute("disabled","");
      
       //get input as SELL20
       document.getElementById('btn-button').addEventListener('click',function(){
         const getInputValueString =  document.getElementById('promo-code');
       const getInputValue = getInputValueString.value;
       getInputValueString.value="";
       if(getInputValue==='SELL200'){
       
         //calculate after giving 20% discount
         const totalPriceInput =document.getElementById('total-price');
         const totalPriceString =totalPriceInput.innerText;
         const totalPrice = parseFloat(totalPriceString)
         const discountPrice = totalPrice*0.2;
         console.log(discountPrice.toFixed(2));
         const discountPriceTwoNumber= (discountPrice.toFixed(2))
         
         //set the value to discount 
         const discountValueInput = document.getElementById('discount')
         discountValueInput.innerText =discountPriceTwoNumber
   
       //set the discount value in final total
        const finalTotalWithDiscountInput = document.getElementById('final-price')
        const finalAmount = totalPrice- discountPriceTwoNumber;
        const finalAmountTwoNumber =finalAmount.toFixed(2)
        console.log(finalAmountTwoNumber);
        finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
       
   
       
       }
       
       
       })
   
   
     }
     
     })

     document.getElementById('furniture-three').addEventListener('click',function(){
      //take the price of invidual one
      const innerValueInput = document.getElementById('sofa-price');
      const innerValueString =innerValueInput.innerText;
      const innerValue = parseFloat(innerValueString)
      // console.log(innerValue.toFixed(2));
    
      //take input from total price
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      
      
      //add the individual and total value
    
      const finalPrice = innerValue + totalPrice;
      totalPriceInput.innerText =finalPrice;
      
      //get name value
     const setTextInputId = document.getElementById('name-nine');
     const setTextInput= setTextInputId.innerText;
     //set name value
     const setTableValue = document.getElementById('selected-items');
     const count = setTableValue.childElementCount;
     const p= document.createElement('p')
     p.innerText = `${count+1}.${setTextInput}`;
     setTableValue.appendChild(p);
     
     //total price calculate without discount
     const finalPriceWithoutDiscountInput = document.getElementById('final-price')
     const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
     const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
     const finalPriceWithoutDiscount = finalPrice;
     finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
   
     if(finalPriceWithoutDiscount>0){
       const applyInput= document.getElementById('purchase')
       applyInput.style.backgroundColor='#E527B2';
       applyInput.style.color='white'
       applyInput.removeAttribute("disabled","");
     }
   
   
     //discount price calculation
     if(finalPrice>=200){
       const applyInput= document.getElementById('btn-button')
       applyInput.style.backgroundColor='#E527B2';
       applyInput.style.color='white'
       applyInput.removeAttribute("disabled","");
      
       //get input as SELL20
       document.getElementById('btn-button').addEventListener('click',function(){
         const getInputValueString =  document.getElementById('promo-code');
       const getInputValue = getInputValueString.value;
       getInputValueString.value="";
       if(getInputValue==='SELL200'){
       
         //calculate after giving 20% discount
         const totalPriceInput =document.getElementById('total-price');
         const totalPriceString =totalPriceInput.innerText;
         const totalPrice = parseFloat(totalPriceString)
         const discountPrice = totalPrice*0.2;
         console.log(discountPrice.toFixed(2));
         const discountPriceTwoNumber= (discountPrice.toFixed(2))
         
         //set the value to discount 
         const discountValueInput = document.getElementById('discount')
         discountValueInput.innerText =discountPriceTwoNumber
   
       //set the discount value in final total
        const finalTotalWithDiscountInput = document.getElementById('final-price')
        const finalAmount = totalPrice- discountPriceTwoNumber;
        const finalAmountTwoNumber =finalAmount.toFixed(2)
        console.log(finalAmountTwoNumber);
        finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
       
   
       
       }
       
       
       })
   
   
     }
     
     })