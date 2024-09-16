import DefaultLayout from "@/layouts/default";
import { Button, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CounterCard from "@/components/counter-card";
import ServiceCard from "@/components/service-card";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/testimonials";
import BrandsList from "@/components/brands-list";
import { useMediaQuery } from "react-responsive";
import { customTextShadow } from "@/styles/customStyles";

export default function HomePage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <Parallax
          pages={isMobile ? 5 : 3.5}
          style={{ top: "15px", left: "0", backgroundColor: "#FFF1D0" }}
        >
          {/* First Section */}
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1.5}
            style={{
              backgroundImage: "url(/bej-wave.svg)",
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <div className="w-full min-h-screen flex items-center justify-center">
              <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col items-center justify-center">
                <h1
                  className="text-[70px] sm:text-[80px] md:text-[100px] lg:text-[130px] text-center font-3d leading-[1] text-headersColor mx-auto"
                  style={customTextShadow}
                >
                  We help you grow online
                </h1>
                <p className="text-textColor text-[20px] sm:text-[25px] md:text-[30px] text-center mt-[20px] mb-[10px] font-bold">
                  Digital marketing isn't one-size-fits-all.
                  <br />
                  We'll collaborate with you to develop a tailored strategy that
                  perfectly aligns with your business needs.
                </p>
                <div className="w-full sm:w-[60%] md:w-[40%] flex items-center justify-center mt-[30px] mb-[20px]">
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <Button
                      variant="solid"
                      className="w-[200px] sm:w-[250px] h-[50px] bg-buttonsColor hover:bg-buttonsHover p-[10px] rounded-[5px] border-none shadow-[6px_6px_0px_0px_#BBE0E8]"
                    >
                      <h3 className="text-[24px] sm:text-[32px] text-headersColor font-3d">
                        LET'S TALK
                      </h3>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Second Section */}
          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1.5}
            style={{
              backgroundImage: "url(/top-middle-wave.svg)",
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer offset={isMobile ? 1 : 0.8} speed={0.5} factor={1}>
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
              <div
                className="text-[40px] sm:text-[50px] md:text-[70px] font-3d text-center text-headersColor mb-[50px] md:mb-[100px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
                style={customTextShadow}
              >
                Our achievements
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px]">
                <CounterCard title="Clients" value={447} />
                <Divider
                  orientation="vertical"
                  className="hidden lg:flex h-[200px] w-[10px] bg-cardBorderColor rounded"
                />
                <CounterCard
                  title="Accounts Managed"
                  value={3}
                  type="thousand"
                />
                <Divider
                  orientation="vertical"
                  className="hidden lg:flex h-[200px] w-[10px] bg-cardBorderColor rounded"
                />
                <CounterCard title="Revenue" value={52} type="million" />
              </div>
            </div>
          </ParallaxLayer>

          {/* Third Section */}
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={1.5}
            style={{
              backgroundImage: "url(/bottom-middle-wave.svg)",
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer offset={isMobile ? 2 : 1.5} speed={0.5} factor={1}>
            <div className="w-full min-h-screen flex items-center justify-center">
              <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
                <div
                  className="text-[40px] sm:text-[50px] md:text-[70px] font-3d text-center text-headersColor mb-[50px] md:mb-[100px]"
                  style={customTextShadow}
                >
                  Our services
                </div>
                <div className="flex flex-col md:flex-row gap-9 items-center justify-center">
                  <div className="flex flex-col gap-9">
                    <ServiceCard title="SEO" icon={faCoffee} />
                    <ServiceCard title="Web Development" icon={faCoffee} />
                    <ServiceCard title="Paid Traffic" icon={faCoffee} />
                  </div>
                  <div className="flex flex-col gap-9">
                    <ServiceCard
                      title="UGC & Influencer Marketing"
                      icon={faCoffee}
                    />
                    <ServiceCard title="UX & UI" icon={faCoffee} />
                    <ServiceCard title="Web Analytics & CRO" icon={faCoffee} />
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Fourth Section */}
          <ParallaxLayer offset={isMobile ? 3 : 2.1} speed={0.5} factor={1}>
            <div className="w-full min-h-screen flex flex-col items-center justify-center mt-[50px] md:mt-[200px] p-4">
              <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
                <div
                  className="text-[30px] sm:text-[40px] lg:text-[60px] font-3d text-center text-headersColor mb-[50px] md:mb-[100px]"
                  style={customTextShadow}
                >
                  We love to help people achieve their dreams
                </div>
              </div>
              <div className="w-full ml-[10px] mr-[10px] mb-[50px] md:mb-[100px]">
                <Carousel />
              </div>
              <div className="md:w-[70%] ml-[10px] mr-[10px]">
                <BrandsList />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
    </DefaultLayout>
  );
}
