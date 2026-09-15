import { useState, useEffect, FormEvent } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  CheckSquare, 
  Wind, 
  BarChart3, 
  PenTool, 
  Clipboard, 
  Check, 
  ExternalLink, 
  FileText, 
  Terminal, 
  Settings, 
  Clock, 
  Sparkles, 
  Play, 
  Pause, 
  RefreshCw, 
  Sliders, 
  Eye, 
  BookOpen, 
  Heart, 
  Cpu, 
  ChevronRight,
  Code2
} from "lucide-react";
import { BLUEPRINTS, WORKSPACE_FILES, Blueprint } from "./data";

export default function App() {
  // Navigation/State Management
  const [selectedBlueprint, setSelectedBlueprint] = useState<Blueprint>(BLUEPRINTS[0]);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Interactive Mockups States
  // 1. Todo states
  const [todos, setTodos] = useState([
    { id: "1", text: "Design modern cosmic dashboard interface", completed: true },
    { id: "2", text: "Integrate dynamic timezone-aware clocks", completed: false },
    { id: "3", text: "Test custom spring-physics motion animations", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  // 2. Focus states
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathCycle, setBreathCycle] = useState<"inhale" | "exhale">("inhale");
  const [focusSeconds, setFocusSeconds] = useState(1500); // 25 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // 3. Analytics states
  const [growthFactor, setGrowthFactor] = useState(1.2);
  const [selectedMetric, setSelectedMetric] = useState<"visitors" | "revenue" | "conversions">("revenue");

  // 4. Notes states
  const [noteContent, setNoteContent] = useState("# Project Log\n\n- Active development of **custom client features**\n- Implemented *spring animations*\n- Checked all file system entry paths.");
  const [isNotePreview, setIsNotePreview] = useState(false);

  // Style Sandbox State
  const [sandboxPadding, setSandboxPadding] = useState("p-6");
  const [sandboxBorderRadius, setSandboxBorderRadius] = useState("rounded-2xl");
  const [sandboxGlow, setSandboxGlow] = useState("shadow-[0_0_20px_rgba(139,92,246,0.15)]");
  const [sandboxTextSize, setSandboxTextSize] = useState("text-base");

  // Live ticking clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Breathing simulation loop
  useEffect(() => {
    let interval: any = null;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathCycle((prev) => (prev === "inhale" ? "exhale" : "inhale"));
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  // Pomodoro timer loop
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && focusSeconds > 0) {
      interval = setInterval(() => {
        setFocusSeconds((prev) => prev - 1);
      }, 1000);
    } else if (focusSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, focusSeconds]);

  const copyPromptToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), text: newTodoText.trim(), completed: false },
    ]);
    setNewTodoText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "CheckSquare":
        return <CheckSquare className="w-5 h-5" />;
      case "Wind":
        return <Wind className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "PenTool":
        return <PenTool className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remaining.toString().padStart(2, "0")}`;
  };

  // Dynamic values for mock charts
  const getMockChartData = () => {
    const base = {
      visitors: [2400, 3100, 2900, 4200, 4800, 5100],
      revenue: [12000, 15000, 14200, 19800, 24500, 29000],
      conversions: [180, 220, 210, 340, 390, 440],
    };

    return base[selectedMetric].map((val) => Math.round(val * growthFactor));
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#070913] text-gray-100 font-sans antialiased selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Upper Status Margin (Architecturally Honest & Elegant) */}
      <header className="border-b border-gray-800/60 bg-[#070913]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand Accent */}
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/10">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                AI Studio
              </span>
              <span className="text-xs ml-1.5 font-mono px-2 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/30 text-purple-400">
                Workspace
              </span>
            </div>
          </div>

          {/* Live System Stats Block */}
          <div className="flex items-center space-x-6 text-xs font-mono text-gray-400">
            <div className="hidden md:flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
              <span className="text-gray-300">Live Server Port:</span>
              <span className="text-emerald-400 font-semibold">3000</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1.5 rounded-md border border-gray-800/50">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>UTC:</span>
              <span className="text-purple-300 font-medium">
                {currentTime.toISOString().split("T")[1].slice(0, 8)}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Primary Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-b from-gray-900/30 to-gray-950/40 p-8 sm:p-10 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            
            <div className="lg:col-span-3 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/30 text-indigo-300 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>React 19 + Tailwind v4 + Vite</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
                Your AI Studio workspace is <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">fully configured</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
                The development containers are listening and compiled successfully. Use this dashboard as an interactive sandbox to test Tailwind styling, inspect the files, or copy blueprint instructions for what to construct next.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href="https://ai.studio/build" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-purple-600/15"
                >
                  <span>Build Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button 
                  onClick={() => {
                    const el = document.getElementById("blueprints-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-semibold px-4 py-2.5 rounded-lg border border-gray-800 transition-all"
                >
                  <span>Explore App Blueprints</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-[#090d19] rounded-2xl border border-gray-800/80 p-5 space-y-4 font-mono shadow-inner">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-gray-500">runtime_diagnostic.sh</span>
              </div>
              <div className="space-y-2.5 text-xs text-gray-400">
                <p className="text-indigo-400 font-medium">~/ai-studio-workspace $ status --diagnostic</p>
                <div className="grid grid-cols-2 gap-y-1 text-[11px]">
                  <div>OS Environment:</div><div className="text-gray-300">Cloud Run Sandboxed</div>
                  <div>Node Process:</div><div className="text-gray-300">v22 LTS Engine</div>
                  <div>Webpack/HMR:</div><div className="text-amber-400 font-semibold">Disabled (Vite Cold-Load)</div>
                  <div>CSS Processor:</div><div className="text-gray-300">Tailwind Engine v4</div>
                  <div>Current Time:</div><div className="text-purple-300 font-semibold">2026-06-25 (June)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-950/60 border border-purple-900/20 text-[10px] leading-relaxed text-purple-200">
                  <span className="text-purple-400 font-bold">✨ Dev Tip:</span> Since Hot Module Replacement (HMR) is suspended to save CPU during AI iterations, use standard page reload or wait for the preview state to synchronize on saving.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Blueprints Section */}
        <section id="blueprints-section" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Select an App Blueprint
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Choose a template category below. Play with its live interactive prototype on the right, and copy the tailored instruction block to immediately begin generation.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="font-mono bg-gray-900 border border-gray-800 px-2 py-1 rounded text-purple-400">4 templates</span>
              <span>available to build</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Selector */}
            <div className="lg:col-span-5 space-y-4">
              {BLUEPRINTS.map((b) => {
                const isSelected = selectedBlueprint.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBlueprint(b);
                      setCopiedPrompt(false);
                    }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isSelected 
                        ? "border-purple-500 bg-gradient-to-r from-purple-950/20 to-indigo-950/20 shadow-lg shadow-purple-500/5" 
                        : "border-gray-800/80 hover:border-gray-700/80 bg-gray-900/10 hover:bg-gray-900/20"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-600" />
                    )}

                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl transition-all ${
                        isSelected 
                          ? "bg-purple-900/40 border border-purple-500/30 text-purple-300" 
                          : "bg-gray-900 border border-gray-800 text-gray-400"
                      }`}>
                        {getIconComponent(b.icon)}
                      </div>
                      <div className="space-y-1 pr-6">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-display font-bold text-gray-100 text-sm">
                            {b.name}
                          </h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            b.difficulty === "Beginner" 
                              ? "bg-emerald-950/40 text-emerald-400 border border-emerald-800/30" 
                              : "bg-amber-950/40 text-amber-400 border border-amber-800/30"
                          }`}>
                            {b.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {b.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-800/40 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                      <span>Est. Code Time: <span className="text-gray-300">{b.estimatedTime}</span></span>
                      <span className="flex items-center space-x-1 text-purple-400 font-semibold group">
                        <span>Interact Prototype</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>

                  </button>
                );
              })}
            </div>

            {/* Right Column: Mini Interactive Prototype Sandbox */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="flex-1 bg-gradient-to-b from-gray-900/50 to-gray-950/60 rounded-3xl border border-gray-800 p-6 flex flex-col">
                
                {/* Simulated Device Window Bar */}
                <div className="flex items-center justify-between border-b border-gray-800/80 pb-4 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/40" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                      <span className="w-3 h-3 rounded-full bg-green-500/40" />
                    </div>
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/20 border border-purple-900/30 px-2 py-0.5 rounded">
                      live_preview.app
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-[11px]">Interactive Prototype Sandbox</span>
                  </div>
                </div>

                {/* Simulated App Screen Canvas */}
                <div className="flex-1 rounded-2xl bg-[#0a0d17] border border-gray-800/60 p-5 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
                  
                  {/* Dynamic prototype contents based on selected blueprint */}
                  <AnimatePresence mode="wait">
                    
                    {selectedBlueprint.id === "todo-list" && (
                      <motion.div 
                        key="todo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4 w-full max-w-md mx-auto"
                      >
                        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                          <div className="flex items-center space-x-2">
                            <CheckSquare className="w-4 h-4 text-purple-400" />
                            <span className="font-semibold text-sm">Flow Checklist</span>
                          </div>
                          <span className="text-[10px] text-gray-500 font-mono">
                            {todos.filter(t => t.completed).length}/{todos.length} Complete
                          </span>
                        </div>

                        {/* Interactive List */}
                        <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                          {todos.map((todo) => (
                            <div 
                              key={todo.id} 
                              className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/40 border border-gray-800/40 hover:bg-gray-900/70 transition-all text-xs"
                            >
                              <label className="flex items-center space-x-2.5 cursor-pointer flex-1">
                                <input 
                                  type="checkbox" 
                                  checked={todo.completed} 
                                  onChange={() => toggleTodo(todo.id)}
                                  className="rounded border-gray-700 bg-gray-950 text-purple-600 focus:ring-purple-500/50 w-4 h-4 cursor-pointer" 
                                />
                                <span className={`transition-all ${todo.completed ? "line-through text-gray-500" : "text-gray-300"}`}>
                                  {todo.text}
                                </span>
                              </label>
                              <button 
                                onClick={() => deleteTodo(todo.id)}
                                className="text-[10px] text-red-400 hover:text-red-300 font-mono px-1"
                              >
                                Del
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Input Box */}
                        <form onSubmit={handleAddTodo} className="flex space-x-2 pt-2">
                          <input 
                            type="text" 
                            placeholder="Add standard task..." 
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                            className="flex-1 px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-800 text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                          />
                          <button 
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1.5 rounded-lg transition-all"
                          >
                            Add
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {selectedBlueprint.id === "focus-space" && (
                      <motion.div 
                        key="focus"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6 w-full max-w-sm mx-auto flex flex-col items-center"
                      >
                        {/* Timer */}
                        <div className="text-center">
                          <span className="text-3xl font-mono tracking-wider font-semibold text-gray-100">
                            {formatTimer(focusSeconds)}
                          </span>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Pomodoro Cycle</p>
                        </div>

                        {/* Dynamic Expanding Dot */}
                        <div className="relative flex items-center justify-center h-28 w-28">
                          {/* Pulsing Backing Wave */}
                          <motion.div 
                            animate={{
                              scale: isBreathing ? (breathCycle === "inhale" ? 1.6 : 0.9) : 1,
                              opacity: isBreathing ? (breathCycle === "inhale" ? 0.4 : 0.15) : 0.1
                            }}
                            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                            className="absolute inset-0 bg-indigo-500 rounded-full blur-md"
                          />
                          {/* Inner Core */}
                          <motion.div 
                            animate={{
                              scale: isBreathing ? (breathCycle === "inhale" ? 1.3 : 1) : 1
                            }}
                            transition={{ duration: 4, ease: "easeInOut" }}
                            className="h-16 w-16 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center border border-purple-400/20 cursor-pointer"
                            onClick={() => setIsBreathing(!isBreathing)}
                          >
                            <Wind className={`w-6 h-6 text-white ${isBreathing ? "animate-spin-slow" : ""}`} />
                          </motion.div>
                        </div>

                        {/* Controls */}
                        <div className="space-y-3 w-full">
                          <div className="flex justify-center space-x-3">
                            <button
                              onClick={() => setIsTimerRunning(!isTimerRunning)}
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-300 hover:text-white transition-all"
                            >
                              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                              <span>{isTimerRunning ? "Pause Clock" : "Start Clock"}</span>
                            </button>
                            <button
                              onClick={() => setIsBreathing(!isBreathing)}
                              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                                isBreathing 
                                  ? "bg-purple-950 border-purple-500 text-purple-300" 
                                  : "bg-gray-900 border-gray-800 text-gray-300 hover:text-white"
                              }`}
                            >
                              <Wind className="w-3.5 h-3.5" />
                              <span>{isBreathing ? "Stop Breath" : "Guide Breath"}</span>
                            </button>
                          </div>
                          {isBreathing && (
                            <p className="text-[11px] text-center font-mono text-purple-400 capitalize animate-pulse">
                              {breathCycle === "inhale" ? "Inhale deeply... (Expanding)" : "Exhale slowly... (Contracting)"}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {selectedBlueprint.id === "analytics-dashboard" && (
                      <motion.div 
                        key="analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4 w-full"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2">
                          <span className="font-semibold text-sm">Metrics Simulator</span>
                          
                          {/* Tabs */}
                          <div className="flex space-x-1 bg-gray-950 p-1 rounded-lg border border-gray-800">
                            {["revenue", "visitors", "conversions"].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setSelectedMetric(tab as any)}
                                className={`text-[10px] px-2 py-0.5 rounded capitalize transition-all ${
                                  selectedMetric === tab 
                                    ? "bg-purple-600 text-white" 
                                    : "text-gray-400 hover:text-white"
                                }`}
                              >
                                {tab}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Chart Render */}
                        <div className="h-28 flex items-end justify-between px-2 gap-1.5">
                          {getMockChartData().map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                              {/* Dynamic bar */}
                              <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: `${Math.min(100, (val / Math.max(...getMockChartData())) * 80 + 10)}%` }}
                                className="w-full bg-gradient-to-t from-indigo-600/80 to-purple-500/80 rounded-t border border-purple-400/10 hover:brightness-125 transition-all"
                              />
                              <span className="text-[9px] text-gray-500 font-mono">Q{idx+1}</span>
                            </div>
                          ))}
                        </div>

                        {/* Controls */}
                        <div className="pt-2 border-t border-gray-800/40 flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-500">Scaling:</span>
                            <span className="font-mono text-purple-400 font-semibold">{growthFactor.toFixed(1)}x</span>
                          </div>
                          <input 
                            type="range" 
                            min="0.5" 
                            max="2.0" 
                            step="0.1" 
                            value={growthFactor} 
                            onChange={(e) => setGrowthFactor(parseFloat(e.target.value))}
                            className="w-24 accent-purple-600 cursor-pointer"
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedBlueprint.id === "note-synthesizer" && (
                      <motion.div 
                        key="note"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4 w-full flex flex-col"
                      >
                        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                          <span className="font-semibold text-sm">Markdown Workspace</span>
                          <div className="flex bg-gray-950 rounded-lg border border-gray-800 p-0.5">
                            <button
                              onClick={() => setIsNotePreview(false)}
                              className={`text-[10px] px-2 py-1 rounded ${!isNotePreview ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}
                            >
                              Editor
                            </button>
                            <button
                              onClick={() => setIsNotePreview(true)}
                              className={`text-[10px] px-2 py-1 rounded ${isNotePreview ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}
                            >
                              Live View
                            </button>
                          </div>
                        </div>

                        <div className="min-h-[140px]">
                          {!isNotePreview ? (
                            <textarea
                              value={noteContent}
                              onChange={(e) => setNoteContent(e.target.value)}
                              className="w-full h-full min-h-[140px] bg-gray-950 border border-gray-800/60 rounded-xl p-3 text-xs text-gray-300 font-mono focus:outline-none focus:border-purple-500 resize-none"
                            />
                          ) : (
                            <div className="w-full min-h-[140px] bg-gray-900/10 border border-gray-800/60 rounded-xl p-3 text-xs text-gray-300 leading-relaxed overflow-y-auto">
                              {noteContent.split("\n").map((line, idx) => {
                                if (line.startsWith("# ")) {
                                  return <h1 key={idx} className="text-sm font-bold text-white mb-2 pb-1 border-b border-gray-800">{line.replace("# ", "")}</h1>;
                                }
                                if (line.startsWith("- ")) {
                                  return <li key={idx} className="list-disc ml-3.5 mb-1">{line.replace("- ", "")}</li>;
                                }
                                return <p key={idx} className="mb-1.5">{line}</p>;
                              })}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                          <span>Characters: <span className="text-gray-300">{noteContent.length}</span></span>
                          <span>Lines: <span className="text-gray-300">{noteContent.split("\n").length}</span></span>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </div>

              {/* Copy prompt container */}
              <div className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400">Prompt Synthesizer</span>
                  <button
                    onClick={() => copyPromptToClipboard(selectedBlueprint.promptText)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-600/10 hover:bg-purple-600/20 text-purple-300 text-xs transition-all border border-purple-500/20"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? "Copied Prompt!" : "Copy Full Prompt"}</span>
                  </button>
                </div>
                <div className="p-3 bg-gray-950 rounded-xl border border-gray-800/50">
                  <p className="text-xs text-gray-300 leading-relaxed italic line-clamp-2">
                    &quot;{selectedBlueprint.promptText}&quot;
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono mr-1">Recommended features:</span>
                  {selectedBlueprint.features.map((feat, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-medium">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Modular Playground: Interactive Styles */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sandbox Controls */}
          <div className="bg-[#090d19] rounded-3xl border border-gray-800/60 p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-purple-400">
                <Sliders className="w-5 h-5" />
                <h3 className="font-display font-bold text-gray-100 text-base">
                  Interactive Tailwind Playground
                </h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tweak dynamic UI selectors to observe compilation responses. The interactive sample card on the right compiles these settings instantaneously.
              </p>
            </div>

            <div className="my-6 space-y-4">
              {/* Padding */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Card Element Padding</span>
                  <span className="font-mono text-purple-400">{sandboxPadding}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Compact", value: "p-4" },
                    { label: "Medium", value: "p-6" },
                    { label: "Spacious", value: "p-10" }
                  ].map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setSandboxPadding(p.value)}
                      className={`text-xs py-1.5 rounded-lg border transition-all ${
                        sandboxPadding === p.value 
                          ? "bg-purple-950 border-purple-500 text-purple-300" 
                          : "bg-gray-950 border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Border Radius */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Border Sharpness</span>
                  <span className="font-mono text-purple-400">{sandboxBorderRadius}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Sharp", value: "rounded-none" },
                    { label: "Sleek", value: "rounded-xl" },
                    { label: "Ultra Round", value: "rounded-3xl" }
                  ].map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setSandboxBorderRadius(r.value)}
                      className={`text-xs py-1.5 rounded-lg border transition-all ${
                        sandboxBorderRadius === r.value 
                          ? "bg-purple-950 border-purple-500 text-purple-300" 
                          : "bg-gray-950 border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Backlight Glow Intensity */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Shadow & Backlight Intensity</span>
                  <span className="font-mono text-purple-400 text-[10px] truncate max-w-[200px]">{sandboxGlow}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Flat", value: "shadow-none" },
                    { label: "Subtle Glow", value: "shadow-[0_0_20px_rgba(139,92,246,0.15)]" },
                    { label: "Supernova", value: "shadow-[0_0_35px_rgba(139,92,246,0.45)]" }
                  ].map((g) => (
                    <button
                      key={g.value}
                      onClick={() => setSandboxGlow(g.value)}
                      className={`text-xs py-1.5 rounded-lg border transition-all ${
                        sandboxGlow === g.value 
                          ? "bg-purple-950 border-purple-500 text-purple-300" 
                          : "bg-gray-950 border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-950 rounded-xl border border-gray-800/40 text-[11px] font-mono text-gray-400">
              <span className="text-indigo-400">Compiled Classes:</span> {`bg-gray-900 border border-gray-800 ${sandboxPadding} ${sandboxBorderRadius} ${sandboxGlow}`}
            </div>
          </div>

          {/* Sandbox Rendered Output */}
          <div className="flex items-center justify-center p-6 bg-gray-900/10 border border-gray-800/40 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
            
            {/* Live custom card */}
            <div className={`w-full max-w-sm bg-gray-900 border border-gray-800/80 transition-all duration-300 bg-gradient-to-tr from-[#0b0e1a] to-[#12172a] ${sandboxPadding} ${sandboxBorderRadius} ${sandboxGlow}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-12 bg-purple-500 rounded-full" />
                  <Heart className="w-4 h-4 text-purple-400 hover:scale-125 hover:text-purple-300 transition-all cursor-pointer" />
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-sm font-display font-bold text-gray-100">
                    Cosmic Sandbox Component
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    This element translates custom state selectors into compiled CSS attributes. Notice how Tailwind adjusts layout bounds natively.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-500">Tailwind Playground</span>
                  <span className="text-purple-400">v4.0 Ready</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* Project Tour Section */}
        <section className="bg-gradient-to-r from-gray-950 to-gray-900/50 rounded-3xl border border-gray-800/50 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-indigo-400">
              <BookOpen className="w-5 h-5" />
              <h2 className="text-lg font-display font-bold text-white">
                Workspace Tour
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-2xl">
              Inspect the primary files available in your workspace root. Click on any file path to read its exact operational role and code structure tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left selector */}
            <div className="md:col-span-1 space-y-2 max-h-[250px] overflow-y-auto pr-2">
              {WORKSPACE_FILES.map((file, idx) => (
                <button
                  key={file.path}
                  onClick={() => setActiveFileIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                    activeFileIndex === idx 
                      ? "bg-indigo-950/30 border-indigo-500 text-indigo-300" 
                      : "bg-gray-900/10 border-gray-800/60 text-gray-400 hover:bg-gray-900/20"
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{file.path}</span>
                  </div>
                  <ChevronRight className="w-3 h-3 shrink-0" />
                </button>
              ))}
            </div>

            {/* Right details */}
            <div className="md:col-span-2 bg-[#090c16] rounded-2xl border border-gray-800 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-800/80 pb-2.5">
                  <span className="text-xs font-mono text-purple-400">
                    {WORKSPACE_FILES[activeFileIndex].path}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-purple-950/40 text-purple-300 border border-purple-800/30 px-2 py-0.5 rounded font-mono font-medium">
                    {WORKSPACE_FILES[activeFileIndex].role}
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {WORKSPACE_FILES[activeFileIndex].description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/50 flex items-start space-x-2 text-[11px] text-gray-400 font-mono">
                <span className="text-purple-400 font-semibold uppercase tracking-wider">Tip:</span>
                <span>Customize components locally by adding sub-components under a separate folder `/src/components` to preserve cleanliness.</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Humble Footer */}
      <footer className="border-t border-gray-800/40 py-8 text-center text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Created with Google AI Studio Build</p>
          <div className="flex space-x-4">
            <span className="hover:text-gray-300 transition-colors">Port 3000 Active</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors">Tailwind v4.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
