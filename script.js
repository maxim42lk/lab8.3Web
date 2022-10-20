function calculation(){

  var year = document.getElementById('year').value;
  let leap;
   
  if (year % 400 == 0)
    leap = true;
  else if (year % 100 == 0)
    leap = false;
  else if (year % 4 == 0)
    leap = true;
  else
    leap = false;
  
  
  document.getElementById('result').value = (leap? '' : 'не') + 'високосный';

  }
  

