function(ellipsis) {
  const logs = require('logs')(ellipsis);

logs.getMostRecentLog().then(mostRecent => {
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
}
