import { FaAngular, FaBootstrap, FaElementor, FaGithub, FaGoogle, FaJava, FaLaravel, FaReact, FaShopify, FaWordpress, FaWordpressSimple } from "react-icons/fa6";
import { IoLogoElectron, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAstra, SiMysql, SiNestjs, SiPhp, SiTypescript, SiWoocommerce } from "react-icons/si";

export function countProjects(projects: any[]) {
    const projectCount = projects.length;
    const completedCount = projects.filter(project => project.status === "Completed").length;
    const inProgressCount = projects.filter(project => project.status === "In Progress").length;
    const siteBuilderCount = projects.filter(project => project.category === "sitebuilder").length;
    const fullStackCount = projects.filter(project => project.category === "fullstack").length;
    return {
        projectCount,
        completedCount,
        inProgressCount,
        siteBuilderCount,
        fullStackCount
    };
}
export const projects = [
        {
        id: 1,
        image_hero: "/images/TheLittleShelf.png",
        category: "sitebuilder",
        title: "The Little Shelf",
        short_description: "The Little Shelf is a website created for a local business. Built using Wordpress and WooCommerce.",
        description: "The Little Shelf is a custom-built eCommerce website developed for a local business using WordPress and WooCommerce. The project focused on creating a visually appealing and user-friendly online storefront that reflects the brand’s charm and personality. It involved customizing WordPress themes, implementing WooCommerce for seamless product management, and integrating essential plugins to support online sales and customer engagement. The design emphasizes simplicity, responsiveness, and ease of navigation to enhance the shopping experience across all devices.",
        image: "/images/thelittleshelfwhite.png",
        url: "https://thelittleshelf.com/",
        tags: [
            { name: "WordPress", icon: FaWordpress  },
            { name: "WooCommerce", icon: SiWoocommerce},
            { name: "PHP", icon: SiPhp },
            { name: "Astra Theme", icon: SiAstra },

        ],
        year: [2025],
        status: "Completed",
    },
    {
        id: 2,
        image_hero: "/images/portfolioSS.png",
        category: "fullstack",
        title: "Dev Portfolio",
        short_description: "My personal portfolio website built using Next.js, TypeScript, and Tailwind CSS.",
        description: "My personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and experience as a developer. The site is fully responsive and optimized for performance, providing a seamless user experience across devices. I utilized Next.js for server-side rendering and static site generation, ensuring fast load times and SEO optimization. The design is clean and modern, reflecting my personal brand and development philosophy.",
        image: "images/favicon.PNG",
        url: "/",
        tags: [
            { name: "NextJS", icon: RiNextjsFill  },
            { name: "TailwindCSS", icon: RiTailwindCssFill },
            { name: "Vercel", icon: IoLogoVercel  }, 
            { name: "GitHub", icon: FaGithub  } 
        ],
        year: [2025],
        status: "In Progress",
    },
    {
        id: 3,
        image_hero: "/images/MyTaskOwlHero.png",
        category: "sitebuilder",
        title: "MyTaskOwl",
        short_description: "MyTaskOwl is a site built with Elementor, a powerful drag-and-drop builder for WordPress.",
        description: "MyTaskOwl is a site built with Elementor, a powerful drag-and-drop builder for WordPress. This project helped me enhance my site building skills by working with various widgets, templates, and customization options in Elementor, allowing me to create a dynamic and user-friendly interface for the site. The website is fully responsive and was designed to improve both user experience and functionality.",
        image: "https://i0.wp.com/mytaskowl.com/wp-content/uploads/2025/05/cropped-mytaskowl_logo.png?fit=801%2C844&ssl=1",
        url: "https://mytaskowl.com",
        tags: [
            { name: "Elementor", icon: FaElementor },
            { name: "WordPress", icon: FaWordpressSimple },
            { name: "Astra", icon: SiAstra } 
        ],
        year: [2024,2025],
        status: "In Progress",

    },
    {
        id: 4,
        image_hero: "/images/appStage.png",
        category: "fullstack",
        title: "MyTaskOwl Web app",
        short_description: "The MyTaskOwl Web app is a full-stack application developed using Laravel for the backend and Angular for the frontend.",
        description: "The MyTaskOwl Web app is a full-stack application built with Laravel for the backend and Angular for the frontend. It allows users to manage tasks and track project timelines. I worked on the backend with Laravel to create robust server-side architecture, built APIs, and contributed to the WebSocket infrastructure using NestJS. On the frontend, I developed key Angular components, integrated Google OAuth for sign-on, and built the mailing system for registration, password recovery, and verification. I also implemented route guards to secure navigation."
        ,image: "https://i0.wp.com/mytaskowl.com/wp-content/uploads/2025/05/cropped-mytaskowl_logo.png?fit=801%2C844&ssl=1",
        url: "https://app.stage.mytaskowl.com",
        tags: [
            { name: "Angular", icon: FaAngular },
            { name: "Laravel", icon: FaLaravel },
            { name: "PHP", icon: SiPhp },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Google Cloud Console", icon: FaGoogle  },
            { name: "NestJS", icon: SiNestjs }, 
            { name: "GitHub", icon: FaGithub  },
            { name: "MySQL", icon: SiMysql   },

        ],
        year: [2024,2025],
        status: "In Progress",

    },
    {
        id: 5,
        image_hero: "https://mytaskowl.com/wp-content/uploads/2024/10/taskowl-logo-final-edited-1-300x300.png",
        category: "fullstack",
        title: "MyTaskOwl Software Application",
        short_description: "The MyTaskOwl Software application is a desktop application built using Angular for the frontend and Electron for the cross-platform desktop functionality.",
        description: "The MyTaskOwl Software application is a desktop application built using Angular for the frontend and Electron for the cross-platform desktop functionality. This application extends the MyTaskOwl Web app’s features by providing an offline-capable version of the software that can run on both Windows and macOS. The app offers a native-like experience with a seamless user interface and robust task management features, while utilizing Electron to bridge web technologies into a powerful desktop application.",
        image: "https://i0.wp.com/mytaskowl.com/wp-content/uploads/2025/05/cropped-mytaskowl_logo.png?fit=801%2C844&ssl=1",
        url: "https://app.stage.mytaskowl.com",
        tags: [
            { name: "Angular", icon: FaAngular },
            { name: "TypeScript", icon: SiTypescript },
            { name: "NestJS", icon: SiNestjs  },
            { name: "Electron", icon: IoLogoElectron  },
            { name: "Google Cloud Console", icon: FaGoogle  },
            { name: "GitHub", icon: FaGithub  } 

        ],
        year: [2024,2025],
        status: "In Progress",

    },
    {
        id: 6,
        image_hero: "/images/ZenExp.png",
        category: "sitebuilder",
        title: "ZEN Experience",
        short_description: "ZEN Experience is a website created for a local business built using Shopify.",
        description: "ZEN Experience is a website created for a local business, aimed at providing an elegant and calming digital presence that reflects the brand’s philosophy. Built using WordPress, the site showcases the business’s offerings, features a modern and clean design, and ensures a smooth user experience across devices. The project involved customizing WordPress themes and integrating various plugins to meet the client's needs, with a focus on aesthetics and user engagement.",
        image: "https://zenexperience.com/cdn/shop/files/Logo-1-with-TM_ee123a29-2576-4031-923f-45d5c3e4897e.png?v=1741793449&width=360",
        url: "https://www.zenexperience.com",
        tags: [
            { name: "Shopify", icon: FaShopify  },
            { name: "JavaScript", icon: IoLogoJavascript   },
            { name: "PHP", icon: SiPhp },

        ],
        year: [2024],
        status: "Completed",
    },
    


]