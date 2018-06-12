function(ellipsis) {
  const logs = require('logs')(ellipsis);

logs.getMostRecentLog(ellipsis.userInfo.ellipsisUserId).then(mostRecent => {
  if (mostRecent) {
    ellipsis.noResponse();
  } else {
    const name = ellipsis.userInfo.fullName || "friend";
    ellipsis.success(name, {
      choices: [
        { label: "Start", actionName: 'collect-report', allowOthers: true }
      ]
    });
  }
});
}
