tshark -B 6 -q -l -Y "http and data-text-lines" -T fields -e data | node fgo-drop-mon.js
