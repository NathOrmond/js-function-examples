function composeu(unary1, unary2){ 
	return function(x){ 
		return unary2(unary1(x)); //lexically backwards
	};
}