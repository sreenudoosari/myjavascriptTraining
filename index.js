//Getters and Setters
const person = {
    firstName: "Sreenu",
    lastName : "DOOSARI",
    get fullName(){
       return `${this.firstName} ${this.lastName}`; 
    },
    set fullName(value){
      const parts =  value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
}

person.fullName = "Sandeep SAI";
console.log(person.fullName);