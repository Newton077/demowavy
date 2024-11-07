'use client'

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useState } from "react";
import { ADDRESS_REGEX } from "@/lib/utils";

// const _address = "0x6d465d2081b799770d0ce7e755d8db01665903ffb";

export function SearchSection() {
	const [address, setAddress] = useState<string | null>(null)
	const [search, setSearch] = useState<string | null>(null)

	const statusItems = [
		{ label: "Tornado Cash interaction", value: "YES" },
		{ label: "USDC blacklisted", value: "YES" },
		{ label: "USDT blacklisted", value: "NO" },
		{ label: "OFAC sanctioned", value: "NO" },
		{ label: "Risk Level", value: "LEVEL " },
	];

	const handleSearch = () => {
		// validate address	
		if (!search || ADDRESS_REGEX.test(search)) return alert('must provide a valid address')
		setAddress(search)

		// query address status in db
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


		<div className="space-y-4">
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
	</>
}
