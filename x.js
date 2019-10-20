function cantidadDeAparicinoes(arr,ent) {
    var cant = 0;
    var tam = arr.lenght;
    for (let i = 0; i < tam; i++) {
        if (arr[i] === ent) {
            cant++;
        }
    }
    return cant;
}