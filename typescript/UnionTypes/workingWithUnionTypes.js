function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log(`Hello ${x.join(" and ")}`);
    }
    else
        console.log(`Welcome, lone traveler ${x}`);
}
welcomePeople(["Phila", "Siya"]);
function getFirstThree(x) {
    return x.slice(0, 3);
}
getFirstThree([1, 2, 3]);
