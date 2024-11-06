import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex items-center gap-2">
         
          <span className="text-xl font-semibold text-primary">Wavy Node</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold">Find the status of an address</h1>
          <div className="flex gap-2">
            <Input
              className="flex-grow rounded-md"
              placeholder="Search"
              type="text"
            />
            <Button
              className="bg-primary text-primary-foreground"
              variant="default"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Report of
            <div className="mt-1 font-mono">0x6d465d2081b799770d0ce7e755d8db01665903ffb</div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-6">
            <div className="space-y-4 text-sm">
              <p>
                Lorem ipsum ad do enim id sunt occaecat ex ea fugiat ad
                tempor Duis aute euismod esse Duis nisi cillum nostrud
                aliquip in minim ad aliqua. incididunt deserunt
                reprehenderit fugiat anim Lorem in culpa esse ut dolor
                pariatur. cillum nostrud sint non in ut in ad proident.
                Excepteur do cupidatat
              </p>
              <p>
                eiusmod ullamco exercitation id magna qui ex sit veniam.
                ipsum minim incididunt labore magna in ipsum dolor
                consequat. dolore sint ut commodo.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-primary text-primary-foreground"
              variant="default"
            >
              Export
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          @wavynode
        </div>
      </div>
    </div>
  )
}