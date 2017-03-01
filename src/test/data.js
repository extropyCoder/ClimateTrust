var DataEntry = artifacts.require("./DataEntry.sol");
var DataEntry;

function setUp() {
    dataEntry = DataEntry.deployed();
    return dataEntry;
}
