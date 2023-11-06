class User{
    
    constructor(name,lastName, age, location){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(user1, user2){
        if (user1.age > user2.age){
            return `L'user ${this.nome} è più grande.`
        } else if (user1.age === user2.age) {
            return `I due user hanno la stessa età`
        } else {
            return `L'user ${this.nome} è più grande.`
        }
    }
}

let persona1 = new User ("Pippo", "Goofy", "40", "Disney Castle")
let persona2 = new User ("Sora", "Keyblade", "15", "Destiny Islands")

console.log();