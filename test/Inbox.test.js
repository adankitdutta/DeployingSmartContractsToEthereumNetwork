const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());
 
let accounts;
beforeEach(async ()=>{
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
});

describe('Inbox', ()=>{
    it('deploys a contract', ()=>{
        console.log(accounts);
    });
});



/* Mocha Testing simple example

class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car;
beforeEach(()=>{
    car=new Car();
});

describe('Car', ()=>{
    it('can park',()=>{
        assert.strictEqual(car.park(), 'stopped');
    });

    it('can drive',()=>{
        assert.strictEqual(car.drive(),'vroom');
    });
});

 */
