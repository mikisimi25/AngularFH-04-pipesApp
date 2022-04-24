
///Trabajar con valores numéricos pero con palabras
//0 1 2 3
export enum Color {
  rojo, negro, azul, verde
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
