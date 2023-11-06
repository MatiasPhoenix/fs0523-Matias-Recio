class User{
    
    constructor(name,lastName, age, location){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontoTraUser(user2){
        if (this.age > user2.age){
            return `L'user ${this.firstName} è più grande di ${user2.firstName}.`
        } else if (this.age === user2.age) {
            return `I due user hanno la stessa età`
        } else {
            return `L'user ${user2.firstName} è più grande di  ${user1.firstName}.`
        }
    }

}



let persona1 = new User ("Pippo", "Goofy", 40, "Disney Castle");
let persona2 = new User ("Sora", "Keyblade", 15, "Destiny Islands");

console.log(persona1.confrontoTraUser(persona2));