
const LuispaERC721Token = artifacts.require('LuispaERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account1 = accounts[1];
    const account2 = accounts[2];
    const account3 = accounts[3];
    const account4 = accounts[4];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await LuispaERC721Token.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account1, 1);
            await this.contract.mint(account2, 2);
            await this.contract.mint(account3, 3);
            await this.contract.mint(account4, 4);
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply({ from: account_one });
            assert.equal(totalSupply, 4);
        })

        it('should get token balance', async function () { 
            const tokenBalance = await this.contract.balanceOf(account1);
            assert.equal(tokenBalance, 1);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1");
        })

        it('should transfer token from one owner to another', async function () { 
            const initialOwner = await this.contract.ownerOf(1);
            assert.equal(initialOwner, account1);
            await this.contract.transferFrom(account1, account2, 1, { from: account1 });
            const newOwner = await this.contract.ownerOf(1);
            assert.equal(newOwner, account2);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await LuispaERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(account1, 1, { from: account2 });
            } catch (err) {
                assert.equal(err.message, "Returned error: VM Exception while processing transaction: revert Sender is not the contract owner -- Reason given: Sender is not the contract owner.");
            }
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.getOwner();
            assert.equal(owner, account_one);
        })

    });
})