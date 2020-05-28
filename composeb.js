function composeb(f, g){ 
	return function(a,b,c){ 
		return g(f(a,b) , c);
	};
}