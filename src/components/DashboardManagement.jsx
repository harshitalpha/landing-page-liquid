import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { LayoutDashboard, Puzzle, FlaskConical, Workflow, TrendingUp, Database, Sparkles, ArrowRight } from 'lucide-react'
import './DashboardManagement.css'

const DashboardManagement = () => {
    const [sectionRef, , hasIntersected] = useIntersectionObserver()
    
    const dashboardFeatures = [
        {
            icon: Puzzle,
            title: 'Connect Everything',
            description: 'Seamlessly configure tools and integrations—connect APIs, databases, and third-party services with a few clicks'
        },
        {
            icon: FlaskConical,
            title: 'Evals Studio',
            description: 'Test, validate, and fine-tune your agents with comprehensive evaluation tools before deployment'
        },
        {
            icon: Workflow,
            title: 'Your AI Fleet',
            description: 'View and manage all generated workflows and agents in one unified control center'
        },
        {
            icon: TrendingUp,
            title: 'Performance Hub',
            description: 'Track real-time performance metrics, latency, and success rates for all your workflows and agents'
        },
        {
            icon: Database,
            title: 'Memory Mastery',
            description: 'Control conversation memory, manage context retention, and optimize knowledge storage'
        },
        {
            icon: Sparkles,
            title: 'Smart Optimization',
            description: 'Automatically optimize prompts using user feedback to improve responses and accuracy continuously'
        }
    ]

    return (
        <section 
            ref={sectionRef}
            className={`dashboard-management section ${hasIntersected ? 'fade-in' : ''}`}
        >
            <div className="container">
                <div className="dashboard-content">
                    <div className="dashboard-cta">
                        <div className="dashboard-icon-wrapper">
                            <LayoutDashboard size={48} className="dashboard-main-icon" />
                        </div>
                        <h2 className="dashboard-title">
                            Manage Everything from <span className="gradient-text">One Dashboard</span>
                        </h2>
                        <p className="dashboard-subtitle">
                            Control all aspects of your AI agents, analytics, users, and settings from a single, intuitive interface. No switching between tools—everything you need is right here.
                        </p>
                        <a href="#waitlist" className="dashboard-cta-button">
                            Get Started
                            <ArrowRight size={18} />
                        </a>
                    </div>
                    
                    <div className="dashboard-features-grid">
                        {dashboardFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div 
                                    key={index}
                                    className="dashboard-feature-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="dashboard-feature-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="dashboard-feature-title">{feature.title}</h3>
                                    <p className="dashboard-feature-description">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardManagement

