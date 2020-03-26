
import typescript from "rollup-plugin-typescript2"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"


export default {
  input: "src/index.ts",
  plugins: [
    commonjs(),
    resolve(),
    json(),
    typescript({useTsconfigDeclarationDir: true})
  ]
  // output: [],
  // external: [],
  // watch: { include: "src/**" },
}
