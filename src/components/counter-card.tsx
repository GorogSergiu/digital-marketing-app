import { Card, CardBody } from "@nextui-org/react";
import Counter from "@/components/counter";
import { motion } from "framer-motion";

type CounterCardProps = {
  type?: string;
  title: string;
  value: number;
};

const CounterCard: React.FC<CounterCardProps> = ({ type, title, value }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <Card className="w-[300px] h-[250px] bg-[white] border-[5px] border-[#A0D7FF]">
        <CardBody className="flex items-center justify-center">
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
          <div className="flex items-center justify-center">
            <Counter
              value={value}
              className="text-[100px] text-[#007BFF] font-3d"
            />
            {type === "million" && (
              <span className="text-[100px] font-3d text-[#007BFF]">m</span>
            )}
            {type === "thousand" && (
              <span className="text-[100px] font-3d text-[#007BFF]">k</span>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default CounterCard;
