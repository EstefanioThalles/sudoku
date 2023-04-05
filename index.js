function solution(grid) {
var collapsed = [[], [], []];
    for(var x = 0; x < grid.length; x++) {
    
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, grid[x].join(""))) { 
                return false;
            }
        }
    
        var column = [];
        for(var y = 0; y < grid.length; y++) {
            column.push(grid[y][x]);
            collapsed[(x % 3)].push(grid[x][y]);
        }
        
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, column.join(""))) { 
                return false;
            }
        }
    }
    
    var squares = [[], [], [], [], [], [], [], [], []];
    var k = 0;
    while(k < 9) {
        for(var j = 0; j < 3; j++) {
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
        }
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, squares[k].join(""))) { 
                return false;
            }
        }
       k++;
    }
   return true;
}
function isValid(i, a) {
    var first = a.indexOf(i);
    if(first >= 0) {
        if(a.indexOf(i, first + 1) >= 0) {
            return false;
        }
    }
    return true;
}
