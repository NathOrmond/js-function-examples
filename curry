//schonfinkelisation
function curry(binary, first){ 
	return function(second){ 
		return binary(first,second);
	};
}

//ugly multiple args
function curry(func){ 
	var slice = Array.prototype.slice,
		args = slice.call(arguments, 1);
		
	return function(){ 
		return func.apply(
			null,
			args.concat(slice.call(arguments,0))
		);
	};
}

//better ... 
function curry(func, ...first){ 
	return function(...second){ 
		return func(...first, ...second);
	};
}