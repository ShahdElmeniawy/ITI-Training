document.addEventListener('DOMContentLoaded', function () {
    const studentObject = {
        id: 1,
        name: "John Doe",
        age: 21,
        address: {
            street: "123 Main St",
            city: "New York",
            country: "USA"
        },
        skills: ["JavaScript", "HTML", "CSS", "React"],
        isLeader: true
    };

    const studentsArray = [
        {
            id: 1,
            name: "Alice Johnson",
            age: 22,
            address: {
                street: "456 Oak Ave",
                city: "Boston",
                country: "USA"
            },
            skills: ["Java", "Python", "SQL"],
            isLeader: true
        },
        {
            id: 2,
            name: "Bob Smith",
            age: 20,
            address: null,
            skills: ["JavaScript", "Node.js", "MongoDB"],
            isLeader: false
        },
        {
            id: 3,
            name: "Carol Williams",
            age: 23,
            address: {
                street: "789 Pine Rd",
                city: "Chicago",
                country: "USA"
            },
            skills: ["C++", "Algorithms", "Data Structures"],
            isLeader: true
        }
    ];

    const studentsList = document.getElementById('studentsList');

    studentsArray.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';

        let addressText = "No address provided";
        let addressClass = "null-address";

        if (student.address) {
            addressText = `${student.address.street}, ${student.address.city}, ${student.address.country}`;
            addressClass = "";
        }

        studentCard.innerHTML = `
            <h3>${student.name} ${student.isLeader ? '<span class="leader">(Leader)</span>' : ''}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Address:</strong> <span class="${addressClass}">${addressText}</span></p>
            <p><strong>Skills:</strong></p>
            <div>${student.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}</div>
        `;

        studentsList.appendChild(studentCard);
    });

    console.log("JSON String:", JSON.stringify(studentsArray, null, 2));
});