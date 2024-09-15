import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ListOfBrands } from "@/items/items";
import { customSmallTextShadow } from "@/styles/customStyles";

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
            className=" bg-[white] border-[5px] border-cardBorderColor"
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
                className="font-3d text-[20px] text-headersColor"
                style={customSmallTextShadow}
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
