const { faker } = require('@faker-js/faker');

exports.index = (req, res) => {
    let contacts = [];
    for (let i = 0; i < 20; i++) {
        contacts.push(contact());
    }
    return contacts;
};

contact = () => ({
        firstName: faker.name.firstName(),
        // Middle name optional
        middleName: Math.random() < 0.5 ? faker.name.middleName() : null,
        lastName: faker.name.lastName()
    });