
const fetch = require("node-fetch");

exports.handler = async function(event, context) {
    try {
        const { input } = JSON.parse(event.body);

        const response = await fetch("https://api-inference.huggingface.co/models/bigcode/starcoder", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.HF_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: input })
        });

        const result = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
