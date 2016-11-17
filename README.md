Fate/Grand Order Drop Monitor
=============================
This script can get item drops from the data grabbed by wireshark. Tested with China server and Bluestack.

![screenshot](http://i.imgur.com/Xtb9uUj.png)
![screenshot](http://i.imgur.com/INC7XFy.png)

Installation
------------
1. Install [Wireshark](https://www.wireshark.org/)
2. Download `fgo-drop-mon.js`, `id-table.txt`.
3. Execute:
	```
	tshark -2 -q -l -Y "http and data-text-lines" -T fields -e data | node fgo-drop-mon.js
	```

ID Table
--------
http://fategrandorder.wikia.com/wiki/Drop_Infos
