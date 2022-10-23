import { Manifest } from "deno-slack-sdk/mod.ts";
import RiceBallWorkflow from "./workflows/rice_ball_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "onigiri",
  description: "I am hungry",
  icon: "assets/icon.png",
  workflows: [RiceBallWorkflow],
  botScopes: [
    "channels:history",
    "chat:write",
    "chat:write.public",
    "groups:history",
    "mpim:read",
    "im:read",
  ],
});
