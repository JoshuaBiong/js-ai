import express, { response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
// import { Configuration, OpenAIApi } from 'openai'

import { OpenAI } from "openai";



dotenv.config()

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAI({ apiKey: "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" })

// const openai = new OpenAIApi(configuration)
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async(req, res) => {
    res.status(200).send({
        message: 'Hello from Josh',
    })
})

app.post('/', async(req, res) => {

    try {
        const prompt = req.body.prompt

        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: "",
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        res.status(200).semd({
            bot: response.data.choice[0].text
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }
})

app.listeners(5000, () => console.log("Server is running on port http://localhost:5000"))