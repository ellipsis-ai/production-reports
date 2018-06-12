/*
@exportId Cf2SGkrtS_2wGZmvJhy_ng
*/
module.exports = (function() {
const moment = require('moment-timezone');
const getActionLogs = require('ellipsis-action-logs').get;

return ellipsis => {
  return {
    getMostRecentLog: getMostRecentLog,
    getSortedLogs: getSortedLogs
  };
  
  function getMostRecentLog(userId) {
    return getSortedLogs(userId).then(logs => logs[0]);
  }

  function getSortedLogs(userId) {
    return new Promise((resolve, reject) => {
      getLogs(userId).then(logs => {
        resolve(logs.sort((a, b) => moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1));
      });
    });
  }

  function getLogs(userId) {
    return new Promise((resolve, reject) => {
      getActionLogs({
        action: 'record-report-url',
        from: moment().startOf('day'),
        to: moment(),
        userId: userId,
        ellipsis: ellipsis,
        success: resolve,
        error: reject
      });
    });
  }
};

})()
     