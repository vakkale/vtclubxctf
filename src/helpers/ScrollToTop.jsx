import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    //set domain equal to between the first and last slash
    const domain = pathname.substring(pathname.indexOf("/") + 1, pathname.lastIndexOf("/"));
    console.log(domain);

    const domainRef = useRef(null);

    useEffect(() => {
        //if domain changes
        if ((domainRef.current !== domain) || (domain === "competition") || (domain === "community") || (domain === "/"))  {
            window.scrollTo(0, 0);
        }
        domainRef.current = domain;
    }, [pathname]);

    return null;
}