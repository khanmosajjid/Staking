const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

let addr1
let staking,strategy;
 const lp1 = "0xe66c93eF52F89812fDBA8908104B302Cb8514689";
 const lp0 = "0x25030f839bf2513A3Ea6a23DB43e3Ef76b014dbE";
 const router = "0xd99d1c33f9fc3444f8101754abc46c52416550d1";
 const lp = "0x3B123dd81822FfBc59B5b4C4a477B4199f45222B";
 const wbnb = "0xae13d989dac2f0debff460ac112a837c89baa7cd";
 const Reward = "0xA87Fa55949d6E7597E6ebF4bC2a5e2f36cAD6E3E";
 const chef = "0x1E7152B9E161933F01890433B01db8B4b9302d4d";
 // const strategy = "0x36f1c8015fc540fa206b29e790fb660a61059c26";
 const vault = "0x8c2cb67215c054d3c9431cd85e2b9fe6d9fd0b98";

 const common = [
   vault,
   router,
   "0x2D86290D009f2ad72062d7C25aF1602c3bE18189",
   "0x2D86290D009f2ad72062d7C25aF1602c3bE18189",
   "0x2D86290D009f2ad72062d7C25aF1602c3bE18189",
   "0x0000000000000000000000000000000000000000",
 ];
 const _outputToNativeRoute = [Reward, wbnb];

 const _outputToLp0Route = [Reward, lp1, lp0];

 const _outputToLp1Route = [Reward, lp1];

describe("Initiation", () => {
  it("Snapshot EVM", async function () {
    snapshotId = await provider.send("evm_snapshot");
  });

  it("Defining Generals", async function () {
    [addr1] =
      await ethers.getSigners();
    signers = [addr1];
    CustomERC721ABI = (await ethers.getContractFactory("ExtendedERC721"))
      .interface;
  });


});

describe("Vault and Strategy deployers", () => {
  it("vault", async function () {
  const stratContract = await hre.ethers.getContractFactory(
    "StrategyCommonChefLP"
  );
  
  const strategy = await stratContract.deploy(
    lp,
    1,
    chef,
    common,
    _outputToNativeRoute,
    _outputToLp0Route,
    _outputToLp1Route
  );

  await strategy.deployed();
    

    const vault = await ethers.getContractFactory("Staking");
    staking = await vault.deploy(strategy.address, "Test", "TST", 0);
    await staking.deployed();
  });

 



 

  
});



describe("Staking", () => {
  it("Should be able to deposit L-P Token", async function () {
    const TimeNow = Math.round(new Date() / 1000);

    const newVaultAddress = await vault
      .connect(addr1)
      .callStatic.deposit(
        10000000000000
      );
  

   
  });
});