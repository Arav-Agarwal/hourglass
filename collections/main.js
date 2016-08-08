schools = new Mongo.Collection("Schools");
classes = new Mongo.Collection("Classes");
work = new Mongo.Collection("Work");

schools.schema = new SimpleSchema({
	name: {type: String},
	aliases: {type: [String]}
});

classes.schema = new SimpleSchema({
	school: {type: String},
	//icon: {type: String},
	name: {type: String, label: "Class Name"},
	hour: {type: String, optional: true},
	teacher: {type: String, optional: true},
	admin: {type: String, optional: true},
	status: {type: Boolean, defaultValue: false},
	code: {type: String, optional: true},
	privacy: {type: String},
	category: {type: String},
	moderators: {type: [String], optional: true},
	banned: {type: [String], optional: true},
	blockEdit: {type: [String], optional: true}
});

work.schema = new SimpleSchema({
	class: {type: String},
	dueDate: {type: Date},
	aliases: {type: [String]},
	submittor: {type: String},
	confirmations: {type: [String]},
	reports: {type: [String], optional: true},
	attachments: {type: [String], optional: true},
	done: {type: [String], optional: true}
});