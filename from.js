//write a from function that produces a generator that will produce a series of values

function from(start){ 
	return function(){ 
		rv = start;
		start +=1;
		return rv;
	}
}