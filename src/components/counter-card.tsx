import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import Counter from "@/components/counter";

type CounterCardProps = {
  type?: string;
  title: string;
  value: number;
};

const CounterCard: React.FC<CounterCardProps> = ({ type, title, value }) => {
  return (
    <Card className="w-[250px] h-[250px]">
      <CardBody className="flex items-center justify-center">
        <h3 className="font-3d">{title}</h3>
        <div className="flex items-center justify-center">
          <Counter value={value} className="text-[100px]" />
          {type === "million" && <span className="text-[100px]">m</span>}
          {type === "thousand" && <span className="text-[100px]">k</span>}
        </div>
      </CardBody>
    </Card>
  );
};

export default CounterCard
