import { arrowDown } from "../assets";
import { Section, SecCont, SecCard, TestiCont } from "./common";

import {
  firstSectionData,
  firstSectionData2,
  testimonialData,
  illustrativeData,
} from "../data";

export const Main = () => {
  const firstSectionElement = firstSectionData?.map((data, index) => (
    <SecCont
      key={index}
      title={data.title}
      image={data.image}
      content={data.content}
      styleColor={data.btnStyleColor}
      index={index}
    />
  ));
  const firstSectionSecElement = firstSectionData2?.map((data, index) => (
    <SecCard
      key={index}
      title={data.title}
      image={data.image}
      mobileImg={data.mobileImg}
      content={data.content}
      index={index}
    />
  ));

  const userTestimonialElement = testimonialData?.map((data, index) => (
    <TestiCont
      key={index}
      image={data.image}
      user={data.user}
      comment={data.comment}
      role={data.role}
      index={index}
    />
  ));

  const illustrativeElement = illustrativeData?.map((data, index) => (

    <picture key={index}>
      <source media="(min-width : 56.25rem)" srcSet={data.image} />
      <img
        className=" w-full align-bottom"
        src={data.mobileImg}
        alt="this is image"
      />
    </picture>


  ));

  return (
    <main>
      <div className="min-h-[50rem] bg-mobile-hero-bg Mobile:bg-hero-bg bg-no-repeat bg-center bg-cover grid place-items-center text-center text-white content-start pt-[11rem]  sm:pt-[11.5rem] gap-14 sm:gap-20 text-pretty     ">
        <h1
          className="uppercase font-bold tracking-[0.2em] "
          style={{ fontSize: "clamp(2.8rem, -0.5rem + 6.4vw, 3.45rem)" }}
        >
          We are creatives
        </h1>
        <img
          src={arrowDown}
          alt="scroll-down"
          className="w-9  h-full mt-3  Desktop:mt-1 "
        />
      </div>
      <Section>{firstSectionElement}</Section>
      <Section>{firstSectionSecElement}</Section>

      <Section style=" grid-cols-[1fr] place-items-center gap-20 p-[4rem_2.25rem] Tablet:p-[10rem_10rem] text-center Tablet:text-start  ">
        <h1
          className="font-bold uppercase  tracking-[0.42em] text-dark-grayish-blue"
          style={{ fontSize: "clamp(0.9rem, -0.4286rem + 3.8095vw, 1.5rem)" }}
        >
          Client testimonials{" "}
        </h1>
        <div className=" grid grid-cols-1 Tablet:grid-cols-3 place-content-center place-items-center gap-12 ">
          {userTestimonialElement}
        </div>
      </Section>
      <div className=" grid-cols-2 Tablet:grid-cols-4 grid  ">
        {illustrativeElement}
      </div>
    </main>
  );
};
