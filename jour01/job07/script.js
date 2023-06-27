function jourtravaille(date) {
  const joursFeries2020 = [
    "01/01/2020",
    "13/04/2020",
    "01/05/2020",
    "08/05/2020",
    "21/05/2020",
    "01/06/2020",
    "14/07/2020",
    "15/08/2020",
    "01/11/2020",
    "11/11/2020",
    "25/12/2020"
  ];

  const jour = date.getDate();
  const mois = date.getMonth() + 1;
  const annee = date.getFullYear();
  const formattedDate = `${jour}/${mois}/${annee}`;

  if (joursFeries2020.includes(formattedDate)) {
    console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
  } else if (date.getDay() === 0 || date.getDay() === 6) {
    console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
  } else {
    console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
  }
}

var date = new Date("2020-01-01");
jourtravaille(date);
date = new Date("2020-05-09");
jourtravaille(date);
date = new Date("2020-05-25");
jourtravaille(date);
