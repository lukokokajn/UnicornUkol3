function main(dtoIn) {
    // Pole českých mužských a ženských jmen
    const maleNames = [
        "Jan", "Petr", "Lukáš", "Jakub", "Tomáš", "Ondřej", "Josef", "Marek", "Martin", "Daniel",
        "Vojtěch", "Filip", "Adam", "Michal", "Karel", "Radek", "Šimon", "Matyáš", "David", "Jiří",
        "Zdeněk", "Pavel", "Jaroslav", "Milan", "Václav", "Aleš", "Roman", "Miroslav", "František", "Stanislav"
    ];

    const femaleNames = [
        "Jana", "Petra", "Lucie", "Eliška", "Anna", "Tereza", "Veronika", "Hana", "Kateřina", "Barbora",
        "Martina", "Alena", "Kristýna", "Michaela", "Lenka", "Gabriela", "Natálie", "Monika", "Zuzana",
        "Simona", "Adéla", "Klára", "Ivana", "Nikola", "Věra", "Marie", "Šárka", "Iveta", "Andrea", "Eva"
    ];

    // Pole českých příjmení
    const maleSurnames = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák",
        "Němec", "Pokorný", "Marek", "Pospíšil", "Hájek", "Král", "Jelínek", "Růžička", "Fiala",
        "Sedláček", "Kolář", "Urban", "Beneš", "Krejčí", "Hruška", "Šimůnek", "Bláha", "Malý",
        "Mach", "Havel", "Zeman", "Vávra", "Staněk", "Vaněk", "Beran", "Holub", "Čermák", "Kopecký",
        "Polák", "Bartoš", "Kříž", "Říha", "Štěpánek", "Vacek", "Matoušek", "Doležal", "Pavlík",
        "Vlk", "Hrušek", "Říha", "Šváb"
    ];

    const femaleSurnames = [
        "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová",
        "Veselá", "Horáková", "Němcová", "Pokorná", "Marková", "Pospíšilová", "Hájková",
        "Králová", "Jelínková", "Růžičková", "Fialová", "Sedláčková", "Kolářová",
        "Urbanová", "Benešová", "Krejčíová", "Hrušková", "Šimůnková", "Bláhová",
        "Malá", "Machová", "Havlová", "Zemanová", "Vávrová", "Staňková", "Vaňková",
        "Beranová", "Holubová", "Čermáková", "Kopecká", "Poláková", "Bartošová",
        "Křížová", "Říhová", "Štěpánková", "Vacková", "Matoušková", "Doležalová",
        "Pavlíková", "Beránková", "Hrušková", "Říhová", "Švábová", "Matějková"
    ];

    const workloads = [10, 20, 30, 40];

    // Extrahujeme vstupy
    const { count, age } = dtoIn;
    const employees = [];

    for (let i = 0; i < count; i++) {
        // Náhodné pohlaví
        const gender = Math.random() < 0.5 ? "male" : "female";

        // Náhodné jméno a příjmení
        const name = gender === "male"
            ? maleNames[Math.floor(Math.random() * maleNames.length)]
            : femaleNames[Math.floor(Math.random() * femaleNames.length)];

        const surname = gender === "male"
            ? maleSurnames[Math.floor(Math.random() * maleSurnames.length)]
            : femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];

        // Vypočítáme datum narození
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - age.max;
        const maxYear = currentYear - age.min;
        const birthYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
        const birthMonth = Math.floor(Math.random() * 12);
        const birthDay = Math.floor(Math.random() * 28) + 1;
        const birthdate = new Date(Date.UTC(birthYear, birthMonth, birthDay)).toISOString();

        // Náhodný úvazek
        const workload = workloads[Math.floor(Math.random() * workloads.length)];

        // Vytvoříme objekt zaměstnance
        const employee = {
            gender,
            birthdate,
            name,
            surname,
            workload
        };

        employees.push(employee);
    }

    // Výstupní data
    return employees;
}

// Příklad volání funkce
const dtoIn = {
    count: 50,
    age: {
        min: 20,
        max: 30
    }
};

console.log(main(dtoIn));
