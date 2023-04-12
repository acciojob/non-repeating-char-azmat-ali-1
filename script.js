//your JS code here. If required.
	
		function secondHighest(s) {
  //Write your code here
			let Object={};
    for(let i=0;i<s.length;i++){
        if(Object[s.charAt(i)]==undefined){
            Object[s.charAt(i)]=1;
        }
        else{
            Object[s.charAt(i)]+=1;
        }
		
    }
    let j=0;
    while(j<s.length){
        if(Object[s.charAt(j)]==1){
            return s.charAt(j);
        }
        j++;
    }
    return -1;

}



		function Main() {
			var n = prompt("Enter a string");
			
			alert(secondHighest(n));
		}
		Main();