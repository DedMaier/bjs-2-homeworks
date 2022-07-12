//Задача 1

function cachingDecoratorNew(func) {
	let cache = [];
	
	function wrapper(...rest) {
		const hash = {
		  hash: rest.join(","),
		}; 
		let existResult = cache.findIndex((item)=> item.hash === rest.join(",") ); 
		if (existResult !== -1 ) { 
			console.log("Из кэша: " + cache[existResult].value); 
			return "Из кэша: " + cache[existResult].value;
		}
		hash.value = func(...rest)
		cache.push(hash)
		if (cache.length > 5) { 
		  cache.shift()  
		}
		console.log("Вычисляем: " + hash.value);
		return "Вычисляем: " + hash.value;  
	}
	return wrapper;
	}
  
  
  // Задача 2
  
  function debounceDecoratorNew(func, ms) {
  
	let timeout;
	let repeatCall = false;
  
	function wrapper(...rest) {
  
	  if (!repeatCall) {
		func.apply(this, ...rest);
		repeatCall = true;
		return;
	  }
	  clearTimeout(timeout)
	  timeout = setTimeout(() => {
		repeatCall = false
		func.apply(this, ...rest)
	  }, ms)
	}
	return wrapper;
  }
  
  
  //Задача 3
  
  function debounceDecorator2(func, ms) {
	let flag = false;
	sendMessage.count = 0;
	let timeout;
  
	function sendMessage(...rest) {
	  if (!flag) {
		clearTimeout(timeout)
		func(...rest);
		flag = true;
		sendMessage.count++;
  
		timeout = setTimeout(() => {
		  flag = false;
		} , ms);
	  }
	}
	
	return sendMessage;
  }