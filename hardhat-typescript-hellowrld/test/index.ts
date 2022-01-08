import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Welcome again, I am Bilal-Gujjar -- Hardhat World! with typescript 🎉 🚀 From Bilal-Gujjar");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Welcome again, I am Bilal-Gujjar -- Hardhat World! with typescript 🎉 🚀 From Bilal-Gujjar");
  });
});
