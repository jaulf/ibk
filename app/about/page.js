import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "@/components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";

// IMAGE IMPORTATION
import about1 from "@/public/images/PNG/about1.png";
import mabout1 from "@/public/images/PNG/mabout1.png";
import gallery1 from "@/public/images/PNG/gallery1.png";
import gallery2 from "@/public/images/PNG/gallery2.png";
import gallery3 from "@/public/images/PNG/gallery3.png";
import gallery4 from "@/public/images/PNG/gallery4.png";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <Container>
        <main>
          {/* HERO SECTION */}
          <section className="grid items-center lg:grid-cols-[auto_1fr] gap-4 lg:pr-[120px]">
            {/* IMAGE - LEFT */}
            <article className="flex justify-center items-center">
              {/* MOBILE */}
              <Image
                className="block lg:hidden max-w-[242.985px] w-full h-auto shrink-0"
                src={mabout1}
                placeholder="blur"
                alt=""
              />

              {/* DESKTOP */}
              <Image
                className="hidden lg:block w-full min-w-[546px] max-w-[546px] h-auto shrink-0"
                src={about1}
                placeholder="blur"
                alt=""
              />
            </article>

            {/* TEXT - RIGHT */}
            <article className="pt-4 px-5 lg:px-0 lg:pt-[148px] pb-14 lg:pb-0 flex flex-col gap-6">
              <h1 className="text-[32px] lg:text-[72px] font-medium leading-[100%] tracking-[-1.28px] lg:tracking-[-2.88px]">
                About IBK
              </h1>

              <p className="cod-gray-700 text-justify text-[14px] lg:text-[18px] leading-[120%] lg:leading-[140%]">
                My name is Ibukun Abejide, I am a Product Designer currently
                working at Prifina. Prior to that, I worked at Oppia Foundation,
                a platform for educating less privilege children where I
                contributed to the implementation of the voice and language
                feature which resulted into 10,000 more users across Africa.{" "}
                <span>
                  <br />
                  <br />
                </span>
                My favorite part of being a designer is the ability to
                understand user&apos;s needs, solve their problems and also
                ensure the company is making good business decisions. Asides
                from being a designer, I have also mentored over 100 people who
                are passionate about design.{" "}
              </p>
            </article>
          </section>

          {/* GRID - 4 in 1 */}
          <section className="pt-5 pb-14 px-5 lg:py-20 grid lg:grid-cols-2 lg:px-[120px] gap-5">
            {/* 1 */}
            <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
              {/* header */}
              <h4 className="max-w-[329px] text-[24px] lg:text-[32px] leading-normal font-semibold">
                My journey into the creative space
              </h4>
              {/* SUB TEXT */}
              <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                <p>
                  Before I became a Product Designer, I was a Customer
                  Representative officer at the bank where I assisted a lot of
                  customers in solving transaction and loan issues. I learnt how
                  to communicate effectively and I also gained the trust of
                  customers. <br />
                  <br /> I love to evolve and face new challenges, that was why
                  I transitioned into tech. Check out my recent interview on not
                  just design podcast for more gist on my journey into tech.
                </p>
              </article>
            </article>

            {/* 2 */}
            <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
              {/* header */}
              <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                My Achievements so far..
              </h4>
              {/* SUB TEXT */}
              <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                <p>
                  1. Helped more than 100 people transition into Product Design.
                </p>
                <br />
                <p>
                  2. Worked on multiple features on an EdTech product that
                  increased the number of users to 1000.
                </p>
                <br />
                <p>
                  3. Contributed to the development and implementation of a
                  social media strategy for the RoadTrip Community.
                </p>
                <br />
              </article>
            </article>

            {/* 3 */}
            <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
              {/* header */}
              <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                Reasons why you should work with me
              </h4>
              {/* SUB TEXT */}
              <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                <p>
                  1. Over the years, I have demonstrated team spirit and I have
                  successfully collaborated with members on the team.
                </p>
                <br />
                <p>2. I work and communicate efficiently.</p>
                <br />
                <p>3. I am not only creative, I am also business oriented.</p>
                <br />
              </article>
            </article>

            {/* 4 */}
            <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4">
              {/* HEADING */}
              <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                Favorites
              </h4>

              {/* CONTENTS */}
              <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%] flex flex-col gap-8">
                {/* 4.1 - BOOKS */}
                <article className="flex flex-col gap-4">
                  {/* BOOKS - SUBHEADING */}
                  <article className="flex items-center gap-2">
                    {/* BOOKS ICON */}
                    <article>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.1307 19.1851L13.5544 23.0626C13.0257 23.3119 12.4744 23.2876 11.9682 22.9951L1.1419 17.4976C0.832527 17.2988 0.740652 17.0082 0.759402 16.8057C0.778152 16.6032 0.825027 16.3838 1.36878 16.2263L2.17128 15.9301L13.0313 21.8494L20.7488 18.6957L22.1307 19.1851Z"
                          fill="#01579B"
                        />
                        <path
                          d="M13.4513 22.4419C13.2369 22.5425 13.0015 22.5905 12.7648 22.5821C12.5281 22.5736 12.2968 22.5088 12.0901 22.3931L1.52068 17.0681C1.37068 16.9856 1.32568 16.7962 1.41568 16.65C1.64818 16.2656 2.07568 15.0506 1.37068 14.0419L13.3069 19.7887L13.4513 22.4419Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M21.6732 18.7462L13.4513 22.4419C13.1794 22.56 12.6376 22.77 12.0132 22.35C12.5063 22.3856 12.8532 22.1812 13.0313 21.8494C13.2057 21.5269 13.1532 20.9981 12.9413 20.7C12.8119 20.52 12.4651 20.2331 12.3132 20.0719L21.2063 16.5937C21.9938 16.2694 22.7326 16.755 22.8507 17.3456C22.9819 18.0131 22.1307 18.5587 21.6732 18.7462Z"
                          fill="#94C6D6"
                        />
                        <path
                          d="M22.0838 16.305L13.5957 20.0925C13.0613 20.3044 12.4632 20.2763 11.9513 20.0175L1.1063 14.5088C1.0013 14.4563 0.845676 14.3119 0.783801 14.115C0.682551 13.7869 0.810051 13.3744 1.19443 13.2432L12.9469 19.2338L20.9944 15.7894L22.0838 16.305Z"
                          fill="#01579B"
                        />
                        <path
                          d="M22.7231 16.8543L21.7988 16.5187L19.8938 16.6293L13.5975 19.4399C13.0631 19.6518 12.465 19.6237 11.9531 19.3649L1.10626 13.8581C0.826881 13.7156 0.886881 13.3012 1.19438 13.2431L9.01126 9.74619C9.23438 9.70494 9.46313 9.72931 9.67126 9.81744L20.8256 15.1349C20.8256 15.1349 22.5975 16.3481 22.7231 16.8543Z"
                          fill="#0091EA"
                        />
                        <path
                          d="M19.7868 16.6838C19.7868 16.6838 20.9606 16.2244 21.8831 16.2657C22.8056 16.3069 23.1262 16.9538 23.1262 16.9538C22.9518 16.1607 22.1325 15.7557 22.1325 15.7557L9.94497 9.61878C9.8606 9.58315 9.54935 9.51003 9.07122 9.7069C8.68497 9.86628 7.4231 10.4569 7.4231 10.4569L19.7868 16.6838Z"
                          fill="#616161"
                        />
                        <path
                          d="M23.1788 17.1037C23.0907 16.7531 22.8732 16.3781 22.4719 16.1962C21.9432 15.9581 21.1894 16.0199 20.7075 16.2712L19.7869 16.6799V17.3287L20.9513 16.8112C22.0838 16.3068 22.5863 17.0624 22.6294 17.2406C22.8094 17.9662 22.4607 18.3862 21.4313 18.8587L19.7588 19.6124V20.2649L21.6825 19.4081C22.5338 19.0668 23.505 18.4256 23.1788 17.1037Z"
                          fill="#424242"
                        />
                        <path
                          d="M6.18942 16.9331L2.95129 12.4575L3.45942 12.2306L7.10254 17.2368L6.18942 16.9331ZM10.3425 18.9956L9.76504 18.5381L19.7869 16.4925V16.8206L18.3825 17.3531L10.3425 18.9956Z"
                          fill="#01579B"
                        />
                        <path
                          d="M2.77502 8.6587L15.4331 6.5437L20.9625 12.6318C21.2419 12.9262 21.09 13.4137 20.6925 13.4943L7.62377 16.1756L2.77502 8.6587Z"
                          fill="#9CCC65"
                        />
                        <path
                          d="M20.6925 12.9694L7.71374 15.5982L7.67249 16.2169L20.6925 13.5469C21.06 13.47 21.2137 13.05 21.0131 12.7538C20.9419 12.8588 20.8331 12.9413 20.6925 12.9694ZM21.3919 15.8063C21.5287 16.0238 21.405 16.3107 21.1537 16.3613L9.20624 18.7838C8.48811 18.9319 7.78311 18.4613 7.71936 17.73C7.66499 17.1113 8.08311 16.5507 8.69249 16.4232L20.1825 13.8432L21.3919 15.8063Z"
                          fill="#689F38"
                        />
                        <path
                          d="M10.4231 15.0187L5.66437 8.20874L2.94937 8.92687C2.32125 9.55124 2.55562 10.5769 2.55562 10.5769C2.55562 10.5769 6.7125 17.2481 7.36875 18.1012C8.025 18.9544 8.98312 18.8212 8.98312 18.8212L10.6012 18.495L10.4325 15.4762L10.4231 15.0187Z"
                          fill="#616161"
                        />
                        <path
                          d="M10.4232 15.0638L8.13755 15.5363C7.51317 15.6769 7.40067 16.2638 7.40067 16.2638L1.88255 8.35693C1.88255 8.35693 1.09692 9.30756 1.61817 10.1157L7.3688 18.1013C7.99692 18.9957 8.98317 18.8288 8.98317 18.8288L10.6013 18.5026L10.4344 15.5438L10.4232 15.0638Z"
                          fill="#424242"
                        />
                        <path
                          d="M20.6719 15.5625C20.73 15.69 20.655 15.8381 20.5182 15.8662L9.09379 18.21C8.37567 18.3581 7.86754 17.8818 7.89379 17.2331C7.92754 16.4137 8.38692 16.0668 8.99442 15.9412L20.475 13.5956C20.475 13.5956 20.085 14.0343 20.3832 14.8556C20.4844 15.1387 20.5932 15.39 20.6719 15.5625Z"
                          fill="#B9E4EA"
                        />
                        <path
                          d="M8.47692 15.6937L3.5813 8.76746"
                          stroke="#424242"
                          stroke-width="2.071"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M8.86131 12.7406L2.56506 9.56812L2.31006 10.0706L9.58506 13.7775L8.86131 12.7406Z"
                          fill="#424242"
                        />
                        <path
                          d="M20.3981 12.0056L19.9368 11.4994L12.8437 14.7544L8.86121 12.7838L9.53996 13.755L12.1781 15.1031L14.1431 14.8013L20.3981 12.0056Z"
                          fill="#689F38"
                        />
                        <path
                          d="M22.1288 10.7532L13.5544 14.6307C13.0257 14.8801 12.4744 14.8557 11.9682 14.5632L1.1419 9.06568C0.832527 8.86693 0.740652 8.57631 0.759402 8.37381C0.778152 8.17131 0.825027 7.95193 1.36878 7.79443L1.8769 7.60693L12.9994 13.0651L22.0313 9.32818L22.1288 10.7532Z"
                          fill="#C62828"
                        />
                        <path
                          d="M13.4494 14.01C13.2349 14.1106 12.9996 14.1586 12.7628 14.1502C12.5261 14.1417 12.2948 14.0769 12.0881 13.9612L1.51873 8.63624C1.36873 8.55374 1.32373 8.36436 1.41373 8.21811C1.64623 7.83374 2.07373 6.61874 1.36873 5.60999L13.0387 11.5462L13.4494 14.01Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M21.6712 10.3143L13.4494 14.01C13.1775 14.1281 12.6356 14.3381 12.0112 13.9181C12.5044 13.9537 12.8512 13.7493 13.0294 13.4175C13.2037 13.095 13.1512 12.5662 12.9394 12.2681C12.81 12.0881 12.4631 11.8012 12.3112 11.64L21.2044 8.16185C21.9919 7.83747 22.7306 8.3231 22.8487 8.91372C22.98 9.58122 22.1287 10.1268 21.6712 10.3143Z"
                          fill="#94C6D6"
                        />
                        <path
                          d="M22.0838 7.87307L13.5956 11.6606C13.0613 11.8724 12.4632 11.8443 11.9513 11.5856L1.1044 6.07682C0.9919 6.02057 0.82315 5.87619 0.768775 5.67182C0.68815 5.36807 0.79315 4.96869 1.19253 4.81119L11.1319 2.70557L22.0838 7.87307Z"
                          fill="#C62828"
                        />
                        <path
                          d="M22.7213 8.42255L21.7969 8.08693L19.8919 8.19755L13.5956 11.0082C13.0613 11.2201 12.4632 11.1919 11.9513 10.9332L1.1044 5.42443C0.825025 5.28193 0.9244 4.90505 1.19253 4.80943L9.01128 1.31443C9.2344 1.27318 9.46315 1.29755 9.67128 1.38568L20.8256 6.70318C20.8256 6.70318 22.5956 7.91443 22.7213 8.42255Z"
                          fill="#F44336"
                        />
                        <path
                          d="M19.7869 8.24994C19.7869 8.24994 20.7638 7.90682 21.6863 7.94807C22.6088 7.98932 23.1282 8.51994 23.1282 8.51994C22.9388 7.67244 22.1344 7.32182 22.1344 7.32182L9.94692 1.18494C9.86255 1.14932 9.5513 1.07619 9.07317 1.27307C8.68692 1.43244 7.42505 2.02307 7.42505 2.02307L19.7869 8.24994Z"
                          fill="#616161"
                        />
                        <path
                          d="M20.9025 7.84881L8.43188 1.55818L8.84438 1.37256L21.5269 7.72881L20.9025 7.84881Z"
                          fill="#424242"
                        />
                        <path
                          d="M23.1768 8.67192C23.0887 8.3213 22.9406 7.98192 22.5225 7.80567C21.9881 7.58067 21.5006 7.5338 20.7056 7.83942L19.785 8.24817V8.89692L20.9493 8.37942C21.54 8.10192 22.41 8.16192 22.6275 8.8088C22.8656 9.51755 22.4587 9.95442 21.4293 10.4269L19.7568 11.1807V11.8332L21.6806 10.9763C22.5337 10.635 23.505 9.9938 23.1768 8.67192Z"
                          fill="#424242"
                        />
                      </svg>
                    </article>
                    {/* BOOKS TEXT */}
                    <h6 className="font-semibold text-[#0C0D0D]">Books</h6>
                  </article>

                  {/* BOOKS - LIST OF TEXTS */}
                  <article className="flex flex-col gap-4 text-[14px] lg:text-[16px]">
                    <p>Steal like an artist</p>
                    <p>How to sell yourself</p>
                    <p>The indispensable Designer </p>
                  </article>
                </article>

                {/* 4.2 - PODCAST */}
                <article className="flex flex-col gap-4">
                  {/* PODCAST - SUBHEADING */}
                  <article className="flex items-center gap-2">
                    {/* PODCAST ICON */}
                    <article>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19.3518 13.9894C19.3237 12.8232 17.0043 4.72692 16.4699 3.47254C15.8324 1.97442 15.1387 0.622541 11.9999 0.761291C9.24182 0.881291 6.84182 1.30129 5.15807 4.11379C3.8737 6.25879 7.44557 16.5863 8.40557 17.4975C8.75807 17.8332 9.52495 17.9888 10.4268 18.045C10.8581 19.3407 11.4656 21.1144 11.7449 21.6788C11.7449 21.6788 15.1593 21.3863 15.9037 21.2813C17.1581 21.1032 17.2499 19.9875 16.9668 18.9582C16.8506 18.5363 16.6687 18.0075 16.4962 17.5275C17.8518 17.1825 18.5737 16.6632 18.9506 15.9844C19.2862 15.3807 19.3687 14.6588 19.3518 13.9894Z"
                          fill="#B9E4EA"
                        />
                        <path
                          d="M16.7062 15.8681C14.94 16.0556 14.1487 15.8568 13.6106 15.3956C13.4118 15.2249 13.2937 14.9793 13.3256 14.7206C13.4306 13.8562 13.5187 13.3424 13.1306 11.9493L11.34 5.1037C10.6762 2.2162 8.28934 1.89182 6.34309 3.01495C5.01559 3.78182 4.37247 5.14307 4.75122 6.82495L7.10997 15.8456C7.40434 16.9724 7.88059 17.5799 8.52372 17.8143C8.72622 17.9549 9.01872 18.0524 9.37122 18.1199C9.59997 18.7274 9.92059 19.5731 10.2018 20.2856C10.6012 21.2943 10.9931 21.6768 11.745 21.6768C12.4968 21.6768 13.3162 21.1181 13.0275 19.9856C12.885 19.4212 12.705 18.7818 12.5362 18.2006C13.4662 18.1462 14.295 18.0618 14.7168 18.0412C18.1312 17.8799 19.185 16.3462 19.3256 14.8387C19.3256 14.8424 18.6768 15.6581 16.7062 15.8681Z"
                          fill="#82AEC0"
                        />
                        <path
                          d="M11.7437 21.0255C12.1763 20.9445 12.4403 20.4152 12.3332 19.8432C12.2262 19.2711 11.7888 18.873 11.3562 18.9539C10.9236 19.0349 10.6596 19.5642 10.7667 20.1362C10.8737 20.7083 11.3111 21.1064 11.7437 21.0255Z"
                          fill="#2F7889"
                        />
                        <path
                          d="M6.6431 6.68059C6.73402 6.62318 6.79885 6.53244 6.8237 6.42782C6.84855 6.3232 6.83144 6.213 6.77604 6.12084C6.72065 6.02867 6.63136 5.96186 6.52731 5.93471C6.42326 5.90757 6.31271 5.92224 6.21935 5.97559L4.81873 6.81747L5.0306 7.64997L6.6431 6.68059ZM7.30498 8.09622C7.24876 8.00275 7.15774 7.93543 7.0519 7.90906C6.94607 7.88269 6.8341 7.89943 6.7406 7.95559L5.3231 8.80684L5.53498 9.63934L7.16435 8.66059C7.35748 8.54434 7.42123 8.29122 7.30498 8.09622ZM7.82623 10.0781C7.77001 9.98463 7.67899 9.91731 7.57315 9.89094C7.46732 9.86457 7.35535 9.8813 7.26185 9.93747L5.82935 10.7981L6.04123 11.6306L7.6856 10.6425C7.87873 10.5243 7.94248 10.2712 7.82623 10.0781ZM8.34748 12.0581C8.29126 11.9646 8.20024 11.8973 8.0944 11.8709C7.98857 11.8446 7.8766 11.8613 7.7831 11.9175L6.3356 12.7875L6.54748 13.62L8.20685 12.6225C8.40185 12.5062 8.46373 12.2531 8.34748 12.0581ZM8.86873 14.0381C8.81251 13.9446 8.72149 13.8773 8.61565 13.8509C8.50982 13.8246 8.39785 13.8413 8.30435 13.8975L6.84185 14.7768L7.05373 15.6093L8.72998 14.6025C8.9231 14.4862 8.98498 14.2331 8.86873 14.0381Z"
                          fill="#424242"
                        />
                        <path
                          d="M10.7119 3.58313C9.87568 3.87938 8.13943 4.98751 8.13943 4.98751C8.04596 5.04372 7.97864 5.13475 7.95227 5.24058C7.9259 5.34641 7.94264 5.45838 7.9988 5.55188C8.05522 5.64512 8.14624 5.71224 8.25199 5.73859C8.35773 5.76494 8.46961 5.74837 8.56318 5.69251C8.56318 5.69251 10.2001 4.56563 11.0907 4.37438C11.7638 4.23001 13.3313 4.19438 13.3313 4.19438L13.1101 3.39563C13.1082 3.39376 11.1057 3.44251 10.7119 3.58313ZM11.3119 5.64376C10.4701 5.92501 8.71505 6.99938 8.71505 6.99938C8.66823 7.02619 8.62718 7.062 8.59427 7.10475C8.56136 7.14749 8.53724 7.19634 8.52329 7.24845C8.50935 7.30057 8.50586 7.35493 8.51303 7.4084C8.52019 7.46188 8.53788 7.5134 8.56505 7.56001C8.64005 7.68938 8.77505 7.7625 8.9138 7.76625C8.98505 7.76813 9.06005 7.74938 9.12568 7.71188C9.12568 7.71188 10.7832 6.61688 11.6757 6.44063C12.3507 6.30751 13.9201 6.26625 13.9201 6.26625L13.7138 5.46376C13.7138 5.46376 11.7094 5.51063 11.3119 5.64376ZM11.9138 7.70438C11.0663 7.97063 9.29255 9.01126 9.29255 9.01126C9.19733 9.06421 9.12693 9.15269 9.09671 9.25738C9.0665 9.36207 9.07894 9.47445 9.1313 9.57001C9.18433 9.66516 9.27281 9.73549 9.37747 9.7657C9.48213 9.7959 9.59448 9.78352 9.69005 9.73126C9.69005 9.73126 11.3663 8.66625 12.2626 8.50876C12.9413 8.38876 14.5107 8.34 14.5107 8.34L14.3194 7.53376C14.3194 7.53376 12.3132 7.57875 11.9138 7.70438ZM12.5157 9.76501C11.6644 10.0144 9.87005 11.0231 9.87005 11.0231C9.82234 11.0483 9.78007 11.0826 9.74566 11.1242C9.71124 11.1657 9.68537 11.2136 9.66952 11.2652C9.65367 11.3168 9.64815 11.371 9.65328 11.4247C9.65841 11.4783 9.6741 11.5305 9.69943 11.5781C9.7688 11.7113 9.90193 11.7881 10.0407 11.7975C10.1119 11.8013 10.1869 11.7863 10.2544 11.7506C10.2544 11.7506 11.9494 10.7175 12.8494 10.575C13.5301 10.4681 15.1032 10.4119 15.1032 10.4119L14.9269 9.60188C14.9251 9.60188 12.9169 9.64688 12.5157 9.76501ZM13.1176 11.8256C12.2607 12.06 10.4476 13.0369 10.4476 13.0369C10.3993 13.0612 10.3562 13.0948 10.321 13.1358C10.2857 13.1768 10.2588 13.2244 10.2419 13.2757C10.225 13.3271 10.2184 13.3813 10.2225 13.4352C10.2266 13.4892 10.2413 13.5418 10.2657 13.59C10.3332 13.7231 10.4644 13.8038 10.6032 13.815C10.6744 13.8206 10.7494 13.8075 10.8188 13.7719C10.8188 13.7719 12.5344 12.7688 13.4363 12.6431C14.1188 12.5475 15.6938 12.4856 15.6938 12.4856L15.5307 11.6719C15.5307 11.6719 13.5207 11.715 13.1176 11.8256ZM16.4382 3.39376H15.1351L15.3544 4.19251H16.7288C16.6632 3.96563 16.4682 3.49501 16.4382 3.39376ZM15.9469 6.26625L17.3888 6.29438C17.3082 6.01501 17.2257 5.75438 17.1488 5.50126L15.7294 5.46376L15.9469 6.26625ZM16.5413 8.33813L17.9794 8.32313C17.9044 8.05313 17.8294 7.79813 17.7544 7.53376H16.3238L16.5413 8.33813ZM17.1338 10.41H18.5513C18.4819 10.1456 18.4069 9.87563 18.3338 9.60188H16.9163L17.1338 10.41ZM17.7263 12.4838H19.0726C19.0126 12.2325 18.9488 11.9606 18.8757 11.6719H17.5088L17.7263 12.4838ZM11.4132 2.54813C11.0588 2.19001 11.0288 1.78126 10.3088 1.41563C9.51005 1.00876 8.6063 1.28626 8.6063 1.28626C8.6063 1.28626 10.0838 0.70688 10.8507 0.96188C11.5013 1.17751 11.8876 1.68751 12.0451 2.10563C12.1463 2.37376 12.0788 2.55563 11.8782 2.66251C11.8163 2.69626 11.6007 2.73938 11.4132 2.54813ZM12.7069 1.72126C12.2551 0.757505 11.3551 0.79313 11.3551 0.79313C11.3551 0.79313 12.2963 0.663755 12.7088 0.851255C13.1757 1.06313 13.4007 1.31438 13.5901 1.83751C13.6669 2.05126 13.7063 2.39438 13.3294 2.43938C13.0013 2.48063 12.8288 1.98001 12.7069 1.72126ZM14.1919 1.66876C13.7963 0.806255 12.9526 0.772505 12.9526 0.772505C12.9526 0.772505 14.5332 0.693755 15.0113 1.87876C15.0957 2.08876 15.0769 2.34938 14.8519 2.37001C14.5144 2.40188 14.3119 1.92751 14.1919 1.66876ZM12.5176 18.21C12.9751 17.9756 13.3444 17.5969 13.6557 17.1863C14.0044 16.7288 14.2332 16.4081 14.3963 15.8569C14.5201 15.4369 14.5576 14.7356 14.5126 14.2988C14.4619 13.815 14.5126 13.56 14.8782 13.5075C15.1032 13.4756 15.3788 13.6444 15.4501 14.2388C15.5307 14.9138 15.4876 15.3394 15.2251 16.065C14.9926 16.7063 14.6063 17.1713 14.0907 17.6119C13.3913 18.21 12.5851 18.1744 12.5176 18.21ZM14.7169 18.0431C14.7169 18.0431 16.7644 16.8431 16.4926 14.5594C16.4438 14.1488 16.2544 13.4081 16.7607 13.3463C16.9857 13.3181 17.3419 13.5413 17.3719 14.4788C17.4338 16.4438 16.4326 17.325 16.0144 17.6006C15.4276 17.9831 14.7169 18.0431 14.7169 18.0431Z"
                          fill="#2F7889"
                        />
                        <path
                          d="M16.5863 17.7825C16.5863 17.7825 17.5388 17.19 17.9026 16.2C18.0863 15.7031 18.1838 15.2831 18.1576 14.5068C18.1426 14.0943 17.8426 13.3462 18.3544 13.3406C18.7763 13.3368 18.9188 14.0212 18.9451 14.4056C18.9976 15.1631 18.7163 15.8925 18.2738 16.5843C17.6776 17.5125 16.5863 17.7825 16.5863 17.7825Z"
                          fill="#2F7889"
                        />
                        <path
                          d="M12.9451 23.25L12.6226 21.6056L14.1338 21.4668C14.1338 21.4668 14.5351 20.9662 14.5088 20.5368C14.4826 20.1075 14.2932 19.5168 14.2932 19.5168L15.8494 19.3293C15.8494 19.3293 16.0913 20.1562 16.0388 20.5387C15.9844 20.9418 15.6169 21.3187 15.6169 21.3187L16.0819 23.25H12.9451Z"
                          fill="#82AEC0"
                        />
                        <path
                          d="M7.99875 5.55187C8.05517 5.64511 8.14619 5.71223 8.25194 5.73858C8.35768 5.76493 8.46956 5.74836 8.56313 5.6925C8.56313 5.6925 10.2 4.56562 11.0906 4.37437C11.0981 4.3725 11.1094 4.37062 11.1169 4.36875C10.9988 4.0725 10.8581 3.81375 10.6988 3.58875C9.85688 3.8925 8.13938 4.9875 8.13938 4.9875C8.09295 5.01519 8.05245 5.05179 8.02023 5.0952C7.988 5.13861 7.96468 5.18796 7.95161 5.24042C7.93854 5.29287 7.93598 5.3474 7.94407 5.40085C7.95216 5.45431 7.97074 5.50563 7.99875 5.55187ZM8.715 6.99937C8.66818 7.02618 8.62713 7.06199 8.59422 7.10474C8.56131 7.14748 8.53719 7.19633 8.52324 7.24844C8.5093 7.30056 8.50581 7.35492 8.51298 7.40839C8.52014 7.46187 8.53783 7.51339 8.565 7.56C8.64 7.68937 8.775 7.7625 8.91375 7.76624C8.985 7.76812 9.06 7.74937 9.12563 7.71187C9.12563 7.71187 10.7813 6.61687 11.6756 6.44062C11.6813 6.43875 11.6869 6.43875 11.6906 6.43687L11.4731 5.6025C11.4056 5.61562 11.3513 5.62875 11.3119 5.64187C10.47 5.925 8.715 6.99937 8.715 6.99937ZM9.2925 9.01125C9.19728 9.0642 9.12688 9.15268 9.09666 9.25737C9.06645 9.36206 9.07889 9.47445 9.13125 9.57C9.18428 9.66515 9.27276 9.73548 9.37742 9.76569C9.48208 9.79589 9.59443 9.78351 9.69 9.73125C9.69 9.73125 11.3325 8.68875 12.2344 8.51437L12.0169 7.68C11.9756 7.6875 11.9419 7.69687 11.9156 7.70437C11.0663 7.96875 9.2925 9.01125 9.2925 9.01125ZM9.87 11.0231C9.82229 11.0483 9.78002 11.0826 9.74561 11.1242C9.71119 11.1657 9.68532 11.2136 9.66947 11.2652C9.65362 11.3168 9.6481 11.3709 9.65323 11.4246C9.65836 11.4783 9.67405 11.5305 9.69938 11.5781C9.76875 11.7112 9.90188 11.7881 10.0406 11.7975C10.1119 11.8012 10.1869 11.7862 10.2544 11.7506C10.2544 11.7506 11.8631 10.7719 12.7781 10.59L12.5588 9.75375C12.5438 9.7575 12.5288 9.76125 12.5156 9.765C11.6644 10.0144 9.87 11.0231 9.87 11.0231ZM13.1006 11.8294C12.2381 12.0712 10.4475 13.035 10.4475 13.035C10.3992 13.0593 10.3562 13.093 10.3209 13.1339C10.2856 13.1749 10.2588 13.2225 10.2419 13.2738C10.225 13.3252 10.2184 13.3794 10.2225 13.4333C10.2265 13.4873 10.2412 13.5399 10.2656 13.5881C10.3331 13.7212 10.4644 13.8019 10.6031 13.8131C10.6744 13.8187 10.7494 13.8056 10.8188 13.77C10.8188 13.77 12.3244 12.8906 13.2563 12.675C13.2206 12.4331 13.1794 12.1912 13.1344 11.9494L13.1006 11.8294Z"
                          fill="#424242"
                        />
                        <path
                          d="M10.5168 3.47818C9.85496 2.5913 9.52683 2.77318 9.07683 2.57068C8.67933 2.39068 8.89308 2.1638 9.07683 2.06818C9.34121 1.92943 9.84183 1.9163 10.1775 2.1038C10.4925 2.28005 10.8337 2.44505 10.9762 3.23443C11.0362 3.55505 10.6593 3.66755 10.5168 3.47818ZM12.0187 4.73255C11.8931 4.35943 11.6043 4.24505 11.2518 4.3538C11.0887 4.40443 11.0625 4.52443 11.1693 4.86005C11.3643 5.47318 11.4225 5.65693 11.7637 5.56318C12.0543 5.48443 12.1593 5.1488 12.0187 4.73255ZM11.9343 6.39568C11.6962 6.45568 11.6362 6.57568 11.76 6.96755C11.9062 7.4288 12.1725 7.36318 12.2887 7.32568C12.4668 7.26755 12.6225 7.06505 12.5775 6.76318C12.5512 6.59818 12.4518 6.26443 11.9343 6.39568Z"
                          fill="white"
                        />
                        <path
                          d="M12.5175 18.21C12.5231 18.2063 12.5362 18.2044 12.5512 18.2025C12.5437 18.2025 12.5362 18.2025 12.5287 18.2044C12.525 18.2044 12.5231 18.2081 12.5175 18.21Z"
                          fill="#2F7889"
                        />
                        <path
                          d="M15.2269 16.065C15.2438 16.0181 15.2569 15.9769 15.2719 15.9319C14.9306 15.9169 14.6494 15.8756 14.4094 15.81L14.3981 15.8569C14.235 16.41 14.0063 16.7288 13.6575 17.1863C13.3481 17.5931 12.9825 17.9681 12.5306 18.2044C12.5381 18.2044 12.5456 18.2044 12.5531 18.2025C12.7219 18.1781 13.4513 18.1594 14.0925 17.6119C14.6081 17.1713 14.9944 16.7063 15.2269 16.065ZM17.2331 15.7913C17.0681 15.8213 16.8956 15.8475 16.7081 15.8681C16.5956 15.8794 16.4888 15.8906 16.3838 15.8981C15.9675 17.31 14.7169 18.0431 14.7169 18.0431C14.7169 18.0431 15.4275 17.9831 16.0144 17.5988C16.3238 17.3944 16.9519 16.8563 17.2331 15.7913Z"
                          fill="#424242"
                        />
                        <path
                          d="M16.5863 17.7825C16.5863 17.7825 16.7269 17.7469 16.9313 17.6606C16.8319 17.6944 16.7307 17.7281 16.6238 17.7581C16.5994 17.7731 16.5863 17.7825 16.5863 17.7825Z"
                          fill="#2F7889"
                        />
                        <path
                          d="M18.2719 16.5844C18.5569 16.1382 18.7744 15.6769 18.8794 15.2007C18.6882 15.3207 18.4275 15.4519 18.0863 15.5701C18.0413 15.7876 17.9813 15.9863 17.9025 16.1982C17.58 17.0738 16.7982 17.6363 16.6238 17.7563C16.7307 17.7263 16.8319 17.6926 16.9313 17.6588C17.3025 17.5069 17.8894 17.1826 18.2719 16.5844Z"
                          fill="#424242"
                        />
                      </svg>
                    </article>
                    {/* PODCAST TEXT */}
                    <h6 className="font-semibold text-[#0C0D0D]">Podcast</h6>
                  </article>

                  {/* BOOKS - LIST OF TEXTS */}
                  <article className="flex flex-col gap-4 text-[14px] lg:text-[16px]">
                    <p>I said what I said</p>
                    <p>Road to 30</p>
                    <p>Not Just Design</p>
                  </article>
                </article>
              </article>
            </article>
          </section>
        </main>
      </Container>

      {/* GALLERY */}
      <div className="bg-[#0C0D0D]">
        <Container>
          <section className="bg-[#0C0D0D] pt-10 pb-14 lg:py-20 px-5 lg:px-[120px] flex flex-col items-center lg:items-start gap-5 lg:gap-10">
            {/* TEXT */}
            <h2 className="text-[24px] lg:text-[48px] font-medium lg:tracking-[-1.92px] text-white text-center">
              Some of my Favorite moments
            </h2>

            {/* IMAGERY GRID */}
            <article className="max-w-[500px] lg:max-w-none flex gap-2 lg:gap-5 justify-start items-start w-full">
              {/* 1 - 2 */}
              <article className="max-w-[168px] lg:max-w-none flex flex-col gap-2 lg:gap-5 w-full flex-1">
                {/* 1 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[174px] lg:h-[504px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At Landmark Beach, Lagos</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery1}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>

                {/* 2 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[208px] lg:h-[743px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At Zuma Rock, Abuja</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery3}
                    alt=""
                    placeholder="blur"
                    fill
                  />
                </article>
              </article>

              {/* 3 - 4 */}
              <article className="flex flex-col gap-2 lg:gap-5 w-full flex-1">
                {/* 3 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[243px] lg:h-[743px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At a wedding party in Abuja</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery2}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>

                {/* 4 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[167px] lg:h-[504px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>Family Dinner</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery4}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>
              </article>
            </article>
          </section>
        </Container>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}