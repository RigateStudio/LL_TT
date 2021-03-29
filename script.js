function myFunction() {
    idArray = new Array()
    idArray [1] = "SOPHIE"
    idArray [2] = "LUCILE"
    idArray [3] = "ANTOINE"
    idArray [4] = "BOBY"
    idArray [5] = "MARTINA"
  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*5);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];      
    
  }
  