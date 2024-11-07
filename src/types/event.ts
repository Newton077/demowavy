type Contracts = 'tornado' | 'usdc' | 'usdt' | 'ofac'

export interface Event {
	id: number,
	contract: Contracts,
	address: string,
	timestamp: number,
	tx_hash: string,
	amount: number,
	chain_id: number
}
