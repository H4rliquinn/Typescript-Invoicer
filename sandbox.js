//arrays
var names = ['Luigi', 'Mario', 'Yoshi'];
names.push('Toad');
//ERROR
// names.push(3);
// names[0]=3;
var numbers = [10, 20, 30, 40];
numbers.push(25);
//ERROR
// numbers.push('Shaun');
var mixed = ['Ken', 4, 'Chun-Li', 8, 9];
mixed.push('Ryu');
mixed[0] = 'Hi';
//ERROR
// mixed.push(true);
//objects
var ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
//ERROR
// ninja.age.age='30';
// ninja.skills=['Fighting','Sneaking'];
ninja = {
    name: 'Yoshi',
    belt: 'orange',
    age: 40
};
