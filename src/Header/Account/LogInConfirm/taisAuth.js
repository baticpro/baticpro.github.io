import url from "url";

import { API_URLS } from "../../consts";

export default function taisAuth(params) {
    try {
        const iframe = document.createElement("iframe");

        iframe.src = API_URLS.AUTH.TAIS_AUTH + url.format({ query: params });

        iframe.onload = function () {
            this.parentNode.removeChild(this);
        };

        document.body.appendChild(iframe);
    } catch (e) {
        console.error("Error tais auth action");
    }
}
