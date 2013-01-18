### Why

Because, reasons. Well it all started when someone needed a syslog daemon that was free and was as simple to install as a copy and paste operation. Nothing I could easily find was that simple. 

### Run

Edit logpath in config.json. Change consolelog to true if you want to see things happen in real time.

node ./jsyslogd.js

Point your servers and devices to the machine it's running on and you're good to go.

### Why^2

Logs are divied up in 5 minute intervals as that seemed to be the best amount of time. Any longer, and the files could get too big for notepad. Any shorter, I'd have way to many on my hands.