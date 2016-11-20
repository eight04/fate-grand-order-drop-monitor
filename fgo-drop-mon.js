var readline = require("readline"),
	zlib = require("zlib"),
	fs = require("fs");
	
var idTable = buildTable("id-table.txt");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on("line", function(data) {
	try {
		main(data);
	} catch (err) {
		// suppress error
	}
});

function buildTable(fn) {
	var data = fs.readFileSync(fn, "utf8"),
		re = /^(\d+)\s+(.+)$/gm,
		table = {},
		match;
	
	while ((match = re.exec(data))) {
		table[match[1]] = match[2];
	}
	return table;
}

function main(data) {
	data = Buffer.from(data, "hex");
	data = zlib.unzipSync(data);
	data = decodeURIComponent(data.toString());
	data = Buffer.from(data, "base64").toString();
	data = JSON.parse(data);
	var drops = findDrop(data.cache.replaced.battle[0].battleInfo.enemyDeck);
	console.log(drops);
}

function findDrop(deck) {
	var wave, sv, drops = {}, drop, id;
	for (wave of deck) {
		for (sv of wave.svts) {
			for (drop of sv.dropInfos) {
				id = idTable[drop.objectId] || drop.objectId;
				if (!drops[id]) {
					drops[id] = 0;
				}
				drops[id] += drop.num;
			}
		}
	}
	return drops;
}
