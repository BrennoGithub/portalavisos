// Organizar informativos
function ordenarInformativos(informativos) {
    return informativos.sort((a, b) => new Date(a.data) - new Date(b.data));
  }
  
  const informativos = [
    { titulo: "Informativo 3", data: "2023-08-12" },
    { titulo: "Informativo 1", data: "2021-05-03" },
    { titulo: "Informativo 2", data: "2022-11-20" }
  ];
  
  console.log(ordenarInformativos(informativos));