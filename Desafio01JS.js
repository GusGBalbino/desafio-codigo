let lista = [8, 5, 10, 5, 2, 4, 4, 3]

function ordenada(lista) {
    lista.sort((x,y) => x - y);
    console.log([...new Set(lista)]);
}
return ordenada(lista)