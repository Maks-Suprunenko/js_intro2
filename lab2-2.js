function IsIPAddress(ip) {  
  if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ip)) {  
   	alert('True');  
  }  
  else {
  alert("False")  
  } 
}  

function findRGBA(text) {  
 let regexp = /rgba\((\s*\d+\s*,){3}[\d\.]+\)/;
alert( text.match(regexp) );
}  

function findHexColor(text) {  
 let regexp = /#([a-f0-9]{6}|[a-f0-9]{3})$\b/gi;
alert( text.match(regexp) );
}  

function findTags(text, tag) {
 let regexp = /<${tag}>/gi;  // /<(.*?)>/
 alert( text.match(regexp) );
}

function findPosNum(text) {
	let regexp = /(?<![-\d])(\d*[24680]|\d\.*[24680])/gi;
	alert( text.match(regexp) );
}

function findDates(text) {
	let regexp = /(\d+\.\d+)"\sY="(\d+\.\d+)"\sZ="(\d+\.\d+)\b/;
	alert( text.match(regexp) );
}