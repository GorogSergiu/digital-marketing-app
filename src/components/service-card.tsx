import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import { customSmallTextShadow } from "@/styles/customStyles";

type ServiceCardProps = {
  title: string;
  icon: IconProp;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
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
      <Card className="w-[320px] h-[120px] bg-[white] border-[4px] border-cardBorderColor">
        <CardBody className="flex items-center justify-start flex-row gap-3">
          <div className="bg-buttonsColor p-[10px] rounded-[15px] shadow-[4px_4px_0px_0px_#BBE0E8]">
            <FontAwesomeIcon color="#AE371F" icon={icon} size="2xl" />
          </div>
          <div className="flex items-start justify-center flex-col">
            <h3
              className="font-3d text-[20px] text-headersColor"
              style={customSmallTextShadow}
            >
              {title}
            </h3>
            <a href="">{"Read More >"}</a>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
