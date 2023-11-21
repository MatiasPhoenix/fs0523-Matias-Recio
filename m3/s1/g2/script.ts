
class NewBankAccount {
    public idProperty:string = "";
    public balanceInit:number = 0;
    public deposit:number = 0;
    public withdraw:number = 0;

    constructor(id:string, balanceInit:number) {
        this.idProperty = id;
        this.balanceInit = balanceInit;
    }

    public addMoney(amount:number):void {
        this.balanceInit += amount;
        this.deposit += amount;
    }

    public removeMoney(amount:number):void {
        this.balanceInit -= amount;
        this.withdraw += amount;
    }

}

let childBankAccount:NewBankAccount = new NewBankAccount("ChildAccount", 0);

class MotherBankAccount extends NewBankAccount {
    public idProperty:string = "MotherAccount";
    public interessiPagati:number = 0;
    addInterest(amount):number{
            let interest = amount *= 0.1;
            return interest;
        }
    sendMoneySon(amount:number):void{
        let moneyPlusInterest:number = amount+this.addInterest(amount);
        this.balanceInit -= moneyPlusInterest;
        this.withdraw += amount;
        this.interessiPagati += this.addInterest(amount);
        childBankAccount.addMoney(amount);
        console.log(this.idProperty+ " ha mandato €"+amount+" a "+childBankAccount.idProperty+" pagando "+this.interessiPagati+"% (€" +this.addInterest(amount)+") di interessi");
        
    }
}

let motherAccount = new MotherBankAccount("MotherBankAccount", 1000);
motherAccount.sendMoneySon(100);

console.log(motherAccount);
console.log(childBankAccount);
