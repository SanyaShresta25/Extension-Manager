//for understanding : 
// Renders extension cards with toggle
// Filters: all / active / inactive
// Uses useState for data + filter
// Toggle handled in parent, passed to card

import { useState } from 'react'
import ExtensionCard from './components/ExtensionCard'

interface Extension {
  id: number
  title: string
  description: string
  logoName: string
  isToggle: boolean
}

const initialExtensions: Extension[] = [
  {
    id: 1,
    title: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    logoName: 'logo-devlens.svg',
    isToggle: true
  },
  {
    id: 2,
    title: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    logoName: 'logo-style-spy.svg',
    isToggle: true
  },
  {
    id: 3,
    title: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    logoName: 'logo-speed-boost.svg',
    isToggle: false
  },
  {
    id: 4,
    title: 'JSONWizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    logoName: 'logo-json-wizard.svg',
    isToggle: true
  },
  {
    id: 5,
    title: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    logoName: 'logo-tab-master-pro.svg',
    isToggle: true
  },
  {
    id: 6,
    title: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    logoName: 'logo-viewport-buddy.svg',
    isToggle: false
  },
  {
    id: 7,
    title: 'Markup Notes',
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    logoName: 'logo-markup-notes.svg',
    isToggle: true
  },
  {
    id: 8,
    title: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    logoName: 'logo-grid-guides.svg',
    isToggle: false
  },
  {
    id: 9,
    title: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    logoName: 'logo-palette-picker.svg',
    isToggle: true
  },
  {
    id: 10,
    title: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    logoName: 'logo-link-checker.svg',
    isToggle: true
  },
  {
    id: 11,
    title: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    logoName: 'logo-dom-snapshot.svg',
    isToggle: false
  },
  {
    id: 12,
    title: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    logoName: 'logo-console-plus.svg',
    isToggle: true
  }
]

function App() {
  const [extensions, setExtensions] = useState(initialExtensions)
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

  const handleToggle = (id: number) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id ? { ...ext, isToggle: !ext.isToggle } : ext
      )
    )
  }

  const filteredExtensions = extensions.filter(ext => {
    if (filter === 'all') return true
    if (filter === 'active') return ext.isToggle
    if (filter === 'inactive') return !ext.isToggle
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 bg-custom-cardHeader px-4 py-3 rounded-xl shadow-md">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-white font-bold text-xl">Extensions</span>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Extensions List</h2>
            <div className="flex bg-neutral-800 rounded-lg p-1">
              {['all', 'active', 'inactive'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type as 'all' | 'active' | 'inactive')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === type
                      ? (type === 'all' ? 'bg-red-500 text-white' : 'bg-neutral-600 text-white')
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredExtensions.map(ext => (
            <ExtensionCard
              key={ext.id}
              id={ext.id}
              title={ext.title}
              description={ext.description}
              logoName={ext.logoName}
              isToggle={ext.isToggle}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
