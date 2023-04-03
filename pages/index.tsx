import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <h1 className={cn("text-3xl font-bold underline", "text-2xl")}>
        NextJS + TailwindCSS Starter
      </h1>
    </div>
  )
}
