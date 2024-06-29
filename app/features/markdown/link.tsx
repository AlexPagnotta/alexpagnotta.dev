import { type Ref } from "react";

import { type MDXComponents } from "../post/body";
import { Link } from "../ui/link";

export const MdxLink: NonNullable<MDXComponents["a"]> = ({ ref, ...props }) => (
  <Link {...props} ref={ref as Ref<HTMLAnchorElement>} underline />
);
