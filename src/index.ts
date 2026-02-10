import type { OpenclawPluginApi } from "openclaw/plugin-sdk";
import { emptyPluginConfigSchema } from "openclaw/plugin-sdk";

import { linqPlugin } from "./channel.js";
import { setLinqRuntime } from "./runtime.js";

const plugin = {
  id: "linq",
  name: "Linq",
  description: "iMessage, RCS, and SMS via Linq Partner API — no Mac required",
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenclawPluginApi) {
    setLinqRuntime(api.runtime);
    api.registerChannel({ plugin: linqPlugin });
  },
};

export default plugin;
