import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

_uuid4 = function(cc) {
    var rr = Math.random() * 16 | 0; 
    return (cc === 'x' ? rr : (rr & 0x3 | 0x8)).toString(16);
}

Meteor.methods({
	'genCode': function() {
        return 'xxxxxx'.replace(/[x]/g, _uuid4);
	},
  //NOT COMPLETE V
	'createClass': function(input) {
		if(Meteor.user() != null && Meteor.classes.find({status:true, admin:Meteor.userId()}).length < 5 &&
      schools.find({name:input.school}).fetch().length > 0){
			classes.schema.validate(input);
			classes.insert(input);
		}
	},
  'editProfile': function(change) {
    current = Meteor.user().profile;
    current.school = change[0];
    current.grade = change[1];
    if (schools.find({name:current.school}).fetch().length > 0 && Number.isInteger(current.grade) &&
    current.grade >= 9 && current.grade <= 12) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: current}});
      return 1;
    } else {
      return 0;
    }
  },
  'joinClass': function(change, pass) {
    found = classes.find({name: change}).fetch();
    if (Meteor.user() != null && found.length > 0 && pass === found[0].code) {
      current = Meteor.user().profile;
      current.classes.append(change);
      Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: current}});
      return 1;
    } else {
      return 0;
    }
  }
});