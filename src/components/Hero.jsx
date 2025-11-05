import React, { useEffect, useRef, useState } from 'react'
import { Brain, MessageCircle, TrendingUp, Code, Zap, Terminal, Sparkles, Layout, Rocket, ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [selectedView, setSelectedView] = useState('readyMade') // 'readyMade', 'customUI', 'useSDK'

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 10,
                y: (e.clientY / window.innerHeight - 0.5) * 10
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            The fastest path from <span className="gradient-text">idea to AI agent</span>
                        </h1>
                        <p className="hero-subtitle">
                            Build intelligent, customer-facing AI agents with human-like memory, 
                            automated learning, and powerful observability. No code required.
                        </p>
                        <div className="hero-cta">
                            <div className="hero-cta-primary">
                                <span className="hero-coming-soon">Coming Soon</span>
                                <a href="#waitlist" className="btn-primary btn-large">
                                    Join Waitlist
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                            <a href="#features" className="btn-secondary btn-large">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="view-toggle-header">
                            <p className="view-toggle-label">Choose your integration:</p>
                        </div>
                        <div className="view-toggle">
                            <button 
                                className={`toggle-btn ${selectedView === 'readyMade' ? 'active' : ''}`}
                                onClick={() => setSelectedView('readyMade')}
                                aria-label="Ready Made product"
                            >
                                <Rocket size={16} />
                                <span>Ready Made</span>
                            </button>
                            <button 
                                className={`toggle-btn ${selectedView === 'customUI' ? 'active' : ''}`}
                                onClick={() => setSelectedView('customUI')}
                                aria-label="Custom UI with templates"
                            >
                                <Layout size={16} />
                                <span>Custom UI</span>
                            </button>
                            <button 
                                className={`toggle-btn ${selectedView === 'useSDK' ? 'active' : ''}`}
                                onClick={() => setSelectedView('useSDK')}
                                aria-label="Use SDK in your code"
                            >
                                <Terminal size={16} />
                                <span>Use SDK</span>
                            </button>
                        </div>
                        <p className="view-toggle-description">
                            {selectedView === 'readyMade' 
                                ? "Deploy our pre-built, production-ready AI agent out of the box"
                                : selectedView === 'customUI'
                                ? "Choose from beautiful templates and customize to match your brand"
                                : "Integrate our SDK directly into your codebase for full control"
                            }
                        </p>
                        <div 
                            className={`hero-card ${selectedView === 'useSDK' ? 'code-view' : 'agent-view'}`}
                            style={{
                                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {selectedView === 'useSDK' ? (
                                <div className="code-container">
                                    <div className="code-header">
                                        <div className="code-window-controls">
                                            <span className="control-dot red"></span>
                                            <span className="control-dot yellow"></span>
                                            <span className="control-dot green"></span>
                                        </div>
                                        <div className="code-title">integrate.js</div>
                                    </div>
                                    <div className="code-content">
                                        <div className="code-line">
                                            <span className="line-number">1</span>
                                            <span className="code-text">
                                                <span className="code-comment">// Install: npm install @liquid-ai/sdk</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">2</span>
                                            <span className="code-text">
                                                <span className="code-keyword">import</span> 
                                                <span className="code-module"> {`{ LiquidAI }`}</span> 
                                                <span className="code-keyword"> from</span> 
                                                <span className="code-string"> '@liquid-ai/sdk'</span>
                                                <span className="code-operator">;</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">3</span>
                                            <span className="code-text">
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">4</span>
                                            <span className="code-text">
                                                <span className="code-keyword">const</span> agent = 
                                                <span className="code-function"> await</span> 
                                                <span className="code-module"> LiquidAI</span>
                                                <span className="code-operator">.</span>
                                                <span className="code-function">create</span>
                                                <span className="code-operator">{"({"}</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">5</span>
                                            <span className="code-text">
                                                &nbsp;&nbsp;<span className="code-property">name</span>
                                                <span className="code-operator">:</span> 
                                                <span className="code-string"> "Sales AI"</span>
                                                <span className="code-operator">,</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">6</span>
                                            <span className="code-text">
                                                &nbsp;&nbsp;<span className="code-property">apiKey</span>
                                                <span className="code-operator">:</span> 
                                                <span className="code-string"> process.env.LIQUID_AI_KEY</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">7</span>
                                            <span className="code-text">
                                                <span className="code-operator">{"});"}</span>
                                            </span>
                                        </div>
                                        <div className="code-line comment">
                                            <span className="line-number">8</span>
                                            <span className="code-text">
                                                <span className="code-comment">// Use in your app with full control</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : selectedView === 'readyMade' ? (
                                <div className="agent-container">
                                    <div className="agent-main">
                                        <div className="agent-icon-container">
                                            <div className="agent-glow"></div>
                                            <Rocket size={72} className="agent-icon" />
                                        </div>
                                        <div className="agent-badge">
                                            <Rocket size={14} />
                                            <span>Ready Made</span>
                                        </div>
                                    </div>
                                    <div className="agent-metrics">
                                        <div className="metric-item">
                                            <div className="metric-icon">
                                                <MessageCircle size={18} />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-value">1,247</div>
                                                <div className="metric-label">Conversations</div>
                                            </div>
                                        </div>
                                        <div className="metric-divider"></div>
                                        <div className="metric-item">
                                            <div className="metric-icon">
                                                <TrendingUp size={18} />
                                            </div>
                                            <div className="metric-content">
                                                <div className="metric-value">98%</div>
                                                <div className="metric-label">Uptime</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="custom-ui-container">
                                    <div className="template-header">
                                        <h3 className="template-title">Choose Your Template</h3>
                                        <p className="template-subtitle">Customize to match your brand</p>
                                    </div>
                                    <div className="template-grid">
                                        <div className="template-card">
                                            <div className="template-preview template-preview-1"></div>
                                            <div className="template-name">Minimal</div>
                                        </div>
                                        <div className="template-card">
                                            <div className="template-preview template-preview-2"></div>
                                            <div className="template-name">Modern</div>
                                        </div>
                                        <div className="template-card">
                                            <div className="template-preview template-preview-3"></div>
                                            <div className="template-name">Classic</div>
                                        </div>
                                    </div>
                                    <div className="template-badge">
                                        <Layout size={14} />
                                        <span>Customize Colors & Styles</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
