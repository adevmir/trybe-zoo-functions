const data = require('../data/zoo_data');

const managers = data.employees.map((colab) => colab.managers);

function isManager(id) {
  return managers.some(a => a.some(a => a === id) === true);
}

function getRelatedEmployees(managerId) {
  if ((managers.some(a => a.some(a => a === managerId) === true)) === true) {
    const colabs = data.employees;
    const colabsRelateds = colabs.filter(a => a.managers.some(a => a === managerId));
    return colabsRelateds.map(colabs => `${colabs.firstName} ${ colabs.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
