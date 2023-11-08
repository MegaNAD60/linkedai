import { useMediaQuery } from "react-responsive";

const Responsive = () => {
    const isDesktop = useMediaQuery({minWidth: 1200})
    const isTablet = useMediaQuery({minWidth: 700, maxWidth: 1200})
    const isPhone = useMediaQuery({minWidth: 300, maxWidth: 700})

    return(
        <>
            <h1>Sorted by Screen Sizes</h1>
            {isDesktop &&
                <h1>This is for desktop screen</h1>
            }
            {isTablet &&
                <h1>This is for tablet screen</h1>
            }
            {isPhone &&
                <h1>This is for phone screen</h1>
            }
        </>
    )
}

export default Responsive;