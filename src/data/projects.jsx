import coverloveLogo from '../assets/images/round_icons/coverlove.png';
import hearoLogo from '../assets/images/round_icons/hearo.png';
import igurmeLogo from '../assets/images/round_icons/igurme.png';
import jamblrLogo from '../assets/images/round_icons/jamblr.png';
import polysentryLogo from '../assets/images/round_icons/polysentry.png';
import potenciaLogo from '../assets/images/round_icons/potencia.png';
import redorblueLogo from '../assets/images/round_icons/redorblue.png';
import tunewiseLogo from '../assets/images/round_icons/tunewise.png';
import claimmateLogo from '../assets/images/round_icons/claimmate.png';

const projects = {
  redorblue: {
    name: 'Red or Blue',
    logo: redorblueLogo,
    color: 'rgb(195, 55, 238)',
    title: 'A 2D puzzle platformer game with a twist.',
    description: [
      'Red or Blue started as our final project for Professor Jason Wiser’s Game Design class at Tufts University. The game opens with our protagonist falling asleep in his bed and waking up in a dream-like version of his school. Armed with magic 3D glasses, he has to find a way to escape while facing the bullies that harass him in real life. ',
      'Traditional 2D platformers often focus on mutating gameplay mechanics, such as giving the player different power ups, in order to change the way the player interacts with the game world. With Red or Blue, we wanted the game world itself to change and for the players to use those changes to their own advantage. Thus, we purposefully limited the player’s abilities so he is relatively powerless and has to rely on the red/blue switching to overcome challenges.',
      'On the other hand, we wanted the gameplay to feel smooth and key presses to feel predictable, so we took a page out of Super Mario World’s playbook and standardized all movements to align with the tile map. Finally, we felt like too many modern platformers relied on pure timing and reflex to make their games difficult. This results in frustrating gameplay where the players dying over and over again until they finally beat the level through muscle memory. In Red or Blue, we reward the player for being patient, observant, and for using their memory to tackle puzzles — the challenge comes from discovering the path forward rather than the execution itself.',
      'For most of us who made Red or Blue, this was our first time creating a game. We had a lot of fun working on it, and received many praises for its fun mechanics, tight gameplay, and overall polish.',
    ],
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/embed/9Tag0OPSJdg',
    techs: ['Unity, C#, Photoshop, PyxelEdit'],
  },
  hearo: {
    name: 'Hearo',
    logo: hearoLogo,
    color: 'rgb(67, 115, 130)',
    title: 'Your conference call personal assistant.',
    description:
      'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    platforms: {
      github: 'https://github.com/ralfisalhon/Hearo-noSensitive',
    },
    video: 'https://www.youtube.com/embed/QadrLYQTbFI',
    techs: ['React Native, Voximplant API, Google Speech-to-Text API, Twilio API'],
  },
  jamblr: {
    name: 'Jamblr',
    logo: jamblrLogo,
    color: '#2f2f2f',
    title: 'Your music discovery and playlist creation platform.',
    description: [
      'This took a really fun 4 months to make. But it started a lot simpler than that. In fact, we had a working demo in a day.',
      'Polyhack 2018',
    ],
    awards: [' Hubspot Special Award, Polyhack 2018'],
    platforms: {
      github: 'https://github.com/ralfisalhon/jamblr-polyhack2018',
      appstore: 'https://apps.apple.com/us/app/jamblr-discover-new-music/id1450608022',
    },
    screenshots: [
      'https://placehold.it/1334x750',
      'https://placehold.it/1334x750',
      'https://placehold.it/1334x750',
      'https://placehold.it/1334x750',
      'https://placehold.it/1334x750',
    ],
    techs: ['React Native, Node.js, Heroku, Spotify API, Testflight'],
  },
  coverlove: {
    name: 'CoverLove',
    logo: coverloveLogo,
    color: 'rgb(243, 156, 18)',
    title: 'A simple tool to create new playlist cover art.',
    description: [
      'I made and deployed this app in under 24 hours as a self-hackathon',
      'To my surprise, it is my most downloaded app ever with over 10k downloads.',
    ],
    platforms: {
      github: 'https://github.com/ralfisalhon/coverlove',
      appstore: 'https://apps.apple.com/us/app/coverlove-cover-art-maker/id1458456335',
    },
    screenshots: ['https://placehold.it/1334x750', 'https://placehold.it/1334x750', 'https://placehold.it/1334x750'],
    techs: ['React Native'],
  },
  polysentry: {
    name: 'PolySentry',
    logo: polysentryLogo,
    color: 'rgb(1, 163, 164)',
    title: 'Security platform that provides real-time threat protection.',
    description: 'Some freelance work... Hong Kong',
    platforms: {
      appstore: 'https://apps.apple.com/us/app/polysentry/id1468691133',
      playstore: 'https://play.google.com/store/apps/details?id=com.polysentry',
      website: 'https://polysentry.com/',
    },
    techs: ['React Native, Node.js, Firebase API, Testflight'],
  },
  tunewise: {
    name: 'TuneWise',
    logo: tunewiseLogo,
    color: 'rgb(100, 43, 168)',
    title: 'Music centered mobile party game.',
    description: 'Get that party on',
    awards: ['Best Mobile App, Polyhack 2019'],
    platforms: {
      github: 'https://github.com/ralfisalhon/TuneWise',
      website: 'https://github.com/ralfisalhon/TuneWise-web',
    },
    techs: ['React Native, Node.js, Heroku'],
  },
  potencia: {
    name: 'Potencia',
    logo: potenciaLogo,
    color: 'rgb(35, 105, 246)',
    title: 'A social outreach and education platform.',
    description: 'Free lance work... Somerville',
    platforms: {
      github: 'https://github.com/ralfisalhon/Potentia',
      website: 'https://www.potenciaus.org/',
    },
    techs: ['React Native, Node.js, Heroku'],
  },
  igurme: {
    name: 'iGurme',
    logo: igurmeLogo,
    color: 'chocolate',
    title: 'An e-commerce app designed to test SDK features.',
    description: 'Insider internship. User by over 10 countries',
    platforms: {
      github: 'https://github.com/ralfisalhon/iGurme-Docs',
    },
    techs: ['React Native, Firebase API, Insider API'],
  },
  claimmate: {
    name: 'ClaimMate',
    logo: claimmateLogo,
    color: 'rgb(18, 47, 66)',
    title: 'A Global Legal Hackathon Finalist',
    description: 'Done in 48 hours. I slept like 5 hours.',
    awards: ['2nd Place, Global Legal Hackathon'],
    platforms: {
      github: 'https://github.com/ralfisalhon/CLAIMate',
      website: 'https://globallegalhackathon.com/',
    },
    video: 'https://www.youtube.com/embed/3uotkVSIglA',
    techs: ['React Native'],
  },
};

export default projects;
