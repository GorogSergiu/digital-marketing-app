import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer offset={0} speed={1} factor={2}>
            <div className="w-[100vw] h-[100vh] flex items-center justify-center">
              <div className="w-[60%] flex flex-col items-center justify-center">
                <h1
                  className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[130px] text-center homepage-h1-font leading-[1] text-[#FF6347]"
                  // style={{
                  //   textShadow:
                  //     "2px 2px 0 #007BFF, -2px 2px 0 #007BFF, 2px -2px 0 #007BFF, -2px -2px 0 #007BFF",
                  // }}
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
                <p className="text-[#333] text-[14px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-center mt-[20px] mb-[10px]">
                  Digital marketing isn't one-size-fits-all. We'll collaborate
                  with you to develop a tailored strategy that perfectly aligns
                  with your business needs.
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
                      variant="shadow"
                      className="w-[250px] h-[50px] bg-[#007BFF]"
                    >
                      <p className="text-[32px] text-[white]">Let's talk</p>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} factor={1}>
            <div className="w-[100vw] h-[600px] flex items-center justify-center">
              <div className="w-[80%]">
                <div className="text-[70px] text-font">Second Section</div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
    </DefaultLayout>
  );
}
