const colorsMap = {
    light: {
        primary: {
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
        },
        secondary: {
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
        },
        neutral: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        warning: '#FBBF24',
        danger: '#EF4444',
        success: '#10B981',
        white: '#FFFFFF',
        black: '#000000',
    },
    dark: {
        primary: {
            100: '#1E3A8A',
            200: '#1D4ED8',
            300: '#2563EB',
            400: '#3B82F6',
            500: '#60A5FA',
            600: '#93C5FD',
            700: '#BFDBFE',
            800: '#DBEAFE',
            900: '#EFF6FF',
        },
        secondary: {
            100: '#7F1D1D',
            200: '#991B1B',
            300: '#B91C1C',
            400: '#DC2626',
            500: '#EF4444',
            600: '#F87171',
            700: '#FCA5A5',
            800: '#FECACA',
            900: '#FEE2E2',
        },
        neutral: {
            100: '#111827',
            200: '#1F2937',
            300: '#374151',
            400: '#4B5563',
            500: '#6B7280',
            600: '#9CA3AF',
            700: '#D1D5DB',
            800: '#E5E7EB',
            900: '#F3F4F6',
        },
        warning: '#FBBF24',
        danger: '#EF4444',
        success: '#10B981',
        white: '#000000',
        black: '#FFFFFF',
    },
};
// Returns the current palette based on prefers-color-scheme
function getColors() {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? colorsMap.dark
            : colorsMap.light;
    }
    return colorsMap.light;
}
export default getColors;
export { colorsMap };
