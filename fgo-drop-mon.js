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
		data = Buffer.from(data, "hex");
	} catch (err) {
		console.log(err);
	}

	zlib.unzip(data, function(err, data) {
		try {
			if (err) throw err;
			data = Buffer.from(data.toString(), "base64").toString();
			main(data);
		} catch (err) {
			console.log(err);
		}
	});	
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
	data = data.replace(/}[^}]*$/, "}");
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