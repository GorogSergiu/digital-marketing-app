import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="w-[100vw] h-[600px] flex items-center justify-center">
          <div className="w-[80%] flex flex-col items-center justify-center">
            <h1 className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[130px] text-center homepage-h1-font">
              We help you grow online
            </h1>
            <div className="w-[40%] flex items-center justify-center">
              <motion.div
                className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="shadow"
                  color="danger"
                  className="w-[250px] h-[50px]"
                >
                  <p className="text-[32px]">Let's talk</p>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[600px] flex items-center justify-center">
          <div className="w-[80%]">
            <div className="text-[70px] text-font">Second Section</div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
