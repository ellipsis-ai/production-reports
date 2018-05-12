{if successResult.hasUrl}
Here is the latest production report from {successResult.slackUser}:

{successResult.url}

{else}
No production report has been collected today from {successResult.slackUser}.
{endif}
