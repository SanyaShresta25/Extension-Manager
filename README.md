# 🧩 Browser Extension Manager

A sleek and modern browser extension management interface built with React and TypeScript. This project demonstrates essential React concepts including conditional rendering, list mapping, and state management.

---

## 🔗 Live Preview

* 🌐 **Live Demo**: [View it in action](https://extension-manager-blue.vercel.app/) 

---

## 📌 Project Objective
* Master **conditional rendering** with ternary operators in JSX
* Practice **list rendering** using `.map()` method
* Understand the importance of the **key prop** in React lists
* Implement **state management** with `useState` hook
* Handle **empty state** scenarios gracefully
* Create a responsive, modern UI with Tailwind CSS

---

## 📘 Key React Concepts Demonstrated

### 🔗 Parent-Child Component Relationship

**Parent Component: `App.tsx`**
- Contains the main application logic and extensions data array
- Manages filtering logic and renders multiple ExtensionCard components
- Passes data to children via props

**Child Component: `ExtensionCard.tsx`**  
- Receives extension data via props from parent
- Displays individual extension information
- Renders UI based on received props

```
App (Parent)
├── ExtensionCard (Child) - Extension 1
├── ExtensionCard (Child) - Extension 2  
├── ExtensionCard (Child) - Extension 3
└── ... more ExtensionCard children
```

**Props Flow:**
```javascript
{filteredExtensions.map(extension => (
  <ExtensionCard key={extension.id} extension={extension} />
  //             ↑ key prop        ↑ extension prop passed to child
))}
```

**Props Reception:**
```javascript
const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension }) => {
  //                                                   ↑ receiving props from parent
```

### 🔄 Conditional Rendering

Conditional rendering allows components to display different content based on state or props:

```javascript
// Empty state handling
{filteredExtensions.length === 0 ? (
  <div className="text-center py-12">
    <p className="text-neutral-400 text-lg">No extensions found for the selected filter.</p>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Extension cards */}
  </div>
)}

// Dynamic styling based on state
className={`toggle-button ${isToggled ? 'bg-red-500' : 'bg-gray-500'}`}
```

### 🗂️ List Rendering with `.map()`

The `.map()` method transforms arrays into JSX elements:

```javascript
// Rendering filter buttons
{['all', 'active', 'inactive'].map(type => (
  <button key={type} onClick={() => setFilter(type)}>
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </button>
))}

// Rendering extension cards
{filteredExtensions.map(extension => (
  <ExtensionCard key={extension.id} extension={extension} />
))}
```

### 🔑 The `key` Prop

React uses keys to efficiently update lists when data changes:

```javascript
// ✅ Good: Unique, stable keys
<ExtensionCard key={extension.id} extension={extension} />

// ❌ Avoid: Array index as key (can cause issues)
<ExtensionCard key={index} extension={extension} />
```

### 🎛️ Toggle Implementation with `isActive`

The toggle switch in ExtensionCard reflects the `isActive` value from the extension data:

```javascript
// Initialize local toggle state with extension's isActive value
const [isToggled, setIsToggled] = useState(extension.isActive)

// Toggle switch styling based on isToggled state
className={`toggle-switch ${
  isToggled ? 'bg-red-500' : 'bg-[#3B4862]'
}`}

// Toggle switch position based on isToggled state  
className={`toggle-indicator ${
  isToggled ? 'translate-x-6' : 'translate-x-1'
}`}

// Handle toggle click to update local state
const handleToggle = () => {
  setIsToggled(!isToggled)
}
```

**How it Works:**
- Each ExtensionCard receives `extension.isActive` as initial state
- Local `isToggled` state manages the current toggle position
- Toggle switch visually reflects the current state (red when active, gray when inactive)
- Click handler allows manual toggling of individual extensions

### 📊 State Management

Using `useState` to manage component state:

```javascript
// Filter state in App component
const [filter, setFilter] = useState('all')

// Toggle state in ExtensionCard component  
const [isToggled, setIsToggled] = useState(extension.isActive)
```

---

## 🛠️ Built With

* ⚛️ **React 18** with TypeScript
* 🎨 **Tailwind CSS** for styling
* 🧩 **Component-based architecture**
* 📱 **Responsive design principles**

---

## ✨ Features

* **Filter Extensions**: View all, active, or inactive extensions
* **Toggle States**: Enable/disable individual extensions
* **Remove Extensions**: Delete extensions from the list
* **Responsive Grid**: Adapts to different screen sizes
* **Empty State Handling**: Graceful message when no extensions match filter
* **Hover Effects**: Interactive UI feedback

---

## 📂 Project Structure

```
src/
├── App.tsx                 # Main application component
├── components/
│   └── ExtensionCard.tsx   # Individual extension card component
└── assets/
    ├── logo.svg            # App logo
    └── [extension-logos]   # Extension logos
```

---

## 🧠 Data Structure

Each extension object contains:

```typescript
interface Extension {
  id: number          // Unique identifier
  title: string       // Extension name
  description: string // Brief description
  logoName: string    // Logo filename
  isActive: boolean   // Current state
}
```

---

## 🚀 How It Works

1. **Data Management**: 12 mock extensions stored in an array
2. **Filtering Logic**: Filter extensions based on active/inactive state
3. **Dynamic Rendering**: Use `.map()` to create cards for each extension
4. **State Updates**: Toggle individual extension states
5. **Conditional Display**: Show appropriate content based on filter results

---

## 🧠 What I Learned

* **Parent-Child Architecture**: Understanding component hierarchy and data flow
* **Props vs State**: When to use props (received data) vs local state (component-specific data)
* **Conditional Rendering**: Using ternary operators for dynamic content
* **List Rendering**: Transforming data arrays into JSX components
* **Key Prop Importance**: Ensuring efficient React re-renders
* **State Management**: Managing both global and local component state
* **Toggle Implementation**: Visual indicators vs interactive controls
* **Data Integrity**: Keeping UI in sync with data source
* **Empty States**: Providing good UX when no data is available
* **TypeScript Integration**: Type safety in React components

---

## 🎯 Key Code Patterns

### Filtering Logic
```javascript
const filteredExtensions = extensions.filter(extension => {
  if (filter === 'all') return true
  if (filter === 'active') return extension.isActive
  if (filter === 'inactive') return !extension.isActive
  return true
})
```

### Dynamic Class Names
```javascript
className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
  filter === type
    ? (type === 'all' ? 'bg-red-500 text-white' : 'bg-neutral-600 text-white')
    : 'text-neutral-300 hover:text-white'
}`}
```

### Toggle Switch Implementation
```javascript
const [isToggled, setIsToggled] = useState(extension.isActive)

const handleToggle = () => {
  setIsToggled(!isToggled)
}
```

---

## 📚 React Concepts Covered

- ✅ Parent-Child Component Architecture
- ✅ Props Passing and Reception
- ✅ Functional Components
- ✅ Props vs State Management
- ✅ Event Handling
- ✅ Conditional Rendering
- ✅ List Rendering
- ✅ Key Prop
- ✅ useState Hook
- ✅ Data Flow Patterns
- ✅ TypeScript Integration
- ✅ Component Composition

---

## 🏃‍♂️ Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

---

## 👩‍💻 Author

🔗 [Portfolio](https://sanyashresta.netlify.app)
🐦 [@sanya\_shresta](https://twitter.com/sanya_shresta)
💻 [GitHub](https://github.com/SanyaShresta25)

---

## 📚 Reference Challenge

This project is based on:
* [Frontend Mentor - Browser Extension Manager UI](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp)

---

*Perfect for learning React fundamentals and building interactive user interfaces!*
