function play()
{    
     hideplayground('home-screen');//id ' ' 
      hideplayground('finalscsore');
      showplayground('playground'); //
      settextelementvaluebyid('current-life','5');//current-score
      settextelementvaluebyid('current-score','0');
      continuegame();
}
   
function hideplayground (elementid)
{
   const classlistofhomescreen = document.getElementById(elementid);
   classlistofhomescreen.classList.add ('hidden') ;    
}
 function showplayground (elementid)
 {
   const classlistofhomescreen =document.getElementById(elementid);
   classlistofhomescreen.classList.remove ('hidden') ;   
 }
    
   function handlekeyboardfunction (event)
   {
           const presskey = event.key;
           const expectedkey = document.getElementById('show-alphabet');
            const expectedvalue = expectedkey.innerText;
            if(presskey == 'Escape')
            {
                gameover();
            }
            if(presskey === expectedvalue)
            {
                 
                 const currenscore = document.getElementById('current-score');
               //   console.log(currenscore);
                 const  currentscoretext = currenscore.innerText;
               //   console.log(currentscoretext);
               const currentscorevalue = parseInt(currentscoretext);
               console.log(currentscorevalue);
                const  currentscorevalueincreaes =currentscorevalue+1;
                  // console.log(currentscorevalueincreaes);
                  currenscore.innerText = currentscorevalueincreaes;
               //     console.log("buttonpreesed");
             //  console.log(expectedvalue);

                 removebackgrouncolor(expectedvalue);
              
                continuegame();

            }
            else{
                    const currentlife = document.getElementById('current-life');
                     const currentlifetext = currentlife.innerText;
                      const currentlifevalue = parseInt(currentlifetext);
                      const decreasecreasecurrentlife = currentlifevalue-1;
                      currentlife.innerText =decreasecreasecurrentlife;
                      
                       if(decreasecreasecurrentlife===0)
                  {
                        gameover();
                  }
                        
                   
                  }




   }
    document.addEventListener('keyup',handlekeyboardfunction);
 function continuegame()
 {
    const showthealphabet = document.getElementById('show-alphabet');

  const value =  getrandomaplhapbet();
  showthealphabet.innerText = value;
   setthebackgroundcolor (value);
  
 }

 function getrandomaplhapbet (){
     const  alphastring = 'abcdefghijklmnopqrstuvwxyz';
     const alphabets = alphastring.split('');
     const randomnumber  = Math.random()*25;
     const index = Math.round(randomnumber);
     const alphabet =  alphabets[index];
     return alphabet;
 }

 function setthebackgroundcolor (elementid)
 { 
    const eleement = document.getElementById(elementid);
    eleement.classList.add('bg-orange-400');

 }
 
  function removebackgrouncolor(elementid)
  {
   const eleement = document.getElementById(elementid);
   eleement.classList.remove('bg-orange-400');
  }
         
    function gameover ()
    {
           hideplayground('playground');
           showplayground('finalscsore');
           const  currentscore = document.getElementById('current-score');
           const currentscoretext = currentscore.innerText;
           
            const lastscore =document.getElementById('last-score');
             lastscore.innerText = currentscoretext;

              const showthealphabet = document.getElementById('show-alphabet');
              const value = showthealphabet.innerText;
              removebackgrouncolor(value);


    }
  
    function settextelementvaluebyid (elementid,value)
    {
         const element = document.getElementById(elementid);
         element.innerText = value;
    }