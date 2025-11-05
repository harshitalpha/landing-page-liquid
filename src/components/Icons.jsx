import React from 'react'

// Features Icons - More Creative Designs
export const BrainIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Neural network nodes */}
        <circle cx="10" cy="12" r="2.5" fill="url(#brainGradient)"/>
        <circle cx="22" cy="12" r="2.5" fill="url(#brainGradient)"/>
        <circle cx="8" cy="20" r="2" fill="url(#brainGradient)" opacity="0.8"/>
        <circle cx="16" cy="20" r="3" fill="url(#brainGradient)"/>
        <circle cx="24" cy="20" r="2" fill="url(#brainGradient)" opacity="0.8"/>
        <circle cx="12" cy="26" r="2" fill="url(#brainGradient)" opacity="0.7"/>
        <circle cx="20" cy="26" r="2" fill="url(#brainGradient)" opacity="0.7"/>
        {/* Connections */}
        <path d="M10 12L8 20M22 12L24 20M10 12L16 20M22 12L16 20M8 20L12 26M16 20L12 26M16 20L20 26M24 20L20 26" stroke="url(#brainGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const MemoryIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Memory chip design */}
        <rect x="8" y="8" width="16" height="16" rx="2" fill="url(#memoryGradient)" opacity="0.2"/>
        <rect x="10" y="10" width="12" height="12" rx="1" fill="url(#memoryGradient)"/>
        {/* Memory cells */}
        <rect x="12" y="12" width="2" height="2" rx="0.5" fill="white" opacity="0.9"/>
        <rect x="15" y="12" width="2" height="2" rx="0.5" fill="white" opacity="0.9"/>
        <rect x="18" y="12" width="2" height="2" rx="0.5" fill="white" opacity="0.9"/>
        <rect x="12" y="15" width="2" height="2" rx="0.5" fill="white" opacity="0.7"/>
        <rect x="15" y="15" width="2" height="2" rx="0.5" fill="white" opacity="0.7"/>
        <rect x="18" y="15" width="2" height="2" rx="0.5" fill="white" opacity="0.7"/>
        <rect x="12" y="18" width="2" height="2" rx="0.5" fill="white" opacity="0.5"/>
        <rect x="15" y="18" width="2" height="2" rx="0.5" fill="white" opacity="0.5"/>
        <rect x="18" y="18" width="2" height="2" rx="0.5" fill="white" opacity="0.5"/>
        {/* Pins */}
        <rect x="6" y="11" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="6" y="13" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="6" y="15" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="6" y="17" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="24" y="11" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="24" y="13" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="24" y="15" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <rect x="24" y="17" width="2" height="1" rx="0.5" fill="url(#memoryGradient)"/>
        <defs>
            <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const LearningIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stacked layers representing learning */}
        <path d="M16 6L6 12L16 18L26 12L16 6Z" fill="url(#learningGradient)"/>
        <path d="M6 14L16 20L26 14" stroke="url(#learningGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18L16 24L26 18" stroke="url(#learningGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Upward arrow showing improvement */}
        <path d="M16 24V28M16 28L14 26M16 28L18 26" stroke="url(#learningGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Progress indicators */}
        <circle cx="10" cy="12" r="1" fill="white" opacity="0.8"/>
        <circle cx="16" cy="14" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="22" cy="12" r="1" fill="white" opacity="0.8"/>
        <defs>
            <linearGradient id="learningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const ToolsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central hub */}
        <circle cx="16" cy="16" r="5" fill="url(#toolsGradient)" opacity="0.2"/>
        <circle cx="16" cy="16" r="3" fill="url(#toolsGradient)"/>
        {/* Connected services */}
        <rect x="22" y="14" width="6" height="4" rx="1" fill="url(#toolsGradient)" opacity="0.8"/>
        <rect x="4" y="14" width="6" height="4" rx="1" fill="url(#toolsGradient)" opacity="0.8"/>
        <rect x="14" y="22" width="4" height="6" rx="1" fill="url(#toolsGradient)" opacity="0.8"/>
        <rect x="14" y="4" width="4" height="6" rx="1" fill="url(#toolsGradient)" opacity="0.8"/>
        {/* Connection lines */}
        <path d="M19 16L22 16M13 16L10 16M16 19L16 22M16 13L16 10" stroke="url(#toolsGradient)" strokeWidth="2" strokeLinecap="round"/>
        {/* Small connection dots */}
        <circle cx="19" cy="16" r="1" fill="white" opacity="0.6"/>
        <circle cx="13" cy="16" r="1" fill="white" opacity="0.6"/>
        <circle cx="16" cy="19" r="1" fill="white" opacity="0.6"/>
        <circle cx="16" cy="13" r="1" fill="white" opacity="0.6"/>
        <defs>
            <linearGradient id="toolsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const AnalyticsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bar chart */}
        <rect x="6" y="20" width="4" height="8" rx="1" fill="url(#analyticsGradient)"/>
        <rect x="12" y="14" width="4" height="14" rx="1" fill="url(#analyticsGradient)"/>
        <rect x="18" y="10" width="4" height="18" rx="1" fill="url(#analyticsGradient)"/>
        <rect x="24" y="6" width="4" height="22" rx="1" fill="url(#analyticsGradient)"/>
        {/* Trend line */}
        <path d="M8 24L14 18L20 14L26 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        {/* Data points */}
        <circle cx="8" cy="24" r="2" fill="white" opacity="0.9"/>
        <circle cx="14" cy="18" r="2" fill="white" opacity="0.9"/>
        <circle cx="20" cy="14" r="2" fill="white" opacity="0.9"/>
        <circle cx="26" cy="10" r="2" fill="white" opacity="0.9"/>
        <defs>
            <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const LightningIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L8 18H16L14 28L24 14H16L18 4Z" fill="url(#lightningGradient)"/>
        {/* Energy particles */}
        <circle cx="12" cy="10" r="1" fill="white" opacity="0.8"/>
        <circle cx="20" cy="8" r="0.8" fill="white" opacity="0.6"/>
        <circle cx="10" cy="22" r="1" fill="white" opacity="0.7"/>
        <circle cx="22" cy="16" r="0.8" fill="white" opacity="0.6"/>
        <defs>
            <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

// Use Case Icons - Much More Creative Designs
export const SalesIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sales funnel */}
        <path d="M24 8L36 20H28V32H20V20H12L24 8Z" fill="url(#salesGradient)" opacity="0.2"/>
        <path d="M12 20L24 32L36 20" stroke="url(#salesGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Growth arrow */}
        <path d="M24 32V40M24 40L22 38M24 40L26 38" stroke="url(#salesGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Success checkmark */}
        <circle cx="36" cy="12" r="6" fill="url(#salesGradient)"/>
        <path d="M33 12L35.5 14.5L39 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Percentage indicator */}
        <text x="24" y="28" fontSize="8" fill="url(#salesGradient)" fontWeight="bold" opacity="0.6">+45%</text>
        <defs>
            <linearGradient id="salesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const LegalIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Scales of justice */}
        <path d="M24 8L30 14L24 20L18 14L24 8Z" fill="url(#legalGradient)" opacity="0.2"/>
        <path d="M18 14L24 20L30 14" stroke="url(#legalGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Balance beam */}
        <path d="M12 20L36 20" stroke="url(#legalGradient)" strokeWidth="3" strokeLinecap="round"/>
        {/* Left scale */}
        <path d="M12 20L8 28L16 28L12 20Z" fill="url(#legalGradient)" opacity="0.3"/>
        <path d="M8 28L16 28" stroke="url(#legalGradient)" strokeWidth="2" strokeLinecap="round"/>
        {/* Right scale */}
        <path d="M36 20L32 28L40 28L36 20Z" fill="url(#legalGradient)" opacity="0.3"/>
        <path d="M32 28L40 28" stroke="url(#legalGradient)" strokeWidth="2" strokeLinecap="round"/>
        {/* Document badge */}
        <rect x="20" y="32" width="8" height="10" rx="1" fill="url(#legalGradient)" opacity="0.4"/>
        <path d="M22 34H26M22 36H26M22 38H24" stroke="url(#legalGradient)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
            <linearGradient id="legalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const SupportIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Headset */}
        <path d="M16 18C16 14.6863 18.6863 12 22 12H26C29.3137 12 32 14.6863 32 18V22C32 25.3137 29.3137 28 26 28H24V32H22V28H20C18.8954 28 18 27.1046 18 26V18C18 14.6863 20.6863 12 24 12" stroke="url(#supportGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Headset band */}
        <path d="M16 18C16 18 14 20 14 22C14 24 16 26 18 26" stroke="url(#supportGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M32 18C32 18 34 20 34 22C34 24 32 26 30 26" stroke="url(#supportGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Microphone */}
        <path d="M24 32V36" stroke="url(#supportGradient)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 36H26" stroke="url(#supportGradient)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Sound waves */}
        <path d="M28 22C28 22 30 24 30 26M36 22C36 22 34 24 34 26" stroke="url(#supportGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        {/* Chat bubble */}
        <path d="M12 20C12 18.8954 12.8954 18 14 18H18C19.1046 18 20 18.8954 20 20V24C20 25.1046 19.1046 26 18 26H14L10 30V20C10 18.8954 10.8954 18 12 18" stroke="url(#supportGradient)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
        <defs>
            <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const AnalyticsUseCaseIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 3D Chart bars */}
        <rect x="10" y="28" width="6" height="12" rx="1.5" fill="url(#analyticsUseGradient)"/>
        <rect x="19" y="20" width="6" height="20" rx="1.5" fill="url(#analyticsUseGradient)"/>
        <rect x="28" y="14" width="6" height="26" rx="1.5" fill="url(#analyticsUseGradient)"/>
        {/* Top surface (3D effect) */}
        <path d="M10 28L13 25L16 28M19 20L22 17L25 20M28 14L31 11L34 14" stroke="url(#analyticsUseGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        {/* Trend line with gradient */}
        <path d="M13 28L22 20L31 14" stroke="url(#analyticsUseGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        {/* Data points */}
        <circle cx="13" cy="28" r="3" fill="white" opacity="0.9"/>
        <circle cx="22" cy="20" r="3.5" fill="white" opacity="0.9"/>
        <circle cx="31" cy="14" r="3.5" fill="white" opacity="0.9"/>
        {/* Grid lines */}
        <path d="M8 40L40 40" stroke="url(#analyticsUseGradient)" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
        <path d="M8 32L40 32" stroke="url(#analyticsUseGradient)" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
        {/* Sparkle effect */}
        <circle cx="35" cy="10" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="38" cy="8" r="1" fill="white" opacity="0.6"/>
        <defs>
            <linearGradient id="analyticsUseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const HealthcareIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Medical cross with shield */}
        <circle cx="24" cy="24" r="16" fill="url(#healthcareGradient)" opacity="0.15"/>
        <path d="M24 16V32M16 24H32" stroke="url(#healthcareGradient)" strokeWidth="4" strokeLinecap="round"/>
        {/* Shield outline */}
        <path d="M24 8C24 8 18 10 18 16V20C18 26 24 32 24 32C24 32 30 26 30 20V16C30 10 24 8 24 8Z" stroke="url(#healthcareGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
        {/* Pulse line */}
        <path d="M12 32L16 30L20 34L24 28L28 32L32 30L36 34" stroke="url(#healthcareGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        {/* Small plus signs */}
        <path d="M10 18H12M11 17V19" stroke="url(#healthcareGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M38 18H40M39 17V19" stroke="url(#healthcareGradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <defs>
            <linearGradient id="healthcareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)

