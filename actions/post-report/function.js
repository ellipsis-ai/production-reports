function(ellipsis) {
  const moment = require('moment-timezone');
const getActionLogs = require('ellipsis-action-logs').get;

getSortedLogs().then(logs => {
  const mostRecent = logs[0];
  const url = mostRecent ? mostRecent.paramValues.downloadUrl : undefined;
  const slackUserId = ellipsis.userInfo.messageInfo.userId;
  const slackUser = slackUserId ? `<@${slackUserId}>` : "<unknown user>"
  const hasUrl = !!url;
  ellipsis.success({
    hasUrl: hasUrl,
    url: url,
    slackUser: slackUser
  });
});

function getSortedLogs() {
  return new Promise((resolve, reject) => {
    getLogs().then(logs => {
      resolve(logs.sort((a, b) => moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1));
    });
  });
}

function getLogs() {
  return new Promise((resolve, reject) => {
    getActionLogs({
      action: 'record-report-url',
      from: moment().startOf('day'),
      to: moment(),
      userId: ellipsis.userInfo.ellipsisUserId,
      ellipsis: ellipsis,
      success: resolve,
      error: reject
    });
  });
}
}
