import Feedback from "../models/feedback.model.js"

export const getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find().sort({ createdAt: -1 })
        if (!feedback) {
            return res.status(400).json({ error: "No feedback found" })
        }
        res.status(200).json(feedback)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" })
    }
}

export const saveFeedback = async (req, res) => {
    try {
        const { message } = req.body

        const feedback = new Feedback({
            message: message
        })
        await feedback.save()
        return res.status(201).json(feedback)

    } catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }
}