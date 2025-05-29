import React, { useEffect, useState } from 'react'
import ProjectCard from './components/projectcard'
import CertificateGrid from './components/certificategrid'
import Navbar from './components/navbar'
import type { Project, PortfolioData } from './types'

const App = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [certificates, setCertificates] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: PortfolioData) => {
        setProjects(data.projects)
        setCertificates(data.certificates)
      })
  }, [])

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen pb-20`}>
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Portofolio Saya</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-600"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {currentPage === 'Dashboard' ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button key={project.id} onClick={() => setSelectedProject(project)} className="text-left">
                <ProjectCard project={project} />
              </button>
            ))}
          </div>
        ) : (
          <CertificateGrid certificates={certificates} />
        )}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-xl text-red-400"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-2">{selectedProject.description}</p>
              <p className="text-sm text-gray-400">Tools: {selectedProject.tools.join(', ')}</p>
              <p className="text-xs text-gray-500">Tanggal: {selectedProject.date}</p>
            </div>
          </div>
        )}
      </div>

      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
