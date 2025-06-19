interface ExtensionCardProps {
  id: number
  title: string
  description: string
  logoName: string
  isToggle: boolean
  onToggle: (id: number) => void
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({
  id,
  title,
  description,
  logoName,
  isToggle,
  onToggle,
}) => {
  return (
    <div className="bg-custom-background rounded-xl p-6 border border-custom-border hover:border-custom-borderHover transition-colors shadow-md flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-custom-cardHeader flex items-center justify-center overflow-hidden">
          <img
            src={`/assets/${logoName}`}
            alt={title}
            className="w-15 h-15 object-contain"
          />
        </div>
        <h3 className="text-base font-semibold text-white truncate">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-custom-textMuted text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <button className="bg-custom-tab text-custom-textMuted hover:text-white text-sm font-medium px-4 py-1 rounded-md transition-colors">
          Remove
        </button>

        <button
          onClick={() => onToggle(id)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            isToggle ? 'bg-red-500' : 'bg-custom-toggleInactive'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isToggle ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default ExtensionCard
