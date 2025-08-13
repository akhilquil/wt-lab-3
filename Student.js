const student=["Anil", "Ravi", "Priya", "Sita", "Gopal", "Meena"]
console.log(student.slice(0,3))
console.log(student)
let n=student.length
student.splice(n-2,2,"kiran","Sneha")
console.log(student)