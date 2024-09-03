import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="w-[100vw] h-[600px] flex items-center justify-center">
          <div className="w-[80%] flex flex-col items-center justify-center">
            <h1 className="text-[130px] homepage-h1-font">
              We help you grow online
            </h1>
            <div className="w-[40%] flex items-center justify-center">
              <Button>
                <p>Hello</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[600px] flex items-center justify-center">
          <div className="w-[80%]">
            <div className="text-[70px] text-font">We help you grow online</div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
