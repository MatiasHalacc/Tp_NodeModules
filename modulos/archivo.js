import fs from 'fs';

const LeeryReemplazar = (entrada, salida) =>{
    const contenido = fs.readFileSync(entrada, 'utf-8');
    fs.writeFileSync(salida, contenido)
}

export default LeeryReemplazar
