import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

/**
 * A Workflow is a set of steps that are executed in order.
 * Each step in a Workflow is a function.
 * https://api.slack.com/future/workflows
 *
 * This workflow uses interactivity. Learn more at:
 * https://api.slack.com/future/forms#add-interactivity
 */
const RiceBallWorkflow = DefineWorkflow({
  callback_id: "rice_ball_workflow",
  title: "Rice ball workflow",
  description: "eating rice balls workflow",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["channel_id"],
  },
});

RiceBallWorkflow.addStep(Schema.slack.functions.Delay, {
  minutes_to_delay: "50",
});

RiceBallWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: RiceBallWorkflow.inputs.channel_id,
  message: ":sate:",
});

export default RiceBallWorkflow;
