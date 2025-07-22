import { useNavigate } from "react-router-dom";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "../components/ui/floating-dock";

export function FloatingDockDemo() {
    const navigate = useNavigate();

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: () => navigate("/"),
        },
        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: () => navigate("/projects"),
        },
        {
            title: "About Me",
            icon: (
                <img
                    src="/me.png"
                    alt="Me"
                    className="w-[100%] h-[100%]"
                />
            ),
            onClick: () => navigate("/aboutme"),
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: () => window.open("https://twitter.com", "_blank"),
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: () => window.open("https://github.com", "_blank"),
        },
    ];

    return (
        <div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
