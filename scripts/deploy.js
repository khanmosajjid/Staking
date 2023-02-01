// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const lp0 = "0x4882836425c45bffafb3b1784feca8dcb104ea35";
  const lp1 = "0xc9B91C25c1632038C871020b53C46ad4942f263a";
  const router = "0xd99d1c33f9fc3444f8101754abc46c52416550d1";
  const lp = "0xf1a2d97ccf2c7110d5228d69e5554d4121e92583";
  const wbnb = "0xae13d989dac2f0debff460ac112a837c89baa7cd";
  const Reward = "0xd23fb63ecdd5c68d22015e969dd20aba9681d0e3";
  const chef = "0xa6a07041bb962098089aaac16aeca431af5fefea";
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

  const StratContract = await hre.ethers.getContractFactory(
    "StrategyCommonChefLP"
  );
  const VaultContract = await hre.ethers.getContractFactory("Staking");
  const strat = await StratContract.deploy(
    lp,
    1,
    chef,
    common,
    _outputToNativeRoute,
    _outputToLp0Route,
    _outputToLp1Route
  );

  await strat.deployed();

  const stake = await VaultContract.deploy(strat.address, "Test", "TST", 0);

  await stake.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${strat.address} ${stake.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});