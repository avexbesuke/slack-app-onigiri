import { Trigger } from "deno-slack-api/types.ts";
import RiceBallWorkflow from "../workflows/rice_ball_workflow.ts";
/**
 * Triggers determine when Workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const RiceBallTrigger: Trigger<typeof RiceBallWorkflow.definition> = {
  type: "event",
  name: "rice ball trigger",
  description: "Trigger when eating rice balls",
  workflow: "#/workflows/rice_ball_workflow",
  event: {
    event_type: "slack#/events/message_posted",
    channel_ids: ["C02745FMD7G"],
    filter: {
      version: 1,
      root: {
        statement: "{{data.text}} == :rice_ball:",
      },
    },
  },
  inputs: {
    channel_id: {
      value: "{{data.channel_id}}",
    },
  },
};

export default RiceBallTrigger;
