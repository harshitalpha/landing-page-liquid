import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Brain, Database, TrendingUp, Puzzle, Eye, Zap } from 'lucide-react'
import './Features.css'

const FeatureCard = ({ Icon, title, description, highlights, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`feature-card ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="feature-icon-wrapper">
                <div className="feature-icon">
                    <Icon />
                </div>
            </div>
            <div className="feature-content">
                <h3 className="feature-title">{title}</h3>
                <p className="feature-description">{description}</p>
                {highlights && (
                    <ul className="feature-highlights">
                        {highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

const Features = () => {
    const features = [
        {
            Icon: Brain,
            title: 'Intelligent Agent Generation',
            description: 'Automatically create specialized AI agents tailored to your business needs. No coding required.',
            highlights: [
                'Dynamic agent creation',
                'Context-aware behavior',
                'Multi-agent orchestration'
            ]
        },
        {
            Icon: Database,
            title: 'Persistent Memory System',
            description: 'Maintain conversation context across sessions with intelligent memory storage that preserves important information and patterns.',
            highlights: [
                'Conversation history',
                'Pattern recognition',
                'Context preservation'
            ]
        },
        {
            Icon: TrendingUp,
            title: 'Automated Learning & Adaptation',
            description: 'Agents continuously improve through feedback, automatically optimizing workflows and responses.',
            highlights: [
                'Feedback-driven optimization',
                'Real-time adaptation',
                'Performance tracking'
            ]
        },
        {
            Icon: Puzzle,
            title: 'Universal Tool Integration',
            description: 'Seamlessly connect with any API, database, or service. Built-in support for 50+ integrations.',
            highlights: [
                'API integrations',
                'Database connections',
                'Third-party services'
            ]
        },
        {
            Icon: Eye,
            title: 'Analytics & Monitoring',
            description: 'Track performance, monitor interactions, and debug issues with powerful analytics and real-time insights.',
            highlights: [
                'Performance analytics',
                'Real-time monitoring',
                'Debugging tools'
            ]
        },
        {
            Icon: Zap,
            title: 'Lightning Fast Deployment',
            description: 'Deploy production-ready AI agents in minutes. From idea to production in record time.',
            highlights: [
                'One-click deployment',
                'No infrastructure setup',
                'Instant scaling'
            ]
        }
    ]

    return (
        <section className="features section" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">
                        Everything you need to build <span className="gradient-text">intelligent AI agents</span>
                    </h2>
                    <p className="section-subtitle">
                        Powerful features that make building and deploying AI agents effortless
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} Icon={feature.Icon} title={feature.title} description={feature.description} highlights={feature.highlights} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
