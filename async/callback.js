const func1 = () => {
    console.log("1. çalıştı");
    func2();
}

const func2 = () => {
    console.log("2. çalıştı");
    func3()
}

const func3 = () => {
    console.log("3. çalıştı.");
}

func1();
