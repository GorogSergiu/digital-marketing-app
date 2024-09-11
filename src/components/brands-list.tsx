import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ListOfBrands } from "@/items/items";

const BrandsList = () => {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
      {ListOfBrands.map((item, index) => (
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <Card
            key={index}
            className=" bg-[white] border-[5px] border-[#A0D7FF]"
          >
            <CardBody className="overflow-visible items-center justify-center">
              <Image
                alt={item.title}
                className="object-cover h-[100px] w-[100px] rounded-none"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-center items-center">
              <h4
                className="font-3d text-[20px] text-[#FF6347]"
                style={{
                  textShadow: `
                      1px 1px 0 #A0D7FF,
                      2px 2px 0 #A0D7FF,
                      4px 4px 0 #A0D7FF,
                      6px 6px 0 #A0D7FF
                    `,
                }}
              >
                {item.title}
              </h4>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BrandsList;
