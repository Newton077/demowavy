"client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ethers } from "ethers";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <Header />
        <SearchSection />
        <StatusInfo />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-semibold">Wavy Node</span>
    </div>
  );
}

function SearchSection() {
  return (
    <div className="space-y-4">
      <h1 className="text-center text-2xl font-semibold">
        Find the status of an address
      </h1>
      <div className="relative">
        <Input
          className="w-full rounded-md pl-4 pr-10"
          placeholder="Search"
          type="text"
        />
        <Button className="absolute right-0 top-0 h-full px-3" variant="ghost">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function usd() {
  async function queryMainnetUsdtEvents() {
    //////////////////////////////////////////////////////////
    //  USDT CONTRACT INTERACTION OBJECT SETUP             ///
    //////////////////////////////////////////////////////////
    const usdtMainnetAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    let usdtAbi = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_upgradedAddress",
            type: "address",
          },
        ],
        name: "deprecate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_spender",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "deprecated",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_evilUser",
            type: "address",
          },
        ],
        name: "addBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_from",
            type: "address",
          },
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "upgradedAddress",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "",
            type: "address",
          },
        ],
        name: "balances",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "maximumFee",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_maker",
            type: "address",
          },
        ],
        name: "getBlackListStatus",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "",
            type: "address",
          },
          {
            name: "",
            type: "address",
          },
        ],
        name: "allowed",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "who",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getOwner",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "newBasisPoints",
            type: "uint256",
          },
          {
            name: "newMaxFee",
            type: "uint256",
          },
        ],
        name: "setParams",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "amount",
            type: "uint256",
          },
        ],
        name: "issue",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "amount",
            type: "uint256",
          },
        ],
        name: "redeem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
          {
            name: "_spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            name: "remaining",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "basisPointsRate",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "",
            type: "address",
          },
        ],
        name: "isBlackListed",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_clearedUser",
            type: "address",
          },
        ],
        name: "removeBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MAX_UINT",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_blackListedUser",
            type: "address",
          },
        ],
        name: "destroyBlackFunds",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            name: "_initialSupply",
            type: "uint256",
          },
          {
            name: "_name",
            type: "string",
          },
          {
            name: "_symbol",
            type: "string",
          },
          {
            name: "_decimals",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Issue",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Redeem",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "newAddress",
            type: "address",
          },
        ],
        name: "Deprecate",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "feeBasisPoints",
            type: "uint256",
          },
          {
            indexed: false,
            name: "maxFee",
            type: "uint256",
          },
        ],
        name: "Params",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "_blackListedUser",
            type: "address",
          },
          {
            indexed: false,
            name: "_balance",
            type: "uint256",
          },
        ],
        name: "DestroyedBlackFunds",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "_user",
            type: "address",
          },
        ],
        name: "AddedBlackList",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "_user",
            type: "address",
          },
        ],
        name: "RemovedBlackList",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Pause",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpause",
        type: "event",
      },
    ];

    let mainnetProvider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/408559c55ba7479b9f3adee094af9d80"
    );
    let mainnetUsdtSmartContractInstance = new ethers.Contract(
      usdtMainnetAddress,
      usdtAbi,
      mainnetProvider
    );

    //////////////////////////////////////////////////////////
    //  USDT EVENTS DATA SCRAPPING                         ///
    //////////////////////////////////////////////////////////

    console.log(" ");

    console.log("//////////////////////////////////////////////////////////");
    console.log("//  USDT EVENTS DATA SCRAPPING                         ///");
    console.log("//////////////////////////////////////////////////////////");

    console.log(" ");

    let block = await provider.getBlock("latest");
    console.log("actualBlockData");
    console.log(block);
    console.log("actualBlockNumber");
    console.log(block.number);
    console.log(" ");

    const events = await mainnetUsdtSmartContractInstance.queryFilter(
      "AddedBlackList",
      0,
      block.number
    );
    let length = events.length;
    let eventsArray = [];

    console.log("EVENT:");
    console.log(events[0].event);
    console.log(" ");

    console.log("txEvents:");
    console.log("Events length: ", events.length);
    console.log(events);

    console.log(" ");

    for (let index = 0; index < length; index++) {
      eventsArray.push(events[index].args[0]);
    }

    // console.log("EVENT:");
    // console.log(events[0].event);
    // console.log("ARGS:");
    // console.log(events[0].args);

    console.log("ADDRESS ARRAY:");
    console.log(eventsArray);

    console.log(" ");
  }

  return (
    <div style={{ paddingTop: "7rem" }}>
      <div>
        <h1>// TC, USDC & USDT ///</h1>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <button onClick={queryMainnetUsdtEvents}>mainnetUsdt</button>
      </div>
    </div>
  );
}

function StatusInfo() {
  const address = "0x6d465d2081b799770d0ce7e755d8db01665903ffb";
  const statusItems = [
    { label: "Tornado Cash interaction", value: "YES" },
    { label: "USDC blacklisted", value: "YES" },
    { label: "USDT blacklisted", value: "NO" },
    { label: "OFAC sanctioned", value: "NO" },

    { label: "Risk Level", value: "LEVEL " },
  ];

  return (
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
  );
}

function Footer() {
  return (
    <div className="text-center text-sm text-muted-foreground">@wavynode</div>
  );
}
