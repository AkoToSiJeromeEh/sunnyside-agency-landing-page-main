import { logo } from "../assets"
import { footerSocialsData , landingData} from "../data"
import { List } from "./common"

export const Footer = () => {

  const footerlinksElement = landingData?.map((data , index) => (

     <List
      key={index}
      label={data.label}
      isActive={data.isActive}
     />
  ))

  const footerSocialElement = footerSocialsData?.map((data, index) => (

    <img key={index} className="w-6 h-6 m-auto" src={data.icon} alt="icon" />

  ))


  return (
	<footer className=" bg-[#90d4c5] grid place-items-center p-9  Tablet:p-[5rem_10rem] min-h-[25rem] w-full gap-[8rem] h-full place-content-center   ">
    <div>
        <div className="add-filter ">
         <img className="w-18 h-9 m-auto   " src={logo} alt="logo" />
        </div>
      <ul className=" flex gap-9 w-full  sm:gap-14 mt-8 text-dark-desaturated-cyan">
        {footerlinksElement.slice(0 , 3)}
      </ul>
    </div>
    <div className=" flex flex-row gap-8">
        {footerSocialElement}
    </div>
  </footer>
  )
}

