import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Play, RotateCcw, AlertTriangle, Monitor, Sparkles } from 'lucide-react';
import { USER_INFO, SKILLS, PROJECTS } from '../data';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'accent';
}

export default function TerminalSection() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "VJ-OS v1.4.2 [Kernel Loaded Successfully]", type: 'accent' },
    { text: "Type 'help' or click the buttons below to interact with Vijayarahavan's server console.", type: 'output' },
    { text: "", type: 'output' }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll terminal to the bottom on history updates without bouncing the page
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    const newLines: TerminalLine[] = [
      ...history,
      { text: `visitor@vj-os:~$ ${cmd}`, type: 'input' }
    ];

    switch (trimmedCmd) {
      case 'help':
        newLines.push(
          { text: "Available System Directives:", type: 'accent' },
          { text: "  about     - Output background summary & bio parameters", type: 'output' },
          { text: "  skills    - Print audited technical capabilities matrix", type: 'output' },
          { text: "  projects  - Query active repository details & metrics", type: 'output' },
          { text: "  contact   - Print secure communication paths & credentials", type: 'output' },
          { text: "  joke      - Compile and run programmer humor scripts", type: 'output' },
          { text: "  secret    - Execute restricted experimental payload", type: 'output' },
          { text: "  clear     - Purge console buffers & reset screen", type: 'output' }
        );
        break;

      case 'about':
        newLines.push(
          { text: `Audit Name: ${USER_INFO.name} (${USER_INFO.nickname})`, type: 'success' },
          { text: `Title:      ${USER_INFO.title}`, type: 'output' },
          { text: `Bio:        ${USER_INFO.bio}`, type: 'output' },
          { text: `Status:     Online - Seeking technical collaborations and engineering leadership.`, type: 'accent' }
        );
        break;

      case 'skills':
        newLines.push(
          { text: "Printing Audited Capabilities Array:", type: 'accent' }
        );
        // Stagger list
        SKILLS.forEach(skill => {
          const tier = skill.level >= 90 ? 'PRINCIPAL FOCUS' : skill.level >= 85 ? 'ADVANCED FLOW' : 'ADAPTIVE SYNC';
          newLines.push({
            text: `  ${skill.name.padEnd(28)} [ ${tier.padEnd(16)} ]   (${skill.category})`,
            type: skill.level >= 90 ? 'success' : 'output'
          });
        });
        break;

      case 'projects':
        newLines.push(
          { text: "Querying Production-Ready Projects...", type: 'accent' }
        );
        PROJECTS.forEach(p => {
          newLines.push(
            { text: `▸ [${p.title}] - ${p.subtitle}`, type: 'success' },
            { text: `  Description:  ${p.description}`, type: 'output' },
            { text: `  Technologies: ${p.technologies.join(', ')}`, type: 'output' },
            { text: `  Source Path:  ${p.githubUrl}`, type: 'accent' },
            { text: " ", type: 'output' }
          );
        });
        break;

      case 'contact':
        newLines.push(
          { text: "Deploying secure connection tunnels...", type: 'success' },
          { text: `  Email:      ${USER_INFO.email}`, type: 'output' },
          { text: `  GitHub:     ${USER_INFO.github}`, type: 'output' },
          { text: `  Portfolio:  ${USER_INFO.website}`, type: 'output' },
          { text: "Type 'mail' to send an email immediately.", type: 'accent' }
        );
        break;

      case 'joke':
        const jokes = [
          "Why do programmers wear glasses? Because they can't C#.",
          "There are 10 kinds of people in this world: Those who understand binary, and those who don't.",
          "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
          "['hip', 'hip'] (hip hip array!)",
          "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'"
        ];
        newLines.push({
          text: `[Joke Compiler]: "${jokes[Math.floor(Math.random() * jokes.length)]}"`,
          type: 'success'
        });
        break;

      case 'secret':
        newLines.push(
          { text: "⚠ EXECUTING EXPERIMENTAL RESTRICTED PAYLOAD...", type: 'error' },
          { text: "INITIALIZING MATRIX DIAGNOSTICS...", type: 'success' },
          { text: "01001100 01001111 01010110 01000101 00100000 01000011 01001111 01000100 01000101", type: 'accent' },
          { text: "System integrity: 100%. Node clusters: Synchronized. Developer energy: Unbounded.", type: 'success' },
          { text: "✨ Thank you for diving into my portfolio terminal! ✨", type: 'accent' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal("");
        return;

      case 'mail':
        window.open(`mailto:${USER_INFO.email}`);
        newLines.push({ text: "Mail client pipeline opened.", type: 'success' });
        break;

      default:
        newLines.push({
          text: `Command not found: '${trimmedCmd}'. Type 'help' for valid systems commands.`,
          type: 'error'
        });
    }

    setHistory(newLines);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandSubmit(inputVal);
    }
  };

  const handleSuggestedClick = (cmd: string) => {
    handleCommandSubmit(cmd);
  };

  return (
    <section
      id="terminal-section"
      className="relative w-full py-24 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid opacity-[0.01] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-stone-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
            <Monitor size={10} className="text-stone-500" />
            <span>Developer Workspace</span>
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-5xl tracking-tight italic text-stone-100 mb-3">
            VJ-OS Interactive Shell
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Query the virtual environment. Feel free to type raw shell commands or interact via the suggested hotkeys.
          </p>
        </div>

        {/* Terminal Container */}
        <div
          onClick={focusInput}
          className="w-full rounded-2xl border border-white/10 bg-[#121212]/90 shadow-2xl relative overflow-hidden flex flex-col group cursor-text"
        >
          {/* Subtle Retro Scanlines & Inner shadow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.5))] pointer-events-none z-10" />
          
          {/* Terminal Title Bar */}
          <div className="w-full bg-[#1c1c1c] px-4 py-3 border-b border-white/10 flex justify-between items-center select-none">
            {/* Left buttons */}
            <div className="flex space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
            </div>

            {/* Title Text */}
            <div className="flex items-center space-x-2 font-mono text-[11px] text-stone-400">
              <Terminal size={12} className="text-stone-500" />
              <span>guest@vj-os: /home/visitor/portfolio</span>
            </div>

            {/* Diagnostic system speed */}
            <div className="font-mono text-[9px] text-stone-400 border border-white/10 rounded px-1.5 py-0.5 bg-stone-900">
              SECURE LN-9
            </div>
          </div>

          {/* Terminal Terminal Logs Content */}
          <div
            ref={terminalContainerRef}
            className="h-[380px] p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 no-scrollbar relative z-20"
          >
            {history.map((line, idx) => {
              let textClass = 'text-stone-300';
              if (line.type === 'input') textClass = 'text-white font-semibold';
              else if (line.type === 'error') textClass = 'text-red-400 font-medium';
              else if (line.type === 'success') textClass = 'text-stone-200 font-semibold';
              else if (line.type === 'accent') textClass = 'text-stone-400';

              return (
                <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${textClass}`}>
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* Terminal Prompt Input Line */}
          <div className="px-6 pb-6 pt-2 flex items-center space-x-2 select-none relative z-20">
            <span className="font-mono text-xs sm:text-sm font-bold text-stone-400">visitor@vj-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-stone-200 caret-stone-300 focus:ring-0 p-0"
              placeholder="type help..."
              id="terminal-cli-input"
            />
          </div>

        </div>

        {/* Hotkeys Suggested action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 select-none">
          {[
            { label: 'System Help', cmd: 'help', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'My Background', cmd: 'about', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'Abilities Matrix', cmd: 'skills', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'Active Projects', cmd: 'projects', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'Joke Module', cmd: 'joke', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'Secure payload', cmd: 'secret', color: 'hover:border-stone-500 hover:text-stone-100' },
            { label: 'Purge console', cmd: 'clear', color: 'hover:border-stone-500 hover:text-stone-100' }
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleSuggestedClick(btn.cmd)}
              className={`px-3 py-1.5 rounded bg-stone-900 border border-white/10 text-[11px] font-mono text-stone-400 cursor-pointer transition-all duration-300 transform active:scale-95 ${btn.color}`}
              id={`terminal-quick-${btn.cmd}`}
            >
              $ {btn.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
