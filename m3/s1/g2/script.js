"use strict";
class NewBankAccount {
    constructor(id, balanceInit) {
        this.idProperty = "";
        this.balanceInit = 0;
        this.deposit = 0;
        this.withdraw = 0;
        this.idProperty = id;
        this.balanceInit = balanceInit;
    }
    addMoney(amount) {
        this.balanceInit += amount;
        this.deposit += amount;
    }
    removeMoney(amount) {
        this.balanceInit -= amount;
        this.withdraw += amount;
    }
}
let childBankAccount = new NewBankAccount("ChildAccount", 0);
class MotherBankAccount extends NewBankAccount {
    constructor() {
        super(...arguments);
        this.idProperty = "MotherAccount";
        this.interessiPagati = 0;
    }
    addInterest(amount) {
        let interest = amount *= 0.1;
        return interest;
    }
    sendMoneySon(amount) {
        let moneyPlusInterest = amount + this.addInterest(amount);
        this.balanceInit -= moneyPlusInterest;
        this.withdraw += amount;
        this.interessiPagati += this.addInterest(amount);
        childBankAccount.addMoney(amount);
        console.log(this.idProperty + " ha mandato €" + amount + " a " + childBankAccount.idProperty + " pagando " + this.interessiPagati + "% (€" + this.addInterest(amount) + ") di interessi");
    }
}
let motherAccount = new MotherBankAccount("MotherBankAccount", 1000);
motherAccount.sendMoneySon(100);
console.log(motherAccount);
console.log(childBankAccount);
