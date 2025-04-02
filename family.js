class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = new Date(birthdate);
        this.parents = [];
        this.children = [];
        this.spouse = null;
    }

    toString() {
        return `${this.name} (Born: ${this.birthdate.toISOString().split('T')[0]})`;
    }
}

class FamilyTree {
    constructor() {
        this.people = new Map();
    }

    addPerson(name, birthdate) {
        if (this.people.has(name)) {
            throw new Error(`${name} already exists in the family tree.`);
        }
        const person = new Person(name, birthdate);
        this.people.set(name, person);
        return person;
    }

    setParentChild(parentName, childName) {
        const parent = this.people.get(parentName);
        const child = this.people.get(childName);

        if (!parent) throw new Error(`Parent ${parentName} not found.`);
        if (!child) throw new Error(`Child ${childName} not found.`);

        if (!parent.children.includes(child)) {
            parent.children.push(child);
        }
        if (!child.parents.includes(parent)) {
            child.parents.push(parent);
        }
    }

    setSpouse(person1Name, person2Name) {
        const person1 = this.people.get(person1Name);
        const person2 = this.people.get(person2Name);

        if (!person1 || !person2) {
            throw new Error("One or both persons not found.");
        }

        person1.spouse = person2;
        person2.spouse = person1;
    }

    updateDetails(name, attribute, value) {
        const person = this.people.get(name);
        if (!person) {
            throw new Error(`${name} not found in the family tree.`);
        }
        if (attribute in person) {
            person[attribute] = value;
        } else {
            throw new Error(`Attribute ${attribute} is not valid.`);
        }
    }

    getDescendants(name, level = 0) {
        const person = this.people.get(name);
        if (!person) {
            throw new Error(`${name} not found in the family tree.`);
        }

        let result = [[level, person]];
        for (const child of person.children) {
            result = result.concat(this.getDescendants(child.name, level + 1));
        }
        return result;
    }

    displayDescendants(name) {
        const descendants = this.getDescendants(name);
        descendants.forEach(([level, person]) => {
            const indent = "  ".repeat(level);
            console.log(`${indent}- ${person.toString()}`);
        });
    }
}

function runTests() {
    const tree = new FamilyTree();

    tree.addPerson("John", "1980-01-01");
    tree.addPerson("Jane", "1982-03-15");
    tree.addPerson("Alex", "2005-06-10");
    tree.addPerson("Emily", "2008-09-22");
    tree.addPerson("Sarah", "2025-01-15");
    tree.addPerson("Michael", "2027-03-20");

    tree.setSpouse("John", "Jane");
    tree.setParentChild("John", "Alex");
    tree.setParentChild("John", "Emily");
    tree.setParentChild("Jane", "Alex");
    tree.setParentChild("Jane", "Emily");
    tree.setParentChild("Alex", "Sarah");
    tree.setParentChild("Alex", "Michael");

    console.log("Descendants of John:");
    tree.displayDescendants("John");

    console.log("\nDescendants of Alex:");
    tree.displayDescendants("Alex");
}

runTests();