import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col flex-1 justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        The P.O.W.A. Project
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        An open-source modern fullstack development course.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </main>
  )
}
