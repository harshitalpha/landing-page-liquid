import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './AdaptiveLearning.css'

const FlowStep = ({ feature, index, total }) => {
    const [stepRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={stepRef}
            className={`flow-step ${hasIntersected ? 'slide-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="step-number-badge">{feature.step}</div>
            <div className="step-content">
                <h3 className="step-title">{feature.title}</h3>
                <p className="step-description">{feature.description}</p>
                <div className="step-example">
                    <span className="example-label">Example:</span>
                    <span className="example-text">{feature.example}</span>
                </div>
            </div>
            {index < total - 1 && (
                <div className="flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            )}
        </div>
    )
}

const BenefitCard = ({ benefit, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`benefit-card ${hasIntersected ? 'scale-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
        </div>
    )
}

const AdaptiveLearning = () => {
    const learningFeatures = [
        {
            step: "1",
            title: "Customers Interact",
            description: "Your users chat with AI agents, providing natural feedback through conversations",
            example: "Customer rates response: ⭐⭐⭐⭐ (4/5) or corrects an answer"
        },
        {
            step: "2",
            title: "Feedback Collected",
            description: "System automatically captures ratings, corrections, and performance metrics from every interaction",
            example: "User satisfaction, error patterns, execution time tracked"
        },
        {
            step: "3",
            title: "Agents Learn Automatically",
            description: "AI analyzes feedback patterns and updates agent prompts and workflows automatically",
            example: "Agent prompts optimized based on successful interactions"
        },
        {
            step: "4",
            title: "Continuous Improvement",
            description: "Agents improve over time without manual intervention—better responses, fewer errors, happier customers",
            example: "Success rate: 70% → 85% → 95% over time"
        }
    ]

    const benefits = [
        {
            icon: "🔄",
            title: "Zero Manual Updates",
            description: "Agents optimize themselves based on real customer feedback. No need to manually tweak prompts or workflows."
        },
        {
            icon: "📈",
            title: "Measurable Improvement",
            description: "Track success rates, customer satisfaction, and error reduction as agents learn and adapt."
        },
        {
            icon: "🤖",
            title: "LLM-Powered Optimization",
            description: "Advanced AI analyzes patterns and generates optimized agent definitions, ensuring continuous improvement."
        },
        {
            icon: "⚡",
            title: "Real-Time Adaptation",
            description: "Agents adapt to feedback weekly through automated optimization jobs, keeping your AI always improving."
        }
    ]

    return (
        <section className="section adaptive-learning" id="adaptive-learning">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">Automated Learning</span> & Adaptation
                </h2>
                <p className="section-subtitle">
                    Your AI agents learn from every customer interaction. They improve automatically through feedback—no manual updates required.
                </p>

                <div className="learning-flow">
                    <div className="flow-title">How Automated Learning Works</div>
                    <div className="flow-steps">
                        {learningFeatures.map((feature, index) => (
                            <FlowStep 
                                key={index} 
                                feature={feature} 
                                index={index}
                                total={learningFeatures.length}
                            />
                        ))}
                    </div>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} index={index} />
                    ))}
                </div>

                <div className="highlight-box">
                    <div className="highlight-icon">🚀</div>
                    <div className="highlight-content">
                        <h3 className="highlight-title">The Feedback Loop Advantage</h3>
                        <p className="highlight-text">
                            Unlike static AI systems, Liquid AI creates a continuous improvement cycle: 
                            <strong> Customer Interaction → Feedback Collection → Automatic Optimization → Better Experience</strong>. 
                            Your agents get smarter with every conversation, leading to higher customer satisfaction and lower support costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdaptiveLearning

