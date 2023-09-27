import { useMediaQuery } from "react-responsive"

export function Desktop({children}){
    const isDesktop = useMediaQuery({minWidth: 800, maxWidth: 7000})
    return isDesktop ? children : null
}

export function Phone({children}){
    const isPhone = useMediaQuery({minWidth: 300, maxWidth: 800})
    return isPhone ? children : null
}