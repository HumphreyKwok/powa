import { notFound } from "next/navigation"

import { getDocument } from "@/lib/markdown"
import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { Typography } from "@/components/ui/typography"
import PageBreadcrumb from "@/components/navigation/pagebreadcrumb"
import PageNavigation from "@/components/navigation/pageNavigation"
import Pagination from "@/components/navigation/pagination"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export default async function Pages({ params }: PageProps) {
  const { slug = [] } = await params
  const pathName = slug.join("/")
  let res

  try {
    res = await getDocument(pathName)
  } catch (error) {
    console.log(error)
    return notFound()
  }
  if (!res) notFound()

  const { frontmatter, content, tocs } = res

  return (
    <div className="flex items-start gap-14">
      <div className="flex-[3] pt-10">
        <PageBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl -mt-2">{frontmatter.title}</h1>
          <p className="-mt-4 text-base text-muted-foreground text-[16.5px]">
            {frontmatter.description}
          </p>
          <div>{content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <PageNavigation
        tocs={tocs}
        pathName={pathName}
        title={frontmatter.title}
      />
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params
  const pathName = slug.join("/")
  let res
  try {
    res = await getDocument(pathName)
  } catch (error) {
    console.log(error)
    return null
  }

  if (!res) return null

  const { frontmatter, lastUpdated } = res

  return {
    title: `${frontmatter.title} - ${Settings.title}`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    ...(lastUpdated && {
      lastModified: new Date(lastUpdated).toISOString(),
    }),
  }
}

export function generateStaticParams() {
  return PageRoutes.filter((item) => item.href).map((item) => ({
    slug: item.href.split("/").slice(1),
  }))
}
