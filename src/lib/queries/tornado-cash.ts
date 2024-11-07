import { ethers } from "ethers";
import { tornadocashAbi } from "../abis/tornado-cash";

const arbitrumProvider = new ethers.providers.JsonRpcProvider("https://arbitrum-mainnet.infura.io/v3/3188b3a12dcc4c7db1790ddbaee01150");

export const hasInteractedWithTornadoCash = async (address: string) => {
	const tornadocashArbitrumAddress = "0x84443CFd09A48AF6eF360C6976C5392aC5023a1F";

	const arbitrumTornadocashSmartContractInstance = new ethers.Contract(tornadocashArbitrumAddress, tornadocashAbi, arbitrumProvider);

	let block = await arbitrumProvider.getBlock("latest");

	// const events = await arbitrumTornadocashSmartContractInstance.queryFilter("Deposit", 271852761, block.number);
	const events = await arbitrumTornadocashSmartContractInstance.queryFilter("Deposit", 250000000, block.number);

	let addressess = [];

	for (let index = 0; index < events.length; index++) {
		const txHash = events[index].transactionHash;

		const transaction = await arbitrumProvider.getTransaction(txHash);
		const sender = transaction.from;
		transaction.timestamp

		addressess.push(sender);
	}

	return addressess.includes(address)
}
