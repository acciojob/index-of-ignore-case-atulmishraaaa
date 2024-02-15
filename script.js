function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i=0; i<s1.length; i++){
		let str1 = s1.toLowerCase();
		let str2 = s2.toLowerCase();
		if(str2[0]===str1[i]){
			return i;
		}
	}
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
