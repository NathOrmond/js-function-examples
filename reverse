function reverse(binary){ 
	return function(binary_param1, binary_param2){ 
		return binary(binary_param2, binary_param1);
	};
}

function reverse(func){ 
	return function(...args){ 
		return func(...args.reverse());
	};
}