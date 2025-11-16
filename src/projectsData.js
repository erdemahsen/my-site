import notBeenIcon from "./assets/notBeenIcon.png"
import metuAppIcon from "./assets/metuAppIcon.png"

export const projectsData = [
  {
    id: 1,
    image: metuAppIcon,
    title: "METU App",
    description: "Official mobile app for METU. Cafeteria, bus routes, calendar & more. 10,000+ users.",
    links: {
      website: "https://metuapp.ceng.metu.edu.tr/", 
      googlePlay: "https://play.google.com/store/apps/details?id=tr.edu.metu.ceng.metuapp", 
      appStore: "https://apps.apple.com/us/app/metu-app/id6741060769" 
    }
  },
  {
    id: 2,
    image: notBeenIcon,
    title: "NotBeen App",
    description: "A React Native clone of the 'Been' app for tracking travel locations.",
    links: {
      github: "https://github.com/erdemahsen/notBeen", 
    }
  }
];