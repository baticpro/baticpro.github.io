import { useState, useEffect } from "react";

const PREFIX = "sw-utm_";

export default function useUtmsFromHTML(prefix = PREFIX) {
    const [utms, setUtms] = useState([]);

    useEffect(() => {
        const nodeList = document.querySelectorAll(`input[name^="${prefix}"]`);
        setUtms(
            Array.from(nodeList)
                .reverse()
                .map(({ name, value }) => ({
                    name: name.replace(prefix, ""),
                    value,
                }))
                .filter(({ name }) => !!name)
                .map(({ name, value }) => ({ key: `utm_${name}`, value }))
        );
    }, [prefix]);

    return utms;
}
