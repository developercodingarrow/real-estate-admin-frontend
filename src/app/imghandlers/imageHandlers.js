import { genericOnlyImageUplodHandler } from "../_generichandler/generichandler";
import { updateBlogImage } from "../utils/blogAction";

import { updateProjectImage } from "../utils/projectActions";

export const handeluplodProjectImage =
  genericOnlyImageUplodHandler(updateProjectImage);

export const handeluplodBlogImage =
  genericOnlyImageUplodHandler(updateBlogImage);
