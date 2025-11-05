import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './MemoryFeatures.css'

const MemoryFeatureCard = ({ feature, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`memory-feature-card ${hasIntersected ? 'scale-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="memory-feature-icon">{feature.icon}</div>
            <h3 className="memory-feature-title">{feature.title}</h3>
            <p className="memory-feature-description">{feature.description}</p>
            <ul className="memory-feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                ))}
            </ul>
        </div>
    )
}

const MemoryFeatures = () => {
    const memoryFeatures = [
        {
            icon: "🧠",
            title: "Multi-Layer Memory System",
            description: "Human-like memory architecture with Working, Episodic, Semantic, and Procedural memory layers",
            benefits: [
                "Conversation context preserved across sessions",
                "Progressive compression (full → summary → facts)",
                "Knowledge graph for structured facts",
                "Pattern learning from successful workflows"
            ]
        },
        {
            icon: "🔄",
            title: "Memory-Driven Agent Updates",
            description: "Agents automatically improve by learning from memory. Their prompts update based on successful patterns and user feedback",
            benefits: [
                "Automatic prompt optimization from memory insights",
                "Agent capabilities evolve based on usage patterns",
                "Feedback loops update agent behavior",
                "Version control for agent improvements"
            ]
        },
        {
            icon: "🔗",
            title: "Memory Sharing & Namespaces",
            description: "Share memories across namespaces or keep them isolated. Perfect for multi-tenant merchant deployments",
            benefits: [
                "Namespace-based memory isolation",
                "Selective memory sharing across projects",
                "Multi-tenant support with data separation",
                "Shared knowledge base for common patterns"
            ]
        },
        {
            icon: "📊",
            title: "Context Assembly & Retrieval",
            description: "Intelligent context assembly that only retrieves relevant memories, reducing token costs by 60-70%",
            benefits: [
                "Semantic search for relevant conversations",
                "Token-efficient context assembly",
                "Priority-based memory retrieval",
                "Smart compression based on age"
            ]
        }
    ]

    const memoryFlow = [
        {
            step: "1",
            title: "Conversation Memory",
            description: "Every customer interaction is stored in episodic memory with progressive compression",
            detail: "Recent chats: Full text → Medium chats: Summaries → Old chats: Facts only"
        },
        {
            step: "2",
            title: "Knowledge Extraction",
            description: "LLM extracts structured facts and patterns from conversations into semantic memory",
            detail: "Entities, relationships, preferences stored in knowledge graph"
        },
        {
            step: "3",
            title: "Pattern Learning",
            description: "Successful agent patterns and workflows stored in procedural memory",
            detail: "Reusable agent configurations and workflow templates"
        },
        {
            step: "4",
            title: "Agent Optimization",
            description: "Agents analyze memory insights and automatically update their prompts",
            detail: "Prompt versions improve based on success metrics and feedback"
        }
    ]

    return (
        <section className="section memory-features" id="memory-features">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Intelligent Memory System</span>
                </h2>
                <p className="section-subtitle">
                    Human-like memory architecture that learns, adapts, and continuously improves your AI agents—all automatically
                </p>

                <div className="memory-flow">
                    {memoryFlow.map((step, index) => {
                        const [stepRef, , hasIntersected] = useIntersectionObserver()
                        return (
                            <div 
                                key={index}
                                ref={stepRef}
                                className={`memory-flow-step ${hasIntersected ? 'slide-in-right' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="memory-step-number">{step.step}</div>
                                <div className="memory-step-content">
                                    <h3 className="memory-step-title">{step.title}</h3>
                                    <p className="memory-step-description">{step.description}</p>
                                    <div className="memory-step-detail">
                                        <span className="detail-label">How:</span>
                                        <span className="detail-text">{step.detail}</span>
                                    </div>
                                </div>
                                {index < memoryFlow.length - 1 && (
                                    <div className="memory-flow-arrow">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="memory-features-grid">
                    {memoryFeatures.map((feature, index) => (
                        <MemoryFeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                <div className="memory-highlight">
                    <div className="memory-highlight-icon">⚡</div>
                    <div className="memory-highlight-content">
                        <h3 className="memory-highlight-title">The Memory Advantage</h3>
                        <p className="memory-highlight-text">
                            Unlike static AI systems, Liquid AI's memory system creates a continuous learning loop. 
                            <strong> Conversations → Memory → Pattern Recognition → Agent Updates → Better Responses</strong>. 
                            Your agents don't just remember—they learn, adapt, and evolve. Every conversation makes them smarter.
                        </p>
                        <div className="memory-stats">
                            <div className="memory-stat">
                                <div className="stat-number">60-70%</div>
                                <div className="stat-label">Token Cost Reduction</div>
                            </div>
                            <div className="memory-stat">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Automatic Learning</div>
                            </div>
                            <div className="memory-stat">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Continuous Improvement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MemoryFeatures

