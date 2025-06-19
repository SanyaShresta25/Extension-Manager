import { useState } from 'react'

interface Extension {
  id: number
  title: string
  description: string
  logoName: string
  isActive: boolean
}

interface ExtensionCardProps {
  extension: Extension
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension }) => {
  const [isToggled, setIsToggled] = useState(extension.isActive)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div className="bg-[#181F3A] rounded-xl p-6 border border-[#2E3650] hover:border-[#3E4C75] transition-colors shadow-md flex flex-col justify-between h-full">
      
    {/* Header with Icon and Title */}
<div className="flex items-center gap-4 mb-4">
  <div className="w-12 h-12 rounded-xl bg-[#1E263F] flex items-center justify-center overflow-hidden">
    <img
  src={`/assets/${extension.logoName}`}
  alt={extension.title}
  className="w-15 h-15 object-contain"
/>


  </div>
  <h3 className="text-base font-semibold text-white truncate">
    {extension.title}
  </h3>
</div>


      {/* Description */}
      <p className="text-[#C0C8DF] text-sm mb-6 leading-relaxed">
        {extension.description}
      </p>

      {/* Footer with Remove button and Toggle */}
      <div className="flex items-center justify-between mt-auto">
        <button className="bg-[#2F3A5A] text-[#C0C8DF] hover:text-white text-sm font-medium px-4 py-1 rounded-md transition-colors">
          Remove
        </button>
        
        {/* Toggle Switch */}
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            isToggled ? 'bg-red-500' : 'bg-[#3B4862]'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isToggled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default ExtensionCard
