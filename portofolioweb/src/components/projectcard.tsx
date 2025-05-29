import React from 'react'
import type { Project } from '../types'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-4 shadow-md h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h2>
        <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p><strong>Tools:</strong> {project.tools.join(', ')}</p>
        <p className="text-xs mt-1"><strong>Tanggal:</strong> {project.date}</p>
      </div>
    </div>
  )
}

export default ProjectCard
