import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Observability.css'

const MetricCard = ({ metric, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`metric-card ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-title">{metric.title}</div>
            <div className="metric-description">{metric.description}</div>
            <div className="metric-features">
                {metric.features.map((feature, idx) => (
                    <span key={idx} className="metric-feature-tag">{feature}</span>
                ))}
            </div>
        </div>
    )
}

const Observability = () => {
    const metrics = [
        {
            icon: "📊",
            title: "Agent Performance",
            description: "Track success rates, response quality, and execution times for every agent",
            features: ["Success Rate", "Avg Response Time", "Error Rate", "User Satisfaction"]
        },
        {
            icon: "🔄",
            title: "Memory Analytics",
            description: "Monitor memory usage, retrieval efficiency, and context assembly metrics",
            features: ["Memory Size", "Retrieval Speed", "Token Savings", "Hit Rate"]
        },
        {
            icon: "💬",
            title: "Conversation Insights",
            description: "Analyze conversation patterns, common queries, and user satisfaction trends",
            features: ["Query Patterns", "Sentiment Analysis", "Response Quality", "Engagement"]
        },
        {
            icon: "⚡",
            title: "Workflow Execution",
            description: "Track workflow performance, step dependencies, and execution paths",
            features: ["Execution Time", "Step Success", "Dependency Graph", "Optimization"]
        },
        {
            icon: "🤖",
            title: "Agent Evolution",
            description: "Monitor how agents improve over time through memory-driven updates",
            features: ["Version History", "Prompt Changes", "Performance Gains", "Optimization Logs"]
        },
        {
            icon: "📈",
            title: "Cost Analytics",
            description: "Track token usage, API costs, and optimization savings across your platform",
            features: ["Token Usage", "Cost Trends", "Savings Metrics", "Budget Alerts"]
        }
    ]

    const dashboardFeatures = [
        {
            icon: "🎯",
            title: "Real-Time Monitoring",
            description: "Live dashboards showing agent performance, memory metrics, and workflow executions in real-time"
        },
        {
            icon: "🔍",
            title: "Deep Dive Analysis",
            description: "Drill down into individual conversations, agent decisions, and memory retrieval patterns"
        },
        {
            icon: "📊",
            title: "Custom Reports",
            description: "Generate custom reports on agent performance, memory efficiency, and user satisfaction"
        },
        {
            icon: "🚨",
            title: "Alerting & Notifications",
            description: "Set up alerts for performance degradation, cost thresholds, and quality issues"
        }
    ]

    return (
        <section className="section observability" id="observability">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Phenomenal Observability</span>
                </h2>
                <p className="section-subtitle">
                    Complete visibility into your AI platform. Monitor agents, memory, conversations, and performance—all in one powerful dashboard
                </p>

                <div className="observability-grid">
                    {metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                    ))}
                </div>

                <div className="dashboard-features">
                    <div className="dashboard-features-title">Dashboard Capabilities</div>
                    <div className="dashboard-features-grid">
                        {dashboardFeatures.map((feature, index) => {
                            const [featureRef, , hasIntersected] = useIntersectionObserver()
                            return (
                                <div 
                                    key={index}
                                    ref={featureRef}
                                    className={`dashboard-feature ${hasIntersected ? 'scale-in' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="dashboard-feature-icon">{feature.icon}</div>
                                    <h3 className="dashboard-feature-title">{feature.title}</h3>
                                    <p className="dashboard-feature-description">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="observability-highlight">
                    <div className="observability-highlight-content">
                        <h3 className="observability-highlight-title">🛠️ Merchant Dashboard</h3>
                        <p className="observability-highlight-text">
                            Your command center for managing AI agents, monitoring performance, and optimizing your platform. 
                            See everything in one place: agent metrics, memory usage, conversation analytics, workflow execution, 
                            cost tracking, and more. Make data-driven decisions to improve your AI experience.
                        </p>
                        <div className="observability-benefits">
                            <div className="observability-benefit">
                                <span className="benefit-check">✓</span>
                                <span>Track agent improvements over time</span>
                            </div>
                            <div className="observability-benefit">
                                <span className="benefit-check">✓</span>
                                <span>Monitor memory efficiency and token savings</span>
                            </div>
                            <div className="observability-benefit">
                                <span className="benefit-check">✓</span>
                                <span>Analyze conversation patterns and user satisfaction</span>
                            </div>
                            <div className="observability-benefit">
                                <span className="benefit-check">✓</span>
                                <span>Optimize costs and track performance metrics</span>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-mockup-visual">
                        <div className="mockup-chart">
                            <div className="chart-bar" style={{height: '80%'}}></div>
                            <div className="chart-bar" style={{height: '60%'}}></div>
                            <div className="chart-bar" style={{height: '90%'}}></div>
                            <div className="chart-bar" style={{height: '70%'}}></div>
                            <div className="chart-bar" style={{height: '85%'}}></div>
                        </div>
                        <div className="mockup-metrics">
                            <div className="metric-item">
                                <div className="metric-label">Agent Success Rate</div>
                                <div className="metric-value">94% ↗</div>
                            </div>
                            <div className="metric-item">
                                <div className="metric-label">Memory Efficiency</div>
                                <div className="metric-value">68% ↗</div>
                            </div>
                            <div className="metric-item">
                                <div className="metric-label">Token Savings</div>
                                <div className="metric-value">$2.4K</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Observability

