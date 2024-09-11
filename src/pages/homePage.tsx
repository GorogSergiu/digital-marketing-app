import DefaultLayout from "@/layouts/default";
import { Button, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CounterCard from "@/components/counter-card";
import ServiceCard from "@/components/service-card";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/testimonials";
import BrandsList from "@/components/brands-list";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <Parallax pages={4.5} style={{ top: "0", left: "0" }}>
          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <div className="w-[100vw] h-[100vh] flex items-center justify-center">
              <div className="w-[60%] flex flex-col items-center justify-center">
                <h1
                  className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[130px] text-center font-3d leading-[1] text-[#FF6347]"
                  style={{
                    textShadow: `
                      2px 2px 0 #A0D7FF,
                      4px 4px 0 #A0D7FF,
                      6px 6px 0 #A0D7FF,
                      8px 8px 0 #A0D7FF
                    `,
                  }}
                >
                  We help you grow online
                </h1>
                <p className="text-[#333] text-[14px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-center mt-[20px] mb-[10px] font-bold">
                  Digital marketing isn't one-size-fits-all.
                  <br />
                  We'll collaborate with you to develop a tailored strategy that
                  perfectly aligns with your business needs.
                </p>
                <div className="w-[40%] flex items-center justify-center mt-[30px] mb-[20px]">
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
                      className="w-[250px] h-[50px] bg-[#007BFF] hover:bg-[#FF6347] p-[10px] rounded-[5px] border-none shadow-[6px_6px_0px_0px_rgba(255,99,71,1)]"
                    >
                      <h3 className="text-[32px] text-[white] font-3d">
                        LET'S TALK
                      </h3>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} factor={1}>
            <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center">
              <div
                className="text-[50px] md:text-[70px] font-3d text-center text-[#FF6347] mb-[100px] w-[60%]"
                style={{
                  textShadow: `
                      2px 2px 0 #A0D7FF,
                      4px 4px 0 #A0D7FF,
                      6px 6px 0 #A0D7FF,
                      8px 8px 0 #A0D7FF
                    `,
                }}
              >
                Our achievements
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-[50px]">
                <CounterCard title="Clients" value={447} />
                <Divider
                  orientation="vertical"
                  className="hidden lg:flex h-[200px] w-[10px] bg-[#FF6347] rounded"
                />
                <CounterCard
                  title="Accounts Managed"
                  value={3}
                  type="thousand"
                />
                <Divider
                  orientation="vertical"
                  className="hidden lg:flex h-[200px] w-[10px] bg-[#FF6347] rounded"
                />
                <CounterCard title="Revenue" value={112} type="million" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} factor={1}>
            <div className="w-[100vw] h-[100vh] flex items-center justify-center">
              <div className="w-[60%]">
                <div
                  className="text-[50px] md:text-[70px] font-3d text-center text-[#FF6347] mb-[100px]"
                  style={{
                    textShadow: `
                      2px 2px 0 #A0D7FF,
                      4px 4px 0 #A0D7FF,
                      6px 6px 0 #A0D7FF,
                      8px 8px 0 #A0D7FF
                    `,
                  }}
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
                    <ServiceCard
                      title="Web Analytics and CRO"
                      icon={faCoffee}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} factor={1}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
              <div className="w-[60%]">
                <div
                  className="text-[40px] lg:text-[60px] font-3d text-center text-[#FF6347] mb-[100px]"
                  style={{
                    textShadow: `
                      2px 2px 0 #A0D7FF,
                      4px 4px 0 #A0D7FF,
                      6px 6px 0 #A0D7FF,
                      8px 8px 0 #A0D7FF
                    `,
                  }}
                >
                  We love to help people achive their dreams
                </div>
              </div>
              <div className="ml-[50px] mr-[50px] mb-[100px]">
                <Carousel />
              </div>
              <div className="ml-[50px] mr-[50px]">
                <BrandsList />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
    </DefaultLayout>
  );
}
