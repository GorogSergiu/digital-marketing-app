import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

type ServiceCardProps = {
  title: string;
  icon: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <Card className="bg-[white] border-[5px] border-[#A0D7FF]">
      <CardBody className="flex items-start justify-start flex-row">
        <FontAwesomeIcon icon={faCoffee} />
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
  );
};

export default ServiceCard;
