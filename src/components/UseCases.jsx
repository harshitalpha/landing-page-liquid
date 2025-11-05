import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { DollarSign, Scale, Headphones, BarChart, Heart, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react'
import './UseCases.css'

const UseCaseCard = ({ Icon, title, description, index }) => {
    const [cardRef, , hasIntersected] = useIntersectionObserver()
    
    return (
        <div 
            ref={cardRef}
            className={`use-case-card ${hasIntersected ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="use-case-icon">
                <Icon />
            </div>
            <h3 className="use-case-title">{title}</h3>
            <p className="use-case-description">{description}</p>
        </div>
    )
}

const UseCases = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const useCases = [
        {
            Icon: DollarSign,
            title: 'Sales AI',
            description: 'Automate lead qualification and customer interactions with intelligent agents that learn from every interaction.'
        },
        {
            Icon: Scale,
            title: 'Legal AI',
            description: 'Streamline legal research and contract analysis with specialized agents that understand legal context.'
        },
        {
            Icon: Headphones,
            title: 'Support AI',
            description: 'Provide 24/7 customer support with agents that continuously improve from feedback and interactions.'
        },
        {
            Icon: BarChart,
            title: 'Analytics AI',
            description: 'Transform data into actionable insights with agents that analyze, visualize, and report automatically.'
        },
        {
            Icon: Heart,
            title: 'Healthcare AI',
            description: 'Assist with patient inquiries and appointment scheduling with HIPAA-compliant intelligent agents.'
        },
        {
            Icon: GraduationCap,
            title: 'Education AI',
            description: 'Create personalized learning experiences with tutors that adapt to each student\'s learning style.'
        }
    ]

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % useCases.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [useCases.length])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="use-cases section" id="use-cases">
            <div className="container">
                <div className="use-cases-header">
                    <h2 className="section-title">
                        Built for <span className="gradient-text">any industry</span>
                    </h2>
                    <p className="section-subtitle">
                        Specialized AI agents for every business need
                    </p>
                </div>
                <div className="carousel-container">
                    <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="carousel-wrapper">
                        <div 
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {useCases.map((useCase, index) => (
                                <UseCaseCard key={index} Icon={useCase.Icon} title={useCase.title} description={useCase.description} index={index} />
                            ))}
                        </div>
                    </div>
                    <button className="carousel-button next" onClick={nextSlide} aria-label="Next">
                        <ChevronRight size={24} />
                    </button>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar">
                        {useCases.map((_, index) => (
                            <button
                                key={index}
                                className={`progress-segment ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UseCases
