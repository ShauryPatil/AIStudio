export interface Blueprint {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  description: string;
  promptText: string;
  recommendedPackages: string[];
  features: string[];
}

export interface WorkspaceFile {
  path: string;
  description: string;
  role: string;
}

export const BLUEPRINTS: Blueprint[] = [
  {
    id: "todo-list",
    name: "Daily Task Flow",
    tagline: "A sleek, keyboard-friendly task and focus manager with categories.",
    icon: "CheckSquare",
    difficulty: "Beginner",
    estimatedTime: "2-3 mins",
    description: "A highly interactive, fluid task management screen featuring smooth item transitions, category tagging, progress metrics, and standard persistent local storage to secure user workflow history.",
    promptText: "Create a fully functional task manager called 'Task Flow'. Build it as a single-screen app with categories (Work, Personal, Ideas), a progress ring indicating completion rate, filter tabs, keyboard shortcuts (Enter to add, Esc to clear), task editing, and local storage persistence.",
    recommendedPackages: ["lucide-react", "motion"],
    features: ["Local persistence", "Progress charts", "Interactive checklists", "Category filtering"]
  },
  {
    id: "focus-space",
    name: "Ambient Focus Space",
    tagline: "A serene, interactive breathing guide and Pomodoro timer.",
    icon: "Wind",
    difficulty: "Beginner",
    estimatedTime: "3-4 mins",
    description: "An elegant, eye-safe dashboard with fluid expanding circular breathing animations, ambient timer states, configurable cycle intervals, and subtle micro-interactions to foster flow.",
    promptText: "Build an elegant, interactive focus app called 'Ambient Focus'. It should feature a highly polished Pomodoro timer, a beautiful expanding circular breathing guide synced with visual expansion waves (using motion/react), toggleable custom visual presets (e.g., 'Deep Sleep', 'Productivity Boost'), and sound wave visualizers.",
    recommendedPackages: ["lucide-react", "motion"],
    features: ["Breathing expansion loops", "Visual custom timers", "Session history tracking", "Calm minimalist aesthetic"]
  },
  {
    id: "analytics-dashboard",
    name: "Visual Analytics Canvas",
    tagline: "A futuristic real-time metrics dashboard with dynamic charting.",
    icon: "BarChart3",
    difficulty: "Intermediate",
    estimatedTime: "5 mins",
    description: "A gorgeous layout rendering beautiful interactive statistics, responsive line and bar charts, custom KPI scorecards, and filtering options simulating real-world operational monitoring.",
    promptText: "Implement a modern full-width analytics dashboard called 'Metrics Canvas'. Include interactive metric cards (Revenue, Active Users, Conversions) with percentage change indicators, custom styled charts using Recharts or D3 (such as a multi-line revenue chart and a user activity bar chart), a date-range selector, and downloadable metric reports.",
    recommendedPackages: ["recharts", "lucide-react", "motion"],
    features: ["D3/Recharts data integration", "Dynamic filter controls", "Interactive tooltips", "Interactive responsive metric cards"]
  },
  {
    id: "note-synthesizer",
    name: "Smart Note Synthesizer",
    tagline: "An intuitive note organizer with tag search and Markdown preview.",
    icon: "PenTool",
    difficulty: "Intermediate",
    estimatedTime: "4-5 mins",
    description: "A powerful, clean dual-panel text editing space featuring active rich text markdown preview, responsive tag filtering, local note archiving, and word metrics calculations.",
    promptText: "Build a single-screen dual-panel Markdown editor and notebook called 'Note Synthesizer'. On the left, list notes with filtering tags and a creation button. On the right, include a live split-screen editor showing standard input and beautiful Markdown rendering using react-markdown. Include local state saving so changes are never lost, and add a search filter.",
    recommendedPackages: ["react-markdown", "lucide-react", "motion"],
    features: ["Live markdown parsing", "Dynamic tag taxonomies", "Instant word-count metric indicators", "Note backup managers"]
  }
];

export const WORKSPACE_FILES: WorkspaceFile[] = [
  {
    path: "src/App.tsx",
    description: "The primary React component. This is the heart of your client-side user interface. Customize and structure your app views directly inside this file.",
    role: "Core UI Component"
  },
  {
    path: "src/index.css",
    description: "The entry point for global styles. Here, we've loaded Inter, JetBrains Mono, and extended Tailwind variables to provide an elegant foundation.",
    role: "Theme & Global Styles"
  },
  {
    path: "package.json",
    description: "Lists all standard npm dependencies. Manage and install external libraries using AI Studio's dynamic installation tools.",
    role: "Project Dependencies"
  },
  {
    path: "metadata.json",
    description: "Defines the app's metadata like title, description, and client frame permission scopes (e.g. camera, microphone, geolocation).",
    role: "App Configuration"
  },
  {
    path: "vite.config.ts",
    description: "Configures Vite's lightning-fast compilation, path resolution, and developer server port mapping (hardcoded to standard port 3000).",
    role: "Bundler Configuration"
  }
];
