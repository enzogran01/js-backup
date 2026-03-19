import { setTimeout } from "core-js";

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ei! Sou a promise!");
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log("Terminou.");
}