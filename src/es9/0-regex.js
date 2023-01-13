// Manejo de fechas, 4 caracteres, mes - año - dia

const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec('2023-01-01');
console.table(matchers);

