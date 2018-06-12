function(ellipsis) {
  const logs = require('logs')(ellipsis);

logs.getSortedLogs().then(logs => {
  ellipsis.success({
    count: logs.length
  })
});
}
