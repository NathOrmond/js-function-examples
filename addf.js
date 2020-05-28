function addf(first){ 
	return function(second){ 
		return first + second;
	};
}

addf(3)(5);