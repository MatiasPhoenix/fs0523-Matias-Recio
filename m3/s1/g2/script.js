"use strict";
class ChildAccount {
    constructor(id, balanceInit) {
        this.idProperty = "ChildAccount";
        this.balanceInit = 0;
        this.deposit = 0;
        this.withdraw = 0;
        this.idProperty = id;
        this.balanceInit = balanceInit;
    }
    addMoney(amount) {
        this.balanceInit += amount;
    }
    removeMoney(amount) {
        this.balanceInit -= amount;
    }
}
class MotherAccount extends ChildAccount {
    constructor() {
        super(...arguments);
        this.idProperty = "MotherAccount";
        this.balanceInit = 1000;
    }
    addMoney(amount) {
        return this.addMoney(amount);
    }
    sendMoneyToSon(amount) {
        ChildAccount.prototype.addMoney.call(this, amount);
        return this.removeMoney(amount);
    }
}
sendMoneyToSon(100);
console.log(MotherAccount);
console.log(ChildAccount);
