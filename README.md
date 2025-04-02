Since you’re using PowerShell, I’ll adjust the `README.md` to reflect PowerShell commands instead of Bash for the installation section. The rest of the file remains largely the same, but I’ll provide the full updated content for easy copy-pasting.

Here’s the complete `README.md` tailored for PowerShell:

```markdown
# Family Tree Data Structure

This project implements a family tree data structure in JavaScript, allowing you to manage family relationships, add members, define parent-child connections, and display descendants in a hierarchical format.

## Features

- **Person Management**: Store individuals with their name and birthdate.
- **Relationships**: Define parent-child and spousal relationships.
- **Updates**: Modify individual details dynamically.
- **Traversal**: Recursively traverse the tree to find all descendants of a person.
- **Display**: Output descendants in a clear, indented hierarchy.

## Installation

1. **Clone the Repository**:
   ```powershell
   git clone https://github.com/ThathsiluRa/family-tree
   Set-Location -Path .\family-tree
   ```

2. **Requirements**:
   - Node.js (optional, for running in PowerShell). No external dependencies are required.

3. **Run the Code**:
   - If using Node.js, run:
     ```powershell
     node familyTree.js
     ```
   - Alternatively, open `familyTree.js` in a browser console or integrate it into a web project.

## Usage

The main file, `familyTree.js`, contains two classes: `Person` and `FamilyTree`, along with a test function.

### Example

```javascript
const tree = new FamilyTree();

// Add family members
tree.addPerson("John", "1980-01-01");
tree.addPerson("Jane", "1982-03-15");
tree.addPerson("Alex", "2005-06-10");
tree.addPerson("Emily", "2008-09-22");
tree.addPerson("Sarah", "2025-01-15");
tree.addPerson("Michael", "2027-03-20");

// Define relationships
tree.setSpouse("John", "Jane");
tree.setParentChild("John", "Alex");
tree.setParentChild("John", "Emily");
tree.setParentChild("Jane", "Alex");
tree.setParentChild("Jane", "Emily");
tree.setParentChild("Alex", "Sarah");
tree.setParentChild("Alex", "Michael");

// Display descendants
console.log("Descendants of John:");
tree.displayDescendants("John");
```

### Output
```
Descendants of John:
- John (Born: 1980-01-01)
  - Alex (Born: 2005-06-10)
    - Sarah (Born: 2025-01-15)
    - Michael (Born: 2027-03-20)
  - Emily (Born: 2008-09-22)
```

## API

### `Person`
- `constructor(name, birthdate)`: Creates a person with a name and birthdate.
- `toString()`: Returns a string representation of the person.

### `FamilyTree`
- `addPerson(name, birthdate)`: Adds a new person to the tree.
- `setParentChild(parentName, childName)`: Links a parent to a child.
- `setSpouse(person1Name, person2Name)`: Sets two people as spouses.
- `updateDetails(name, attribute, value)`: Updates a person’s attribute.
- `getDescendants(name, level = 0)`: Returns an array of descendants with their levels.
- `displayDescendants(name)`: Prints all descendants of a person.

