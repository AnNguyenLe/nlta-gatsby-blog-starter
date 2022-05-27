// normalize CSS across browsers
import "./src/common-css/normalize.css"
// custom global CSS styles
import "./src/common-css/style.css"

import { wrapMDX } from "./root-mdx"

export const wrapRootElement = wrapMDX
