const board_true = [
     ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
];

const board_false = [
     ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
];

function verificaLinha(board){
    for(let i = 0; i < 9; i++) {
        let linha = board[i];
        for(let j = 0; j < 9; j++) {
           const numeroAtual = board[i][j];
           if(numeroAtual !== ".") {
              const contador = linha.filter(e => e == board[i][j])
              if(contador.length > 1) {
                  return false;
              }
           }
        }
    }

   return true;
};

function verificaColuna(board){
    for(let i = 0; i < 9; i++) {
        let coluna = board.map(e => e[i]);
        for(let j = 0; j < 9; j++) {
           const numeroAtual = board[i][j];
           if(numeroAtual !== ".") {
              const contador = coluna.filter(e => e == board[i][j])
              if(contador.length > 1) {
                  return false;
              }
           }
        }
    }

   return true;
};

function verificaBloco(board) {
    const blocos = [];
    for(let h = 0; h <= 6; h+=3) {
        for(let j = 0; j < 9; j++) {
            blocos.push(board[j].slice(h, h + 3))
        }
    }
    
    for(let k = 0; k < blocos.length; k+=3) {
        for(let i = 0; i < 9; i++) {
            const bloco = blocos[k].concat(blocos[k + 1], blocos[k +2])
            for(let j = 0; j < 9; j++) {
               const numeroAtual = board[i][j];
               if(numeroAtual !== ".") {
                  const contador = bloco.filter(e => e == board[i][j])
                  if(contador.length > 1) {
                      return false;
                  }
               }
            }
        }
    }

    return true;
};

function verifica(board) {
    const linha = verificaLinha(board);
    const coluna = verificaColuna(board);
    const bloco = verificaBloco(board);

    if(linha === false || coluna === false || bloco === false) {
        return false;
    }

    return true;
}

console.log(verifica(board_true))
//console.log(verifica(board_false)) - Board Falso