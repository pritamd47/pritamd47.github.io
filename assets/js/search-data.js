// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "assortment of open-source contributions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-hiring-two-teaching-research-assistants-for-funded-phd-spring-2026-intake-the-scholar-will-work-in-satellite-remote-sensing-and-hydrology-on-projects-titled-multi-satellite-sensor-water-probe-and-quantifying-streamflow-in-regulated-rivers-the-topics-are-tentative-and-the-eventual-direction-of-research-may-change-if-you-re-interested-please-send-your-cv-and-a-statement-of-purpose-at-pritam-das-at-iitb-ac-in-apply-at-iitb-s-academics-research-portal",
          title: 'Hiring two Teaching/Research Assistants for funded PhD (Spring 2026) intake. The scholar will...',
          description: "",
          section: "News",},{id: "projects-reservoir-assessment-tool-rat-mekong",
          title: 'Reservoir Assessment Tool (RAT) - Mekong',
          description: "Remote Sesnsing and Hydrologic Modeling enables tracking of reservoir operations and water availability in the Mekong River Basin.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rat-mekong/";
            },},{id: "projects-plotting-large-climate-data-interactively",
          title: 'Plotting large climate data interactively',
          description: "Climate data can be large. Not just climate data, similar datasets – satellite remote sensing, lidar, model data - all can be large, and difficult to work with, including visualizing them performantly. In this project, I explore different ways to visualize large data, with the goal to let users interact with the underlying large dataset in a performant way.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/siparcs-interactive-vis/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%69%74%61%6D%64%34%37{%61%74}%67%6D%61%69%6C[%64%61%77%74]%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pritamd47# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pdas47", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4795-4736", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lrfA5goAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
