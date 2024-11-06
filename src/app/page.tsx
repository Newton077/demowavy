import {Button} from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"



export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex items-center gap-2">

          <span className="text-xl font-semibold">Wavy Node</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold">Find the status of an address</h1>
          <div className="relative">
            <Input
              className="w-full rounded-md pl-4 pr-10"
              placeholder="Search"
              type="text"
            />
            <Button
              className="absolute right-0 top-0 h-full px-3"
              variant="ghost"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Status info of
            <div className="mt-1 font-mono">0x6d465d2081b799770d0ce7e755d8db01665903ffb</div>
          </div>

          <Card className="overflow-hidden">
            <div className="grid divide-y">
              <div className="grid grid-cols-2 p-4">
                <span>Tornado Cash interaction</span>
                <span className="text-right font-medium">YES</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>USDC blacklisted</span>
                <span className="text-right font-medium">YES</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>USDT blacklisted</span>
                <span className="text-right font-medium">NO</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>OFAC sanctioned</span>
                <span className="text-right font-medium">NO</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>Export involution</span>
                <span className="text-right font-medium">NO</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>Risk Level</span>
                <span className="text-right font-medium">LEVEL 1</span>
              </div>
            </div>
          </Card>

          <Button className="w-full" variant="default">
            Generate Investacion 
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          @wavynode
        </div>
      </div>
    </div>
  )
}
