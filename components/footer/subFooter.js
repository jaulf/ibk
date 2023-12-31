import Image from "next/image";
import Container from "../container/container";
import next from "@/public/images/SVG/next.svg";
import Link from "next/link";

export default function SubFooter({
  short = false,
  main = "NEXT CASE STUDY",
  first,
  link,
}) {
  return (
    <>
      <Link href={link} className="bg-[#7BFAAD] block px-5 xl:px-0">
        <Container>
          <article className="py-6 lg:py-10 flex justify-between items-center">
            {/* NEXT CASE STUDY */}
            <h3 className="italic text-[20px] lg:text-[40px] font-medium tracking-[-0.2px] lg:tracking-[-0.4px]">
              {short ? (
                <span>
                  NEXT <span className="hidden md:inline">CASE STUDY</span>
                </span>
              ) : (
                main
              )}
            </h3>
            {/* JOGOVEST */}
            <article className="flex items-center gap-3">
              <h3 className="text-[20px] lg:text-[40px] font-medium tracking-[-0.2px] lg:tracking-[-0.4px]">
                {first}
              </h3>
              <Image
                className="w-8 h-8 lg:w-auto lg:h-auto"
                src={next}
                alt=""
              />
            </article>
          </article>
        </Container>
      </Link>
    </>
  );
}
