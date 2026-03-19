// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60* 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Time stamp Unix ou época unix

// const data = new Date(2019, 3, 20, 15, 14, 27); // Ano, mes, dia, hora, minuto, segundo, ms

const data = new Date(/*'2019-04-20 20:20:59'*/);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - sábado
console.log(data.toString());
console.log(Date.now());
