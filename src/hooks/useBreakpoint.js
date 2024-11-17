import {useEffect, useState} from 'react'

const useBreakpoint = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        //handle window width change
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        //component is mounted
        window.addEventListener("resize", handleResize);

        //component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        xs: windowWidth < 576,
        sm: windowWidth >= 576 && windowWidth < 768,
        md: windowWidth >= 768 && windowWidth < 992,
        lg: windowWidth >= 992 && windowWidth < 1200,
        xl: windowWidth >= 1200,
    }
}

export default useBreakpoint
