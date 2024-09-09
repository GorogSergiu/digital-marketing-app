import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

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
      <Card className="w-[320px] h-[120px] bg-[white] border-[5px] border-[#A0D7FF]">
        <CardBody className="flex items-center justify-start flex-row gap-3">
          <div className="bg-[#FF6347] p-[10px] rounded-[15px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]">
            <FontAwesomeIcon color="#007BFF" icon={icon} size="2xl" />
          </div>
          <div className="flex items-start justify-center flex-col">
            <h3
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
