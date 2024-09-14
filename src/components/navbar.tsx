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
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../components/drawer";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function NavbarComponent() {
  const icons = {
    chevron: <FontAwesomeIcon icon={faChevronCircleDown} />,
    scale: <FontAwesomeIcon icon={faChevronCircleDown} />,
    lock: <FontAwesomeIcon icon={faChevronCircleDown} />,
    activity: <FontAwesomeIcon icon={faChevronCircleDown} />,
    flash: <FontAwesomeIcon icon={faChevronCircleDown} />,
    server: <FontAwesomeIcon icon={faChevronCircleDown} />,
    user: <FontAwesomeIcon icon={faChevronCircleDown} />,
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="bg-white w-[70%] rounded-xl mt-[25px]">
      <NavbarBrand>
        <FontAwesomeIcon icon={faChevronCircleDown} />
        <Link href="/" className="font-bold text-inherit pl-[10px]">
          <p>GGROWW</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                as={Link}
                href="/"
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <p className="font-[500] text-[1rem]">Services</p>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {siteConfig.dropDownMenuItems.map((item, index) => (
              <DropdownItem
                key={index}
                description={item.description}
                className=""
                color="danger"
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {siteConfig.navItems.map((item, index) => (
          <NavbarItem isActive key={index}>
            <Link href={item.href} aria-current="page" className="text-[black]">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Button
              variant="solid"
              className="bg-[#007BFF] hover:bg-[#FF6347] p-[10px] rounded-[5px] border-none"
            >
              <p className="text-[12px] text-[white] font-bold">VIEW PLANS</p>
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <Drawer />
      </NavbarContent>
    </Navbar>
  );
}
