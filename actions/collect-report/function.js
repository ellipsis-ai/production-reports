function(report, ellipsis) {
  const box = require('ellipsis-box');

report.fetch().then(res => {
  box.files(ellipsis).uploadWithTimestamp(res.filename, res.contentType, res.value).then(res => {
    ellipsis.success("", {
      next: {
        actionName: "record-report-url",
        args: [
          { name: "url", value: res.url },
          { name: "downloadUrl", value: res.downloadUrl }
        ]
      }
    });
  });
});
}
