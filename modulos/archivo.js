import fs from 'fs';

const LeeryReemplazar = () =>{
    const contenido = fs.readFileSync('entrada.txt', 'utf-8');

    fs.writeFileSync('salida.txt', contenido)
}

export default LeeryReemplazar
