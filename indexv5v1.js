var answers = ["A","B","C"],     

    tot = answers.length;
    

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1;  
     
  return score; 
}

function returnScore(){
  //alert("Your score is "+ getScore() +"/"+ tot);
  if(getScore()==1){
      document.getElementById("myresults").innerHTML = "correct ";
  }
  else{
    document.getElementById("myresults").innerHTML = "incorrect,Option "+answers[0] +" is Correct";
  }
}