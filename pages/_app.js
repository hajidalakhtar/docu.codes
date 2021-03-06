import 'nextra-theme-docs/style.css'
import "./Compiler.css";

import Prism from 'prism-react-renderer/prism'
(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-kotlin")
require("prismjs/components/prism-cshtml")

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
