let student = {
    name: "Igor",      
    age: 21,              
    isStudying: true,   
    subjects: ["PE", "JS"], 
    address: {                   
        city: "Moscow",
        street: "Tverskaya",
    },
    grades: new Map([  
        ["PE", 90],
        ["JS", 85]
    ]),
    sayHello: function() {
        console.log("Hello, my name is " + this.name + "!");
    }
};