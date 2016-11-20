Fate/Grand Order Drop Monitor
=============================
This script can get item drops from the data grabbed by wireshark. Tested with China server and Bluestacks.

![screenshot](http://i.imgur.com/Xtb9uUj.png)
![screenshot](http://i.imgur.com/INC7XFy.png)

With Wireshark
--------------
1. Install [Wireshark](https://www.wireshark.org/) and add `C:\Program Files\Wireshark` to `PATH`.
2. Install [Node.js](https://nodejs.org/en/).
3. Run `wireshark/start.bat`.

With Fiddler
------------
1. Install [Fiddler](http://www.telerik.com/fiddler)
2. Install [Proxifier](https://www.proxifier.com/) and route all traffic from `HD-Plus-Service.exe`(Bluestacks) to Fiddler proxy(127.0.0.1:8888). (You might need to enable https://www.proxifier.com/documentation/v3/services.htm)
3. Replace `%userprofile%/Fiddler2/Scripts/CustomRules.js` with `fiddler/CustomRules.js`
4. Fiddler should auto reload the script and log drops into envent log window.

Notes
-----
* Object ID is grabbed from http://fategrandorder.wikia.com/wiki/Drop_Infos
* Currently (-2.2.2) Wireshark might fail to assemble chunked HTTP response: https://ask.wireshark.org/questions/23151/continuation-or-non-http-traffic-wont-produce-http, so it is not stable to choose Wireshark version.
