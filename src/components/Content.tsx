import React, { useContext, useEffect, useRef } from "react";
import Canvas from "./Canvas";
import SidebarSelect from "./SidebarSelect";
import DownloadClearButtons from "./DownloadClearButtons";
import { SceneContext } from "../contexts/SceneContext";
import FlavorText from "./FlavorText";
import SettingsButton from "./SettingsButton";

const Content: React.FC = () => {
    const contentBackground = useRef<HTMLDivElement | null>(null);
    const context = useContext(SceneContext);

    useEffect(() => {
        if (!context || !context.background) return;
        if (contentBackground.current) {
            contentBackground.current.style.backgroundImage = context
                ?.background.filename
                ? `url("${context.background.filename}")`
                : "";
        }
        console.log("Background set to:", context.background.filename);
    }, [context]);

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const tabs = document.getElementById("sidebar-select");
        const save = document.getElementById("download-clear-buttons");
        const locale = document.getElementById("locale-and-support");
        const hideAtPosition = 100;

        if (scrollPosition > hideAtPosition) {
            if (tabs) tabs.style.opacity = "0";
            if (save) save.style.opacity = "0";
            if (locale) locale.style.opacity = "0";
        } else {
            if (tabs) tabs.style.opacity = "1.0";
            if (save) save.style.opacity = "1.0";
            if (locale) locale.style.opacity = "1.0";
        }
    });

    if (!context) {
        throw new Error("Context is not loaded properly.");
    }
    const { hide, setHide } = context;

    return (
        <div id="content" className="center" style={{ position: "relative" }}>
            <div id="content-background" ref={contentBackground}></div>

            {!hide && <SidebarSelect />}
            <DownloadClearButtons />
            <div className="absolute bottom-right" id="hide-sidebar">
                <button
                    className={`btn-circle ${hide ? "btn-pink" : "btn-white"}`}
                    onClick={() => {
                        setHide(!hide);
                    }}
                >
                    {hide ? (
                        <i className="sidebar__select bi bi-chevron-left" />
                    ) : (
                        <i className="sidebar__select bi bi-chevron-right" />
                    )}
                </button>
            </div>
            <div className="absolute top-left" id="locale-and-support">
                <SettingsButton />
            </div>

            <Canvas />
            <FlavorText />
        </div>
    );
};

export default Content;
