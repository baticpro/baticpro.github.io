import { useRef, useEffect } from "react";

export default function useClickOut(
    callbackOut = () => {},
    callbackIn = () => {}
) {
    const ref = useRef();

    useEffect(() => {
        function onClick(ev) {
            if (!ref?.current?.contains(ev.target)) {
                callbackOut();
            } else {
                callbackIn();
            }
        }

        document.addEventListener("click", onClick, true);

        return () => document.removeEventListener("click", onClick, true);
    }, [callbackIn, callbackOut, ref]);

    return ref;
}
