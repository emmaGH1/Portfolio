import { MutableRefObject, useEffect, useRef } from "react";
import lottie from "lottie-web";

type useAnimationProps = {
    data: string,
    loop?: boolean,
    autoplay?: boolean
}

export const UseLottieAnimation = ({ data, loop = true, autoplay = true }: useAnimationProps) => {
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
        <div ref={container}></div>
    )
}