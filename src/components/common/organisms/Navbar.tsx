import { MdApps as AppsIcon } from "react-icons/md";
import { RxAvatar as AvatarIcon } from "react-icons/rx";
import { IconButtonRounded } from "../atoms/IconButton";
import { NavAccount, NavbarHeaderBordered, NavBrandName, NavContent } from "./internal";

const Navbar = () => (
  <NavbarHeaderBordered>
    <NavContent>
      <NavBrandName>
        <p><strong>Agile Content</strong> Frontend test</p>
      </NavBrandName>
      <NavAccount>
        <IconButtonRounded>
          <AppsIcon size={24} />
        </IconButtonRounded>
        <IconButtonRounded>
          <AvatarIcon size={24} />
        </IconButtonRounded>
      </NavAccount>
    </NavContent>
  </NavbarHeaderBordered>
);

export default Navbar;
