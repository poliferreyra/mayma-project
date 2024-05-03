export const createArray = (cantidad: number): number[] => {
  return Array.from({ length: cantidad }, (_, i) => i + 1);
};

export const IMG_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".svg"];

export const entityTypes = [
  { id: 0, name: 'Todos' },
  { id: 1, name: 'Organización de la Sociedad Civil / ONG ' },
  { id: 2, name: 'Economía Social' },
  { id: 3, name: 'Cooperativa de Trabajo' },
  { id: 4, name: 'Empresa' },
  { id: 5, name: 'Consultoras y profesionales' },
  { id: 6, name: 'Emprendedores - Idea de Negocio' },
  { id: 7, name: 'Empresa - Nuevo proyecto' },
];


