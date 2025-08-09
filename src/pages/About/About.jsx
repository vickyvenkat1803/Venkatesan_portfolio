import HeroImg from "@/assets/images/vicky.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Venkatesan, a passionate developer specializing in creating practical and user-friendly web applications.
                I’m the creator of a Personal Finance Tracker built with Java Spring Boot and React, designed to help users manage transactions,
                 track expenses, and visualize financial insights effortlessly.{" "}
                {/* <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows. */}
              </p>
              <p className="text-white">
                My focus is on building applications that solve real-life problems while delivering 
                clean design and smooth user experiences. I’m also expanding my skills into full-stack 
                and cloud-based solutions to develop scalable, high-performance applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    As a lifelong learner, I’m driven by curiosity and creativity, constantly experimenting 
                    with new technologies and frameworks. From developing tools like my Mortgage Calculator 
                    to working on intuitive UI experiences, my mission is to create applications that make 
                    people’s digital lives easier and more efficient..
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Venkatesan
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div> */}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
