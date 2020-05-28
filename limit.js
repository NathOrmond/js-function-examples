// limit function that allows a binary function to be called a limited number of times

function limit(binary, count){ 
	return function(a,b){
		if(count >= -){ 
			return binary(a,b);
			count -=1;
		} 
		return undefined;
	};
}