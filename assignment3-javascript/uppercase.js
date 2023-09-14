const people=[
    {name:`Alice`,age:30},
    {name:`Bob`,age:25},
    {name:`Charlie`,age:35},
    {name:`David`,age:30},

];

const uppercaseNames=people.map(person=>person.name.toUpperCase());
console.log(`uppercase names:`,uppercaseNames);

const totalAge=people.reduce((sum,person) => sum+person.age,0);
const averageAge=totalAge/people.length;
console.log(`Average age:`,averageAge)

//foreach
console.log(`people and their ages:`);
people.forEach(person=>{
    console.log(`${person.name}:${person.age}years old`);
});