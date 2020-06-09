function advent_16(length, initialState) {
    let state = initialState;
    while (state.length < length) {
      state += "0" + state.split("").reverse().join("").replace(/1/g, "2").replace(/0/g, "1").replace(/2/g, "0");
    }
    state = state.substr(0, length);
  
    let checksum = state;
    while (checksum.length % 2 === 0) {
      let newChecksum = "";
      for (let i = 0; i < checksum.length; i += 2) {
        newChecksum += checksum[i] === checksum[i + 1] ? "1" : "0";
      }
      checksum = newChecksum;
    }
  
    return checksum;
  }

  console.assert(advent_16(12, "110010110100 ") === "100");