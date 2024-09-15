import { Testimonials } from "@/items/items";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import { customSmallTextShadow } from "@/styles/customStyles";

const Carousel = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextTestimonial = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % Testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentStep(
      (prevStep) => (prevStep - 1 + Testimonials.length) % Testimonials.length
    );
  };

  return (
    <div className="flex flex-row items-center justify-center gap-3">
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
        <button onClick={prevTestimonial}>
          <div className="bg-buttonsColor p-[10px] rounded-[5px] shadow-[4px_4px_0px_0px_#BBE0E8]">
            <FontAwesomeIcon color="#074978" icon={faArrowLeft} size="xl" />
          </div>
        </button>
      </motion.div>
      <Card className="max-w-[500px] pt-[15px] pb-[15px] shadow-[6px_6px_0px_0px_#BBE0E8]">
        <CardBody className="flex items-center justify-start flex-col gap-3">
          <div>
            <Avatar
              src={Testimonials[currentStep].avatar}
              className="w-20 h-20 text-large"
            />
          </div>
          <div className="flex items-start justify-center flex-col">
            <h3
              className="font-3d text-[20px] text-buttonsHover"
              style={customSmallTextShadow}
            >
              {Testimonials[currentStep].name}
            </h3>
          </div>
          <div>
            <Rating
              name="read-only"
              readOnly
              value={Testimonials[currentStep].rating}
            />
          </div>
          <div className="md:w-[90%] text-center">
            "{Testimonials[currentStep].message}"
          </div>
        </CardBody>
      </Card>
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
        <button onClick={nextTestimonial}>
          <div className="bg-buttonsColor p-[10px] rounded-[5px] shadow-[4px_4px_0px_0px_#BBE0E8]">
            <FontAwesomeIcon color="#074978" icon={faArrowRight} size="xl" />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Carousel;
