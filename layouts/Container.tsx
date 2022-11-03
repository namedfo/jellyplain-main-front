export default function Container({ children }: any) {
    return (
        <div className="mx-auto pt-[25px] h-full max-w-[1280px]">
            {children}
        </div>
    )
}