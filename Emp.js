const emp=[{ id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Divya" },
  { id: 4, name: "Ramesh" }
]
emp.splice(1,2,{ id: 5, name: "Sneha" },{ id: 6, name: "Arjun" })
console.log(emp)
console.log(emp.length)