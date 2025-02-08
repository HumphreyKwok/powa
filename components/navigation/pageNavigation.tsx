"use client"

import { Settings } from "@/lib/meta"

import { BackToTop } from "./backtotop"
import Feedback from "./feedback"
import Toc from "./toc"

type PageProps = {
  tocs: {
    level: number
    text: string
    href: string
  }[]
  pathName: string
  title: string
}

export default function PageNavigation({ tocs, pathName, title }: PageProps) {
  return (
    Settings.rightbar && (
      <div className="hidden xl:flex xl:flex-col sticky top-16 gap-3 py-8 max-w-[230px] h-[94.5vh] toc">
        {Settings.toc && <Toc tocs={tocs} />}
        {Settings.feedback && <Feedback slug={pathName} title={title} />}
        {Settings.totop && (
          <BackToTop className="mt-2 self-start text-sm text-neutral-800 dark:text-neutral-300/85" />
        )}
      </div>
    )
  )
}
