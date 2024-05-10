import {
  eggImg,
  cupImg,
  graphicdesignImg,
  photographyImg,
  emilyImg,
  thomasImg,
  jennieImg,
  illustrative1,
  illustrative2,
  illustrative3,
  illustrative4,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  pinterestIcon,
  mobileIllustrative1,
  mobileIllustrative2,
  mobileIllustrative3,
  mobileIllustrative4,
  mobilePhotographyImg,
  mobilegraphicdesignImg
  
} from "../assets";
const landingData = [
  {
    label: "About",
    isActive: false,
  },
  {
    label: "Services",
    isActive: false,
  },
  {
    label: "Projects",
    isActive: false,
  },
  {
    label: "Contact",
    isActive: true,
  },
];

const firstSectionData = [
  {
    title: "Transform your brand",
    content:
      " We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. ",
    image: eggImg,
    btnStyleColor: "bg-yellow",
  },
  {
    title: "Stand out to the right audience",
    content:
      " Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
    image: cupImg,
    btnStyleColor: "bg-[hsla(6.8,98.7%,70%)]",
  },
];

const firstSectionData2 = [
  {
    title: "Graphic Design",
    content:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. ",
    image: graphicdesignImg,
    mobileImg : mobilegraphicdesignImg
  },
  {
    title: "Photography",
    content:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image. ",
    image: photographyImg,
    mobileImg : mobilePhotographyImg
  },
];

const testimonialData = [
  {
    user: "Emily R.",
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. ",
    image: emilyImg,
    role: " Marketing Director ",
  },
  {
    user: "Thomas S.",
    comment:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. ",
    image: thomasImg,
    role: " Chief Operating Officer ",
  },
  {
    user: "Jennie F.",
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! ",
    image: jennieImg,
    role: " Business Owner ",
  },
];

const illustrativeData = [
  {
    image: illustrative1,
    mobileImg : mobileIllustrative1
  },
  {
    image: illustrative2,
    mobileImg : mobileIllustrative2
  },
  {
    image: illustrative3,
    mobileImg : mobileIllustrative3
  },
  {
    image: illustrative4,
    mobileImg : mobileIllustrative4
  },
];

const footerSocialsData = [
  {
    icon: facebookIcon,
  },
  {
    icon: instagramIcon,
  },
  {
    icon: twitterIcon,
  },
  {
    icon: pinterestIcon,
  },
]

export { landingData, firstSectionData, firstSectionData2, testimonialData , illustrativeData , footerSocialsData};
