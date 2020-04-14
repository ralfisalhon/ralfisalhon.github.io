import coverloveLogo from '../assets/images/round_icons/coverlove.png';
import hearoLogo from '../assets/images/round_icons/hearo.png';
import igurmeLogo from '../assets/images/round_icons/igurme.png';
import jamblrLogo from '../assets/images/round_icons/jamblr.png';
import polysentryLogo from '../assets/images/round_icons/polysentry.png';
import potenciaLogo from '../assets/images/round_icons/potencia.png';
import redorblueLogo from '../assets/images/round_icons/redorblue.png';
import tunewiseLogo from '../assets/images/round_icons/tunewise.png';
import { createPortal } from 'react-dom';

const projects = {
  redorblue: {
    name: 'Red or Blue',
    logo: redorblueLogo,
    color: 'rgb(195, 55, 238)',
    title: 'A 2D puzzle platformer game with a twist.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  hearo: {
    name: 'Hearo',
    logo: hearoLogo,
    color: 'rgb(67, 115, 130)',
    title: 'Your conference call personal assistant.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  jamblr: {
    name: 'Jamblr',
    logo: jamblrLogo,
    color: 'gray',
    title: 'Your music discovery and playlist creation platform.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  coverlove: {
    name: 'coverlove',
    logo: coverloveLogo,
    color: 'rgb(243, 156, 18)',
    title: 'A simple tool to create new playlist cover art.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  polysentry: {
    name: 'PolySentry',
    logo: polysentryLogo,
    color: 'rgb(1, 163, 164)',
    title: 'Security platform that provides real-time threat protection.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  tunewise: {
    name: 'TuneWise',
    logo: tunewiseLogo,
    color: 'rgb(100, 43, 168)',
    title: 'Music centered mobile party game.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  potencia: {
    name: 'Potencia',
    logo: potenciaLogo,
    color: 'rgb(35, 105, 246)',
    title: 'A social outreach and education platform.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
  igurme: {
    name: 'iGurme',
    logo: igurmeLogo,
    color: 'coral',
    title: 'An e-commerce app designed for testing SDK features.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/watch?v=9Tag0OPSJdg&feature=emb_logo',
  },
};

export default projects;
