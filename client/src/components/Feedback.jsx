import { Box, Typography, styled, TextField, Button } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

const StyledBar = styled(Box)({
    maxWidth: "1320px",
    margin: "auto",

    '& > div > div > h1': {
        fontSize: "3rem",
        fontWeight: 400
    },

    '& > div > div > h2': {
        fontSize: "2.3rem",
        fontWeight: 400
    },

    '& > div > div > p': {
        fontSize: "1.2rem",
    }

})

const Feedback = () => {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/api/feedback/save", { message })
            setMessage("")
        } catch (error) {
            setError("Please try after sometime")
        }
    }

    useEffect(() => {
        const fetchMessage = async () => {
            const { data } = await axios.get("http://localhost:8000/api/feedback")
            setData(data)
        }
        fetchMessage()
    }, [message])

    return (
        <>
            <StyledBar>
                <Box>
                    <Box>
                        <h1>We Want to Hear from You!</h1>
                        <Typography>At Extion Infotech, we value your opinions and feedback. Your insights help us improve and provide more valuable content to our readers. Please take a moment to share your thoughts on this article. Whether you have suggestions, questions, or just want to join the conversation, we welcome your input!</Typography>
                    </Box>
                    <Box>
                        <h2>Leave a Comment</h2>
                        <Typography>Share your thoughts on this article. We value your feedback and encourage open discussions.</Typography>
                    </Box>
                    <Box>
                        {
                            error ?
                                <Typography style={{ color: "red", marginBottom: "0" }}>{error}</Typography>
                                :
                                ""
                        }
                        <form onSubmit={handleSubmit}>
                            <TextField style={{ marginTop: "3rem" }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                label="Your feedback"
                                variant="outlined"
                                fullWidth
                                color=""
                                margin="normal"
                                autoComplete="off"
                                required="true"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                PUBLISH
                            </Button>
                        </form>
                    </Box>
                    {
                        data.map((mess) => (
                            <Box>
                                <h3 style={{ marginBottom: "0" }}>Anonymous User</h3>
                                <Typography>{mess.message}</Typography>
                                <hr />
                            </Box>
                        ))
                    }
                </Box>
            </StyledBar>
        </>
    )
}

export default Feedback