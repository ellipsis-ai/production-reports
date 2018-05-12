function(ellipsis) {
  const name = ellipsis.userInfo.fullName || "friend";
ellipsis.success(name, {
  choices: [
    { label: "Start", actionName: 'collect-report', allowOthers: true }
  ]
});
}
