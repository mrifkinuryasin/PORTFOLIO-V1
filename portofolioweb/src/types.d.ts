export type Project = {
  id: number
  title: string
  description: string
  tools: string[]
  date: string
}

export type PortfolioData = {
  projects: Project[]
  certificates: string[]
}
