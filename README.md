Fate/Grand Order Drop Monitor
=============================
This script can get item drops from the data grabbed by wireshark. Tested with China server and Bluestacks.

![screenshot](http://i.imgur.com/Xtb9uUj.png)
![screenshot](http://i.imgur.com/INC7XFy.png)

Installation
------------
1. Install [Wireshark](https://www.wireshark.org/) and add `C:\Program Files\Wireshark` to `PATH`.
2. Install [Node.js](https://nodejs.org/en/).
3. Download `fgo-drop-mon.js` and `id-table.txt`.

Usage
-----
Pipe data to the script.
```
tshark -2 -q -l -Y "http and data-text-lines" -T fields -e data | node fgo-drop-mon.js
```

ID Table
--------
http://fategrandorder.wikia.com/wiki/Drop_Infos
