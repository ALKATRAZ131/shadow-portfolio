import colors from '@/constants/color'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Props {
    text?: string;
    onClick?: () => void;
}

function GradientBgButton({
    text,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            className="ml-2 flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white transition-all shadow-2xl relative gradient-shadow-btn"
            style={{
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 60%, ${colors.secondary} 100%)`,
                cursor: 'pointer'
            }}
            onClick={onClick}
        >
            {text} <FaArrowRight className="rotate-45 transition-transform duration-300" />
        </button>
    )
}

export default GradientBgButton;