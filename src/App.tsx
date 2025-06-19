import { useState } from 'react'
import ExtensionCard from './components/ExtensionCard'

interface Extension {
  id: number
  title: string
  description: string
  logoName: string
  isActive: boolean
}

const extensions: Extension[] = [
     {id: 1,
    title: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    logoName: 'logo-devlens.svg',
    isActive: true
  },
  {
    id: 2,
    title: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    logoName: 'logo-style-spy.svg',
    isActive: true
  },
  {
    id: 3,
    title: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    logoName: 'logo-speed-boost.svg',
    isActive: false
  },
  {
    id: 4,
    title: 'JSONWizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    logoName: 'logo-json-wizard.svg',
    isActive: true
  },
  {
    id: 5,
    title: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    logoName: 'logo-tab-master-pro.svg',
    isActive: true
  },
  {
    id: 6,
    title: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    logoName: 'logo-viewport-buddy.svg',
    isActive: false
  },
  {
    id: 7,
    title: 'Markup Notes',
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    logoName: 'logo-markup-notes.svg',
    isActive: true
  },
  {
    id: 8,
    title: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    logoName: 'logo-grid-guides.svg',
    isActive: false
  },
  {
    id: 9,
    title: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    logoName: 'logo-palette-picker.svg',
    isActive: true
  },
  {
    id: 10,
    title: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    logoName: 'logo-link-checker.svg',
    isActive: true
  },
  {
    id: 11,
    title: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    logoName: 'logo-dom-snapshot.svg',
    isActive: false
  },
  {
    id: 12,
    title: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    logoName: 'logo-console-plus.svg',
    isActive: true
  }
]

function App() {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

  const filteredExtensions = extensions.filter(extension => {
    if (filter === 'all') return true
    if (filter === 'active') return extension.isActive
    if (filter === 'inactive') return !extension.isActive
    return true
  })
return (
  <div className="min-h-screen bg-gradient-to-b from-[#040918] to-[#091540] text-white">
    <div className="container mx-auto px-4 py-8 max-w-6xl">

      {/* 🔵 Header */}
      <div className="flex items-center justify-between mb-10 bg-[#202B4A] px-4 py-3 rounded-xl shadow-md">
        {/* Left: Logo only */}
        <div className="flex items-center gap-2">
  <img
    src="/assets/logo.svg"
    alt="Logo"
    className="w-8 h-8"
  />
  <span className="text-white font-bold text-xl">Extensions</span>
</div>


        {/* Right: Button */}
        <button className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center hover:bg-neutral-600 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M12 18C8.69 18 6 15.31 6 12S8.69 6 12 6 18 8.69 18 12 15.31 18 12 18M20 8.69V4H15.31L12 0.69 8.69 4H4V8.69L0.69 12 4 15.31V20H8.69L12 23.31 15.31 20H20V15.31L23.31 12 20 8.69Z" />
          </svg>
        </button>
      </div>


        {/* 🔘 Filter Tabs */}
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

        {/* 🧩 Extensions Grid */}
        {filteredExtensions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-400 text-lg">No extensions found for the selected filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredExtensions.map(extension => (
              <ExtensionCard key={extension.id} extension={extension} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
