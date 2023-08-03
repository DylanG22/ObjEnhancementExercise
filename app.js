

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}


// compound property names

let favoriteNumber = 22

const instructor = {
    name : 'colt',
    [favoriteNumber]: 'that is my favorite'
}

// Object Methods

const instructor2 = {
    name: 'colt',
    sayHi(){
        return 'HI'},
    sayBye(){
        return this.name + 'says bye'
    }
}


function createAnimal(species,verb,noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}
