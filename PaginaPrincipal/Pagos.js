const banks = [
    { name: "Banco A", code: "BANCA" },
    { name: "Banco B", code: "BANCB" },
    { name: "Banco C", code: "BANCC" },
    // ... Agrega más bancos aquí
  ];
  
  // Función para buscar un banco por su código
  function findBankByCode(code) {
    return banks.find(bank => bank.code === code);
  }
  
  // Función para buscar un banco por su nombre
  function findBankByName(name) {
    return banks.find(bank => bank.name === name);
  }
  
  // Exporta las funciones y la lista de bancos si es necesario
  module.exports = {
    banks,
    findBankByCode,
    findBankByName
  };
  