
class ChildAccount {
    public idProperty:string = "ChildAccount";
    public balanceInit:number = 0;
    public deposit:number = 0;
    public withdraw:number = 0;

    constructor(id:string, balanceInit:number) {
        this.idProperty = id;
        this.balanceInit = balanceInit;
    }

    public addMoney(amount:number):void {
        this.balanceInit += amount;
    }

    public removeMoney(amount:number):void {
        this.balanceInit -= amount;
    }

    
}

class MotherAccount extends ChildAccount {
    public idProperty:string = "MotherAccount";
    public balanceInit:number = 1000;

    public addMoney(amount: number): void {
        return this.addMoney(amount);
    }
    
    public sendMoneyToSon(amount: number): void {
        ChildAccount.prototype.addMoney.call(this, amount);
        
        return this.removeMoney(amount);
    }
}

MotherAccount.sendMoneyToSon(100);


console.log(MotherAccount);
console.log(ChildAccount);
