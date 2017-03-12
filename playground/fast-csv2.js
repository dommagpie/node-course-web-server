var csv = require("fast-csv");
 
var i = 0;
var objArray = [];
csv
	.fromPath("my.csv")
	.on("data", (data) => {
		var arr = data[0].split("\t");
		var obj = { "count": i, "date": arr[0], "amount": parseFloat(arr[1]), "billing_classification": arr[2], "customer_acct": arr[3] };
		objArray.push(obj);
		// console.log(objArray.length);
		// console.log(objArray);
		i++;
	})
	.on("end", () => {
		console.log("done");
	});

console.log(objArray);
