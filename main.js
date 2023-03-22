
//21-2-2023 
//1.numbers words//
// let value = parseInt(prompt("Enter the numbers"));

// let valuename = ["zero","one","two","three","four","five","six","seven","eigth","nine"];
// mine=[];
// let reverse=0;
// while(value>0)
// {
	// var b=value%10;
	// value(value-b)/10;
	// reverse=reverse*10+b;
	// mine.push(valuename[b]);
// }
// mine.join(" ");
// document.write(mine);
//2.odd even number seperated from the whole//
let getvalue=parseInt(prompt("enter the value:"));
 
  while(getvalue>0)
  {
	  var s=getvalue%10;
	  getvalue=(getvalue-s)/10;
	   
	  if(s%2==0)
	  { 
         console.log("It'EVEN NUMBER");
		   console.log(s);
	  }
	     else
	  {
          console.log("It's odd number");		  
		  console.log(s);
	  }
	  
  }
  //3.palindrom//
  let value = parseInt(prompt("Enter the numbers"));
         let valub=value;
			let reverse=0;
			while(value>0)
			{
				var b=value%10;
				value=(value-b)/10;
				reverse=reverse*10+b;
	        }
			
			if(reverse== valub)
			{
				 console.log("it's palindrom");
			}
			else 
			{
				 console.log("not palindrom");
			}