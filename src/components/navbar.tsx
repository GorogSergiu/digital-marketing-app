import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../components/drawer"

export default function NavbarComponent() {
  const icons = {
    chevron: <FontAwesomeIcon icon={faCoffee} />,
    scale: <FontAwesomeIcon icon={faCoffee} />,
    lock: <FontAwesomeIcon icon={faCoffee} />,
    activity: <FontAwesomeIcon icon={faCoffee} />,
    flash: <FontAwesomeIcon icon={faCoffee} />,
    server: <FontAwesomeIcon icon={faCoffee} />,
    user: <FontAwesomeIcon icon={faCoffee} />,
  };

  return (
    <Navbar  className="bg-white w-[70%] rounded-xl mt-[25px]">
      <NavbarBrand>
        <FontAwesomeIcon icon={faCoffee} />
        <Link href="/" className="font-bold text-inherit pl-[10px]">
          <p>GGROWW</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <p>Services</p>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="/docs" aria-current="page">
            <p>About Us</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <p>Contact Us</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            <p>View Plans</p>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <Drawer/>
      </NavbarContent>
    </Navbar>
  );
}
