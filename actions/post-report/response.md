{if successResult.hasResults}
{for report in successResult.result}
Here is the latest production report from {report.slackUser}:

{report.url}

{endfor}
{else}
No reports posted today.
{endif}