const findTheOldest = function(people) {
    let oldest = 0;
    for (person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        if (person.yearOfDeath - person.yearOfBirth > oldest) {
            oldest = person.yearOfDeath - person.yearOfBirth;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
