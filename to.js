//write a to function that takes a generator and an end value and returns a generator tht will product numbers up to that limit
function to(generator, end){
	return function(){ 
		var value = generator();
		if(value > end){ 
			return value;
		}
		return undefined;
	};
}