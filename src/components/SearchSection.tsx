'use client'

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useMemo, useState } from "react";
import { Event } from "@/types/event";

export function SearchSection() {
	const [loading, setLoading] = useState<boolean>(true)
	const [hasResult, setHasResult] = useState<boolean>(false)
	const [address, setAddress] = useState<string | null>(null)
	const [search, setSearch] = useState<string | null>(null)
	const [tornado, setTornado] = useState<boolean>(false)
	const [usdc, setUsdc] = useState<boolean>(false)
	const [usdt, setUsdt] = useState<boolean>(false)
	const [ofac, setOfac] = useState<boolean>(false)

	const statusItems = useMemo(() => {
		const riskLevel = (usdc || usdt || ofac) ? 3 : tornado ? 2 : 1
		return [
			{ label: "Tornado Cash interaction", value: tornado ? 'YES' : 'NO' },
			{ label: "USDC blacklisted", value: usdc ? 'YES' : 'NO' },
			{ label: "USDT blacklisted", value: usdt ? 'YES' : 'NO' },
			{ label: "OFAC sanctioned", value: ofac ? 'YES' : 'NO' },
			{ label: "Risk Level", value: `LEVEL ${riskLevel}` },
		];
	}, [tornado, usdc, usdt, ofac])


	const handleSearch = async () => {
		if (!search) return alert('must provide a valid address')
		setHasResult(true)
		setLoading(true)
		setUsdt(false)
		setUsdc(false)
		setTornado(false)
		setOfac(false)

		// validate address	
		setAddress(search)

		// query address status in db
		const raw = await fetch(`/api/events?address=${search}`)
		const res: { success: boolean, data: Event[] } = await raw.json()
		console.log({ res })

		const hasUsdt = res.data.find(e => e.contract === 'usdt')
		const hasUsdc = res.data.find(e => e.contract === 'usdc')
		const hasTornado = res.data.find(e => e.contract === 'tornado')
		const hasOfac = res.data.find(e => e.contract === 'ofac')

		if (hasUsdt) setUsdt(true)
		if (hasUsdc) setUsdc(true)
		if (hasTornado) setTornado(true)
		if (hasOfac) setOfac(true)
		setLoading(false)
	}

	return <>
		<div className="space-y-4">
			<h1 className="text-center text-2xl font-semibold">
				Find the status of an address
			</h1>
			<div className="relative">
				<Input
					className="w-full rounded-md pl-4 pr-10"
					placeholder="Search"
					type="text"
					onInput={(e) => setSearch(e.currentTarget.value)}
				/>
				<Button onClick={handleSearch} className="absolute right-0 top-0 h-full px-3" variant="ghost">
					<Search className="h-4 w-4" />
				</Button>
			</div>
		</div>

		{
			!hasResult
				? null
				: loading
					? <p>Loading...</p>
					: <div className="space-y-4">
						<div className="text-sm text-muted-foreground">
							Status info of
							<div className="mt-1 font-mono">{address}</div>
						</div>

						<Card className="overflow-hidden">
							<div className="grid divide-y">
								{statusItems.map((item, index) => (
									<div key={index} className="grid grid-cols-2 p-4">
										<span>{item.label}</span>
										<span className="text-right font-medium">{item.value}</span>
									</div>
								))}
							</div>
						</Card>

						<Button className="w-full" variant="default">
							Generate Investigation
						</Button>
					</div>
		}

	</>
}
