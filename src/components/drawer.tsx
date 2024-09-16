import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/config/site";
import { Link, Divider } from "@nextui-org/react";

type Anchor = "right";

export default function Drawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-[15px]">
        <FontAwesomeIcon
          onClick={toggleDrawer("right", false)}
          icon={faClose}
          size="xl"
          color="#074978"
          className="p-[5px] cursor-pointer bg-buttonsColor rounded-[5px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]"
        />
      </div>
      <ListItemButton onClick={handleClick}>
        <span className="text-[18px] text-[black]">Services</span>
      </ListItemButton>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div className="flex flex-col ml-[20px] gap-3">
            <Link
              key={"services"}
              color={"foreground"}
              href="/services"
              size="lg"
            >
              <p className="text-[400] text-[14px]">All services</p>
            </Link>
            {siteConfig.dropDownMenuItems.map((item, index) => (
              <Link key={index} color={"foreground"} href={item.href} size="lg">
                <p className="text-[400] text-[14px]">{item.label}</p>
              </Link>
            ))}
          </div>
        </List>
      </Collapse>
      <List sx={{ padding: 0 }}>
        {siteConfig.navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link color={"foreground"} href={item.href} size="lg">
                <p>{item.label}</p>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="w-[full] h-[10px] bg-cardBorderColor rounded m-[10px]" />
      <div className="flex flex-row gap-4 p-[15px]">
        <FontAwesomeIcon
          onClick={() => {}}
          icon={faInstagram}
          size="2xl"
          color="#074978"
          className="p-[5px] cursor-pointer bg-buttonsColor rounded-[5px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]"
        />
        <FontAwesomeIcon
          onClick={() => {}}
          icon={faFacebookSquare}
          size="2xl"
          color="#074978"
          className="p-[5px] cursor-pointer bg-buttonsColor rounded-[5px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]"
        />
        <FontAwesomeIcon
          onClick={() => {}}
          icon={faLinkedin}
          size="2xl"
          color="#074978"
          className="p-[5px] cursor-pointer bg-buttonsColor rounded-[5px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]"
        />
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <FontAwesomeIcon
            icon={faBars}
            color="#074978"
            size="xl"
            className="p-[5px] cursor-pointer bg-buttonsColor rounded-[5px] shadow-[4px_4px_0px_0px_rgba(160,215,255,1)]"
          />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
