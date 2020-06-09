  function advent_1(input) {
    input = input.split(", ");
    var direction = 0,
    position = [0, 0],
    visited = ["0,0"],
    visitedTwice = [];
  
    input.map(step => {
        
      let turn = step[0], steps = +step.substr(1);
  
      direction += 4;
      if (turn === "L") direction--;
      if (turn === "R") direction++;
      direction %= 4;
  
      for (let i = 1; i <= steps; i++) {
        if (direction === 0) position[1] += 1;
        if (direction === 1) position[0] += 1;
        if (direction === 2) position[1] -= 1;
        if (direction === 3) position[0] -= 1;
  
        if (visited.find(p => p[0] === position[0] && p[1] === position[1])) 
            visitedTwice.push([...position]);
        
        visited.push([...position]);
      }
    });
  
    return Math.abs(visitedTwice[0][0]) + Math.abs(visitedTwice[0][1]);
  }

console.assert(advent_1("R8, R4, R4, R8") == 4);