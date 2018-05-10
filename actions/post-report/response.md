{if successResult.hasUrl}
Here is the latest production report for {successResult.slackUser}:

{successResult.url}

{else}
No production report has been collected today for {successResult.slackUser}.
{endif}
