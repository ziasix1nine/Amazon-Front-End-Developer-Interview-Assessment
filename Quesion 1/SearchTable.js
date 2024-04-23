// Using JQuery method to get data from the input field
// $("#search").on("keyup",function(){

// 	var value = $(this).val();
// 	//console.log(value);
// 	searchTable(value);
// })


// Using JS method to get data from the input field

document.getElementById("search").addEventListener("keyup",function(e){
const inputValue = e.target.value
	searchTable(inputValue);
})

// Create a arrow function called searchTable
searchTable=(inputValue)=>{

	const Table = document.getElementById('table');

const TR = Array.from(Table.getElementsByTagName('tr'));


TR.map((item)=>{

	const td = item.getElementsByTagName('td')[1];

	if(td){
			const tdValue = td.textContent || td.innerHTML
	
			tdValue.includes(inputValue)? item.style.display=(""):item.style.display=("none")
	}


})

}


// Same thing we can do with for loop - Easy to understand the data flow

// for (let i=0;i<tr.length;i++){

// 	let td = tr[i].getElementsByTagName("td")[1];

// 	if(td){

// 		let tdValue = td.innerHTML || td.textContent

// 		tdValue.includes(value)? tr[i].style.display="" : tr[i].style.display="none";
// 		}
// }
