import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "../components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";
import Testimonials from "@/components/testimonials/testimonials";
import Footer from "@/components/footer/footer";

// IMAGE IMPORTATION
import prifinaLeft from "@/public/images/PNG/prifina-left.png";
import prifinaRight from "@/public/images/SVG/prifina-right.svg";
import oppiaLeft from "@/public/images/PNG/oppia-left.png";
import oppiaRight from "@/public/images/SVG/oppia-right.svg";
import jogovest from "@/public/images/SVG/jogovest.svg";
import buttonBlack from "@/public/images/PNG/button.png";
import oppia1 from "@/public/images/PNG/oppia1.png";
import oppia2 from "@/public/images/PNG/oppia2.png";
import moppia1 from "@/public/images/PNG/moppia1.png";
import moppia2 from "@/public/images/PNG/moppia2.png";
import jogovest1 from "@/public/images/PNG/jogovest1.png";
import jogovest2 from "@/public/images/PNG/jogovest2.png";
import mjogovest1 from "@/public/images/PNG/mjogovest1.png";
import mjogovest2 from "@/public/images/PNG/mjogovest2.png";
import tastyandyummy from "@/public/images/PNG/tastyandyummy.png";
import form1 from "@/public/images/PNG/form1.png";
import form2 from "@/public/images/PNG/form2.png";
import form3 from "@/public/images/PNG/form3.png";
import form4 from "@/public/images/PNG/form4.png";
import prototype from "@/public/images/prototype2.gif";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main className="px-5 xl:px-0">
        {/* HERO SECTION */}
        <Container>
          <section className="pt-14 lg:pt-20 flex flex-col gap-6 lg:gap-10">
            {/* TOP */}
            <article className="">
              <h1 className="max-w-[895px] text-[32px] lg:text-[72px] leading-[120%] lg:leading-[100%] font-medium tracking-[-1.28px] lg:tracking-[-2.88px]">
                Designing digital solutions that simplifies lives
              </h1>
            </article>

            {/* MIDDLE */}
            <article className="flex flex-col lg:flex-row gap-24 lg:items-end">
              {/* left */}
              <article className="hidden lg:flex flex-col gap-4">
                <h6 className="cod-gray-500 font-semibold tracking-[-0.32px]">
                  Some companies I have worked with
                </h6>
                {/* LIST OF COMPANIES */}
                <article className="flex items-center gap-[52px]">
                  {/* PRIFINA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-[50px] h-[50px]"
                      src={prifinaLeft}
                      alt="Prifina Company Logo"
                    />
                    {/* RIGHT */}
                    <Image
                      className=""
                      src={prifinaRight}
                      alt="Prifina Company Logo"
                    />
                  </article>

                  {/* OPPIA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-6 h-[23.517px]"
                      src={oppiaLeft}
                      alt="Oppia Company Logo"
                    />
                    {/* RIGHT */}
                    <Image
                      className=""
                      src={oppiaRight}
                      alt="Oppia Company Logo"
                    />
                  </article>

                  {/* JOGOVEST */}
                  <article>
                    <Image src={jogovest} alt="Jogovest Company Logo" />
                  </article>
                </article>
              </article>

              {/* right */}
              <article>
                <p className="max-w-[534px] cod-gray-700 text-[14px] lg:text-[18px] leading-[140%] tracking-[-.14px] lg:tracking-[-.18px]">
                  Hi, my name is Ibukun Abejide, a passionate product designer
                  on a mission to build successful products for millions of
                  users across the world. I have experience working in the
                  Fintech, E-commerce, EdTech and AI sectors and have also
                  helped more than 100 people get into tech.
                </p>
              </article>
            </article>

            {/* MOBILE - 1 */}
            <article className="relative shrink-0 flex lg:hidden justify-center items-center">
              <Link
                className="absolute absolute-center whitespace-nowrap leading-6 block font-bold text-black text-[16px]"
                href={"/Ibukun-Abejide-Resume-2023.pdf"}
                download={"Ibukun_Abejide_Resume_2023.pdf"}
              >
                Download resume
              </Link>

              {/* BUTTON IMAGE - CENTERED */}
              <Image
                className="w-[277px] h-auto"
                src={buttonBlack}
                alt="Download resume"
              />
            </article>

            {/* MOBILE - 2 */}
            <article className="flex lg:hidden flex-col gap-2 my-4">
              <h6 className="cod-gray-500 text-[14px] font-semibold tracking-[-0.28px]">
                Some companies I have worked with
              </h6>
              {/* LIST OF COMPANIES */}
              <article className="flex items-center gap-y-6 gap-x-10 lg:gap-[52px] flex-wrap">
                {/* PRIFINA */}
                <article className="flex items-center gap-2">
                  {/* LEFT */}
                  <Image
                    className="w-[38.07px] h-[38.07px] lg:w-[50px] lg:h-[50px]"
                    src={prifinaLeft}
                    alt="Prifina company logo"
                  />
                  {/* RIGHT */}
                  <Image
                    className="w-[43px] h-auto"
                    src={prifinaRight}
                    alt="Prifina company logo"
                  />
                </article>

                {/* OPPIA */}
                <article className="flex items-center gap-2">
                  {/* LEFT */}
                  <Image
                    className="w-[18.273px] h-auto"
                    src={oppiaLeft}
                    alt="Oppia company logo"
                  />
                  {/* RIGHT */}
                  <Image
                    className="w-[103.549px] h-auto"
                    src={oppiaRight}
                    alt="Oppia company logo"
                  />
                </article>

                {/* JOGOVEST */}
                <article>
                  <Image
                    className="w-[99.361px]"
                    src={jogovest}
                    alt="Jogovest company logo"
                  />
                </article>
              </article>
            </article>

            {/* BOTTOM */}
            <article className="flex items-center gap-24 justify-between">
              {/* left */}
              <article>
                <p className="jaffa-600 italic leading-[160%] lg:leading-normal text-[16px] lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                  “Design isn’t finished until somebody is using it” - Brenda
                  Laurel
                </p>
              </article>

              {/* right */}
            </article>
          </section>
        </Container>

        {/* DIVIDER */}
        <div className="pt-14 lg:pt-20" id="recent-works">
          <Divider bgColor={"bg-[#E5E8E8]"} />
        </div>

        <Container>
          {/* RECENT WORKS */}
          <section className="py-14 lg:pt-14 lg:pb-[108px] flex flex-col gap-6 lg:gap-14">
            {/* TEXT */}
            <h2 className="text-[32px] leading-[120%] tracking-[-1.28px] lg:text-[56px] lg:leading-[100%] lg:tracking-[-2.24px] font-medium">
              Recent works
            </h2>

            {/* 3 CASE STUDIES */}
            <section className="w-full flex flex-col gap-5">
              {/* OPPIA */}
              <article className="rounded-[12px] bg-[#EFFEF3] p-8 gap-12 lg:p-0 lg:px-14 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <article className="flex flex-col gap-6 lg:gap-10 lg:pt-14 lg:pb-[156px]">
                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="cod-grap-800 text-[24px] lg:text-[40px] font-semibold">
                      Oppia
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      Oppia Beta- I conducted market research and user testing
                      to improve the user experience of the app, I also worked
                      on the language translation feature which led to 30%
                      increase in the number of users.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"/case-study/oppia"}
                    />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex justify-center lg:justify-normal w-full gap-4 lg:gap-x-6">
                  {/* 234.358px */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block self-start"
                    src={oppia2}
                    alt="Oppia Mobile App"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 self-start"
                    quality={100}
                    src={moppia1}
                    alt="Oppia Mobile App"
                  />
                  {/*  */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block mt-[90px] lg:mt-0 self-end"
                    src={oppia1}
                    alt="Oppia Mobile App"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 mt-[90px] lg:mt-0 self-end"
                    quality={100}
                    src={moppia2}
                    alt="Oppia Mobile App"
                  />
                </article>
              </article>

              {/* Jogovest */}
              <article className="rounded-[12px] bg-[#F5F6F6] p-8 gap-12 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[auto_1fr] lg:gap-x-8">
                {/* LEFT */}
                <article className="order-2 lg:order-1 flex justify-center lg:justify-center w-full gap-x-6">
                  {/* 234.358px */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block self-start"
                    src={jogovest1}
                    alt="Jogovest Mobile App"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 self-start"
                    src={mjogovest1}
                    alt="Jogovest Mobile App"
                  />
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block pt-[90px] lg:pt-0 self-end"
                    src={jogovest2}
                    alt="Jogovest Mobile App"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 pt-[90px] lg:pt-0 self-end"
                    src={mjogovest2}
                    alt="Jogovest Mobile App"
                  />
                </article>

                {/* RIGHT */}
                <article className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-10 lg:pt-14 lg:pb-[186px]">
                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="cod-grap-800 text-[24px] lg:text-[40px] font-semibold">
                      Jogovest
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      As the solo designer, I played a pivotal strategic role in
                      designing the mobile app with the goal of achieving a
                      product market fit.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"/case-study/jogovest"}
                    />
                  </article>
                </article>
              </article>

              {/* Tasty & Yummy */}
              <article className="rounded-[12px] bg-[#FEF6EE] gap-12 p-8 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <article className="flex flex-col gap-6 lg:gap-10 lg:pt-[56px] lg:pb-[128px]">
                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="cod-grap-800 text-[24px] lg:text-[40px] font-semibold">
                      Tasty & Yummy
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      Tasty and Yummy is a recipe platform for cook enthusiasts,
                      stay at home mums. I designed the landing page, the sign
                      up page and the recipe page and integrated the shopping
                      feature that helps users shop for ingredients via the
                      website.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"/case-study/tasty-and-yummy"}
                    />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex w-full gap-x-6 items-center">
                  {/* 234.358px */}
                  <Image
                    className="w-[543px] h-auto shrink-0"
                    src={tastyandyummy}
                    alt="Tasty and Yummy website"
                  />
                </article>
              </article>

              {/* Visual Design */}
              <article className="flex mt-6 lg:mt-[60px] flex-col gap-6 lg:gap-11 ">
                {/* TEXT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h3 className="text-[24px] leading-[38.4px] lg:text-[56px] lg:leading-[56px] font-medium text-[#0C0D0D]">
                    Visual Snapshots
                  </h3>
                </article>
                {/* Prototype */}
                <article>
                  <Image src={prototype} alt="GIF video" />
                </article>
                {/* IMAGES */}
                {/* <article className="grid lg:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6 items-start">
                  <article className="border-[0.91px] border-[#CECED2] shadow-[-21.69px_-2.763px_90.36px_0px_rgba(239,254,243,0.15)]">
                    <Image src={form1} alt="" />
                  </article>
                  <article className="border-[0.91px] border-[#CECED2] shadow-[-21.69px_-2.763px_90.36px_0px_rgba(239,254,243,0.15)]">
                    <Image src={form2} alt="" />
                  </article>
                  <article className="border-[0.91px] border-[#CECED2] shadow-[-21.69px_-2.763px_90.36px_0px_rgba(239,254,243,0.15)]">
                    <Image src={form3} alt="" />
                  </article>
                  <article className="border-[0.91px] border-[#CECED2] shadow-[-21.69px_-2.763px_90.36px_0px_rgba(239,254,243,0.15)]">
                    <Image src={form4} alt="" />
                  </article>
                </article> */}
              </article>
            </section>
          </section>
        </Container>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
