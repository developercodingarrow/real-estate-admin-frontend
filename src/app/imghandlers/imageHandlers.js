import { genericOnlyImageUplodHandler } from "../_generichandler/generichandler";

import { updateProjectImage } from "../utils/projectActions";

export const handeluplodProjectImage =
  genericOnlyImageUplodHandler(updateProjectImage);
