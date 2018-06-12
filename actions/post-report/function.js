function(ellipsis) {
  const logs = require('logs')(ellipsis);

logs.getSortedLogs().then(logs => {
  const results = logs.map(resultFor);
  ellipsis.success({
    hasResults: results.length > 0,
    result: results
  });
});

function resultFor(log) {
  return {
    url: log.paramValues.downloadUrl,
    slackUser: `<@${log.userIdForContext}>`
  };
}
}