export const EducationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Open book */}
        <path d="M14 12C14 10.8954 14.8954 10 16 10H20C21.1046 10 22 10.8954 22 12V36C22 37.1046 21.1046 38 20 38H16C14.8954 38 14 37.1046 14 36V12Z" fill="url(#educationGradient)" opacity="0.2"/>
        <path d="M26 12C26 10.8954 26.8954 10 28 10H32C33.1046 10 34 10.8954 34 12V36C34 37.1046 33.1046 38 32 38H28C26.8954 38 26 37.1046 26 36V12Z" fill="url(#educationGradient)" opacity="0.2"/>
        <path d="M14 12H22M26 12H34M14 16H22M26 16H34M14 20H22M26 20H34" stroke="url(#educationGradient)" strokeWidth="2" strokeLinecap="round"/>
        {/* Graduation cap */}
        <path d="M24 8L12 16L24 24L36 16L24 8Z" fill="url(#educationGradient)" opacity="0.3"/>
        <path d="M24 8L12 16L24 24L36 16L24 8Z" stroke="url(#educationGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Tassel */}
        <path d="M24 24V28M24 28L22 30M24 28L26 30" stroke="url(#educationGradient)" strokeWidth="2" strokeLinecap="round"/>
        {/* Bookmark */}
        <path d="M20 12V20L18 18L16 20V12" fill="url(#educationGradient)" opacity="0.6"/>
        <defs>
            <linearGradient id="educationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#6366f1',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#8b5cf6',stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
)
