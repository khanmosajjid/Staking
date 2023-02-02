
CONTRACTS.
Vault(Staking):0x8991D7E73d9A4222EfE53c44A1Fe3bc97d2D9838
Strategy:0x913Db40e132fFf7b0ec3EdA5CCD2f285830026Ba
TokenA:0xe66c93eF52F89812fDBA8908104B302Cb8514689
TokenB:0x25030f839bf2513A3Ea6a23DB43e3Ef76b014dbE
RewardToken:0xA87Fa55949d6E7597E6ebF4bC2a5e2f36cAD6E3E
LPTokenAddress:0x3B123dd81822FfBc59B5b4C4a477B4199f45222B
MasterChef:0x1E7152B9E161933F01890433B01db8B4b9302d4d
Router: 0xd99d1c33f9fc3444f8101754abc46c52416550d1 (pancake router)

STEPS:
1. Deploy Two ERC20 tokens A&B.
2. Add liquidity Between Token A and Token B.(https://pancakeswap.finance/add?chain=bscTestnet)
3. Deploy Reward Token.
4. Deploy MasterChef Contract
5. Transfer Ownership of reward token to MasterChef Contract.
6. Add LP pool for A and B pair
7. Deploy Strategy and Staking Contract.
8. Set Vault(staking contract) address in Strategy contract
9. Transfer strategy ownership to staking contract
10. Approve LP token for staking contract
11. Deposit LP token in staking contract using either (deposit or deposit all function)
12. Call harvest function of strategy after some time interval
13. Can either withdraw or withdraw all function of staking contract

FUNCTIONS

<----Staking contract----->
1) Deposit(amount) : Used to stake particular amount of LP tokens in staking contract, it calls deposit function of strategy contract internally and then strategy calls deposit function of masterchef(pancakeswap in our case)

2) DepositAll : Used to stake all LP tokens hold by particular account

3) Withdraw(amount) : Used to withdraw particular amount of staked tokens, transfer underlying LP tokens with some additional LP tokens (through auto compounding)

4) WithdrawAll : Used to withdraw all staked amount

<----Strategy---->
1) Harvest : Used to withdraw earned tokens into strategy contract and then it divides earned token into 2 partitions and swap half of reward token for A token and other half for B token, then it adds liquidity in pancakeswap internally to gain more lp tokens. In this way staking contract get more LP token which it will distribute to other users