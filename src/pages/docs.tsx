import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="h-[100vh] flex items-center justify-center gap-4 py-8 md:py-10">
        <Parallax pages={3}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${"/wave-bg.svg"})`,
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-[150px]">Welcome to DOCS</h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            factor={2}
            style={{
              backgroundImage: `url(${"/2.jpg"})`,
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-[150px]">Coding is fun</h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.3}
            factor={2}
            style={{
              backgroundImage: `url(${"/3.jpg"})`,
              backgroundSize: "cover",
            }}
          >
            <h2 className="text-[150px]">Maybe too fun</h2>
          </ParallaxLayer>
        </Parallax>
      </section>
    </DefaultLayout>
  );
}
