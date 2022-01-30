function months(arr) {
    let newArray = [];
    for (const month of arr) {
        switch (month) {
            case "Yanvar":
                newArray.push("Yanvar-1")
                break;
            case "Fevral":
                newArray.push("Fevral-2")
                break;
            case "Mart":
                newArray.push("Mart-3")
                break;
            case "Aprel":
                newArray.push("Aprel-4")
                break;
        }
    }
    return newArray;
}
let monthArray = ["Yanvar","Fevral","Mart","Aprel"];
console.log(months(monthArray));




