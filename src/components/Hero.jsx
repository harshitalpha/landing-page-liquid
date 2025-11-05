import React, { useEffect, useRef, useState } from 'react'
import { Brain, MessageCircle, TrendingUp, Code, Zap } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [showCode, setShowCode] = useState(false)

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
                            The fastest path from
                            <br />
                            <span className="gradient-text">idea to AI agent</span>
                        </h1>
                        <p className="hero-subtitle">
                            Build intelligent, customer-facing AI agents with human-like memory, 
                            automated learning, and powerful observability. No code required.
                        </p>
                        <div className="hero-cta">
                            <a href="#waitlist" className="btn-primary btn-large">
                                Get Started
                            </a>
                            <a href="#features" className="btn-secondary btn-large">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="view-toggle">
                            <button 
                                className={`toggle-btn ${!showCode ? 'active' : ''}`}
                                onClick={() => setShowCode(false)}
                                aria-label="Show agent view"
                            >
                                <Brain size={16} />
                                <span>Agent</span>
                            </button>
                            <button 
                                className={`toggle-btn ${showCode ? 'active' : ''}`}
                                onClick={() => setShowCode(true)}
                                aria-label="Show code view"
                            >
                                <Code size={16} />
                                <span>Code</span>
                            </button>
                        </div>
                        <div 
                            className={`hero-card ${showCode ? 'code-view' : 'agent-view'}`}
                            style={{
                                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {showCode ? (
                                <div className="code-container">
                                    <div className="code-header">
                                        <div className="code-window-controls">
                                            <span className="control-dot red"></span>
                                            <span className="control-dot yellow"></span>
                                            <span className="control-dot green"></span>
                                        </div>
                                        <div className="code-title">agent.js</div>
                                    </div>
                                    <div className="code-content">
                                        <div className="code-line">
                                            <span className="line-number">1</span>
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
                                            <span className="line-number">2</span>
                                            <span className="code-text">
                                                &nbsp;&nbsp;<span className="code-property">name</span>
                                                <span className="code-operator">:</span> 
                                                <span className="code-string"> "Sales AI"</span>
                                                <span className="code-operator">,</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">3</span>
                                            <span className="code-text">
                                                &nbsp;&nbsp;<span className="code-property">type</span>
                                                <span className="code-operator">:</span> 
                                                <span className="code-string"> "customer-support"</span>
                                            </span>
                                        </div>
                                        <div className="code-line">
                                            <span className="line-number">4</span>
                                            <span className="code-text">
                                                <span className="code-operator">{"});"}</span>
                                            </span>
                                        </div>
                                        <div className="code-line comment">
                                            <span className="line-number">5</span>
                                            <span className="code-text">
                                                <span className="code-comment">// Ready in seconds</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="agent-container">
                                    <div className="agent-main">
                                        <div className="agent-icon-container">
                                            <div className="agent-glow"></div>
                                            <Brain size={72} className="agent-icon" />
                                        </div>
                                        <div className="agent-badge">
                                            <Zap size={14} />
                                            <span>Active Agent</span>
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
