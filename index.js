

const drivers = ['Bobby', 'Sally', 'Carol', 'Bobby'];

function findMatching(drivers, name) {
    const newDrivers = drivers.filter(person => person.toLowerCase() === name.toLowerCase()); 
    return newDrivers; 
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(el => el.toLowerCase().indexOf(name.toLowerCase()) != -1)
}

const driver = [
    {
        firstName: 'Bobby',
        homeTown: 'Fargo', 
    }, 
    {
        firstName: 'Constance', 
        homeTown: 'Detroit', 
    }, 
    {
        firstName: 'Dwayne',
        homeTown: 'Chicago',
    },
]; 

function matchName(collection, cb) {
    for (const user of collection) {
        if (cb(user)) {
            console.log(user.firstName);
        }
    }
}
