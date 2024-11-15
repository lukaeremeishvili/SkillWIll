// Homework #1
const mySetTimeout = (delay) => new Promise(resolve => setTimeout(resolve, delay));

(async function() {
    await mySetTimeout(5000);
    console.log('5 seconds passed');
})();

// Homework #2 

// .then().catch() variant
function makeToys() {
    console.log("Making toys...");
    return mySetTimeout(3000).then(() => {
        if (Math.random() > 0.1) {
            console.log("Toys are in perfect condition!");
            return "Undefected";
        } else {
            throw "The toys are defective.";
        }
    });
}
function deliverToys(status) {
    if (status !== "Undefected") throw "Cannot deliver defective toys.";
    console.log("Delivering toys...");
    return mySetTimeout(2000).then(() => {
        console.log("Toys delivered successfully.");
        return "Delivered";
    });
}

function sellToys(deliveryStatus) {
    if (deliveryStatus !== "Delivered") throw "Cannot sell toys that weren't delivered.";
    console.log("Selling toys...");
    return mySetTimeout(1000).then(() => {
        if (Math.random() > 0.7) {
            console.log("Toys sold successfully!");
            return "Sold";
        } else {
            throw "The toys didn't sell.";
        }
    });
}
makeToys()
    .then(deliverToys)
    .then(sellToys)
    .catch((err) => {
    console.error("Error:", err);
});


// Switch
console.log("\n--- Async/Await Version ---\n");

// Async/Await Variant
async function makeToys() {
    console.log("Making toys...");
    await mySetTimeout(3000);
    if (Math.random() > 0.1) {
        console.log("Toys are in perfect condition!");
        return "Undefected";
    }
    throw "The toys are defective.";
}
async function deliverToys(status) {
    if (status !== "Undefected") throw "Cannot deliver defective toys.";
    console.log("Delivering toys...");
    await mySetTimeout(2000);
    console.log("Toys delivered successfully.");
    return "Delivered";
}
async function sellToys(deliveryStatus) {
    if (deliveryStatus !== "Delivered") throw "Cannot sell toys that weren't delivered.";
    console.log("Selling toys...");
    await mySetTimeout(1000);
    if (Math.random() > 0.7) {
        console.log("Toys sold successfully!");
        return "Sold";
    }
    throw "The toys didn't sell.";
}
async function processToys() {
    try {
        const status = await makeToys();
        const deliveryStatus = await deliverToys(status);
        await sellToys(deliveryStatus);
    } catch (err) {
        console.error("Error:", err); 
    }
}

processToys();

