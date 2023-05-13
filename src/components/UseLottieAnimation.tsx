import { MutableRefObject, useEffect, useRef } from "react";
import lottie from "lottie-web";

type useAnimationProps = {
    data: string,
    loop?: boolean,
    autoplay?: boolean,
    className?: string
}

const UseLottieAnimation = ({ data, loop = true, autoplay = true, className }: useAnimationProps) => {
    const container = useRef<HTMLDivElement>(null)
    const animationData = JSON.parse(data)
    useEffect(() => {
       lottie.loadAnimation({
        container: container.current as Element,
        renderer: 'svg',
        loop,
        autoplay,
        animationData
       })

       return () => { lottie.destroy()}
    }, [])

    return (
        <div ref={container} className={className}></div>
    )
}

export default UseLottieAnimation