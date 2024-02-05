import { useEffect, useRef } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function Redirects() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/records') {
            window.location.assign('https://docs.google.com/spreadsheets/d/1zZUx2uUMNxXSfT_NWlqtQy-4GPsGB0dLrmT53pfjcoo/edit?usp=sharing')
        }
        if (location.pathname === '/mediaday24') {
            window.location.assign('https://www.signupgenius.com/go/10C0F49A9A628A1FAC61-47743918-xctf')
        }
    }, [location])

    return null;
}