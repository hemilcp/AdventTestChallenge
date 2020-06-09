
function calculateChecksum(roomName) {
  const chars = roomName.split('')
  const buckets = {}
  chars.map(char => {
    if (char !== '-') {
      buckets[char] = (buckets[char] || 0) + 1
    }
  })
  const sorted = Object.entries(buckets).sort(([ charA, freqA ], [ charB, freqB ]) =>
    freqA < freqB ? 1 :
    freqA > freqB ? -1 :
    charA > charB ? 1 : -1
  )
  return sorted.map(([ char, freq]) => char).slice(0, 5).join('')
}

function isValid(room) {
  return calculateChecksum(room.name) === room.checksum
}
function parseRoomID(roomID) {
  const match = /([a-z-]+?)-(\d+)\[([a-z]+)\]/.exec(roomID)
  return {
    name: match[1],
    sectorID: parseInt(match[2], 10),
    checksum: match[3],
  }
}

function shiftCypher(char, dist) {
    return String.fromCharCode((char.charCodeAt(0) - 97 + dist) % 26 + 97)
  }
  
  function decryptRoomName(roomName, sectorID) {
    return roomName
      .split('')
      .map(char => char === '-' ? ' ' : shiftCypher(char, sectorID))
      .join('')
  }  

function advent_10(input) {
  return input
    .split('\n')
    .map(parseRoomID)
    .filter(isValid)
    .filter(room => decryptRoomName(room.name, room.sectorID).indexOf("north") == 0)
    .map(room => room.sectorID)[0]
    // .reduce((sum, room) => sum + room.sectorID, 0)
}


const input = require('fs').readFileSync('04.txt', 'utf8');
console.log(advent_10(input));