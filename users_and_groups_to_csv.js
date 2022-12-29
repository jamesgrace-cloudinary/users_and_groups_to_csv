const cloudinary = require('cloudinary').v2;
const fs = require("fs");
const os = require("os");


cloudinary.config({
	account_id: '0123456789-0123456789',
	provisioning_api_key: 'abcdefghijklmnopqrs',
	provisioning_api_secret: 'abcdefghijklmnop',
	secure: true
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


let csvFilename = './Users by Group - ' + new Date().toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s(\d+):(\d+):(\d+)\s.*/,'$2-$1-$3T$4-$5-$6') + '.csv';

let csvContent = 'Group,User,Email' + os.EOL;

var csvResults = [];


(async function run() {

try {

	const groupsResponse = await cloudinary.provisioning.account.user_groups()

	if (groupsResponse.user_groups) {

		for (const groupsKey in groupsResponse.user_groups) {

			const usersResponse = await cloudinary.provisioning.account.user_group_users(groupsResponse.user_groups[groupsKey].id)

			if (usersResponse.users) {

				for (const usersKey in usersResponse.users) {

					csvResults.push([groupsResponse.user_groups[groupsKey].name,usersResponse.users[usersKey].name,usersResponse.users[usersKey].email]);

				} // for

			} // if

		} // for

	} // if

	console.log(csvResults);

	csvResults.forEach(function(rowArray) {

		let row = rowArray.join(",")

		csvContent += row + os.EOL;

	}) // forEach

	fs.writeFile(csvFilename, csvContent, (err) => {

		console.log(err || os.EOL + csvFilename + '  :  [ CSV File Created ]' + os.EOL);

	}) // writeFile

} // try

catch(e){

	console.log("[ ERROR ! ] : " + e);

}

})(); // async
