class Person{
    firstName = "Product";
    write(){
        console.log("Person class:",this.firstName);
    }
}

class Stundent extends Person{
    read(){
        console.log("Stundent class:",this.firstName);
        super.write();
    }
}
// const desktop = new Person();
// desktop.write();
const desk = new Stundent();
desk.read();