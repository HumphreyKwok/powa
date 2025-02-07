"use client"

import { usePathname } from "next/navigation"

import { Routes } from "@/lib/pageroutes"
import SubLink from "@/components/navigation/sublink"

export default function PageMenu({ isSheet = false }) {
  const pathname = usePathname()
  if (!pathname.startsWith("/docs")) return null

  return (
    <div className="flex flex-col gap-1 mt-5 pb-6">
      {Routes.map((item, index) => {
        if ("spacer" in item) {
          return (
            <div key={`spacer-${index}`} className="my-2 mr-3">
              <hr className="border-t border-gray-300" />
            </div>
          )
        }
        return (
          <div key={item.title + index}>
            {item.heading && (
              <h2 className="text-base font-bold mb-1">{item.heading}</h2>
            )}
            <SubLink
              {...{
                ...item,
                href: `/docs${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
