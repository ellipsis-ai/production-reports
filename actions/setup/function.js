function(channelForMembers, dayOfWeek, whenToAsk, postChannel, whenToPost, whenToRemind, ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis).actions;
const slackUserId = ellipsis.userInfo.messageInfo.userId;

function unscheduleAction(actionName, channel) {
  return api.unschedule({
    actionName: actionName,
    channel: channel.trim()
  });
}

function scheduleAction(actionName, timeOfDay, channel, useDM) {
  const recurrence = `every week on ${dayOfWeek} at ${timeOfDay}`;
  return api.schedule({
    actionName: actionName,
    args: [{ name: "channel", value: channel }],
    channel: channel.trim(),
    recurrence: recurrence,
    useDM: useDM
  });
}

function setUpAction(action, newTimeOfDay, channel, useDM) {
  return unscheduleAction(action, channel).then(() => {
    return scheduleAction(action, newTimeOfDay, channel, useDM)
  });
}

setUpAction("entrypoint", whenToAsk, channelForMembers, true).
  then(() => setUpAction("post-report", whenToPost, postChannel, false), ellipsis.error).
  then(() => setUpAction("reminder", whenToRemind, channelForMembers, true)).
  then(() => ellipsis.success("All done!"), ellipsis.error);
}
