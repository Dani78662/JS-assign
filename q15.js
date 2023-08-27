// Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

const obj = {
    data: 42,
    regularFunc: function() {
        console.log(this.data);
    },
    arrowFunc: () => {
        console.log(this.data);
    }
};

obj.regularFunc(); 
obj.arrowFunc();   
