Meteor.startup(function () {
	if (Data.find().count() === 0) {
		console.log('This is happening');
		Data.insert({
			author: "Kamuela",
			text: "Wow, what a comment!"
		});
	}
});

Data = new Meteor.Collection('data');