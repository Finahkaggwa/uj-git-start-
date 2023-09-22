const names = ['andre', 'sino', 'sibo', 'nurha', 'simone', 'josephine']


for (let counter = 0; counter < names.length; counter += 2) {
 	console.log( names[counter]) 
  	
}

//  
//..................................................//.......

names.forEach(function(name){
  	console.log("-->" + name)
})
