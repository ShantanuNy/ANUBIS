require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-goerli.g.alchemy.com/v2/y4Y7sc-RQshqC72mJrj7XYjyltufS_9w",
			accounts: [
				"a7a2e5313e121e269050b45bc04b42b643c6e3c91749789b3c3d5076d0abcb31",
			],
		},
	},
};
