export const Loader = () => {
    return (
        <span className="loader relative w-60 h-60 bg-[var(--color-accent-700)] rounded-full shadow-[inset_0_0_30px_4px_rgba(0,0,0,0.5),0_5px_12px_rgba(0,0,0,0.15)] overflow-hidden">
            <span className="before absolute w-full h-full top-[-40%] bg-white rounded-[45%] animate-wave"></span>
            <span className="after absolute w-full h-full top-[-40%] bg-[rgba(255,255,255,0.4)] rounded-[30%] animate-wave"></span>
        </span>
    )
}
