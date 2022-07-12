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
  
  function debounceDecorator2(func) {
	let isThrottled = false;
	  let timeout;
	  wrapper.count = 0;
  
	  function wrapper(...rest) {
  
		  clearTimeout(timeout);
  
		  timeout = setTimeout(() => {
			  isThrottled = false;
			  func.apply(this, rest);
			  wrapper.count++;
		  }, ms);
  
		  if (isThrottled) {
			  return;
		  };
  
		  func.apply(this, rest);
		  wrapper.count++;
		  isThrottled = true;
  
		  console.log(wrapper.count);
	  };
	  return wrapper;
  } 