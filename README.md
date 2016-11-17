Fate/Grand Order Drop Monitor
=============================
This script can get item drops from the data grabbed by wireshark. Tested with China server.

Usage
-----
```
tshark -l -Y "http and data-text-lines" -T fields -e data | node fgo-drop-mon.js
```

ID Table
--------
http://fategrandorder.wikia.com/wiki/Drop_Infos
