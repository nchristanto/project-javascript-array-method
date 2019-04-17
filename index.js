// Example 1
const studentsList = [
    {
      name: "Raisa",
      age: 23,
      gender: "Female",
      Indonesia: true,
    },
    {
      name: "Isyana",
      age: 20,
      gender: "Female",
      Indonesia: true,
    },
    {
      name: "Hamish",
      age: 26,
      gender: "Male",
      Indonesia: true,
    }
  ]
  
  // Find user older than 23
  console.log(studentsList.filter ( person => (person.age > 24)).map( person => person.name));
  
  // Find total age of all students
  console.log(studentsList.reduce( ((totalAge, person) => (totalAge + person.age)),0) );
  
  // Find all female students
  console.log(studentsList.filter(person => (person.gender === "Female")).map( person => person.name));
 
  
  
  // Example 2
  const impactbyteStudents = [
    {
      name: "Richard",
      age: 19,
      coder: true,
      gender: "Male",
      nationality: "Indonesia"
    },
    {
      name: "Gempi",
      age: 25,
      coder: false,
      gender: "Female",
      nationality: "Indonesia"
    },
    {
      name: "Doni",
      age: 26,
      coder:true,
      gender: "Male",
      nationality: "Indonesia"
    },
    {
      name: "Gading",
      age: 32,
      coder: true,
      gender: "Male",
      nationality: "Indonesia"
    },
    {
      name: "Jim Beglin",
      age: 65,
      coder: false,
      gender: "Male",
      nationality: "Indonesia"
    },
  ]
  
  // Sort students by age
  console.log(impactbyteStudents.sort( (a, b) => (a.age - b.age)).map( person => person.name));

  // List all of male coders
  console.log(impactbyteStudents.filter( person => (person.gender === "Male" && person.coder === true)).map(person => person.name));

  
  