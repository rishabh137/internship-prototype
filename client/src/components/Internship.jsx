import { Typography, Box, styled } from "@mui/material"
import internPic from "../img/internship.jpg"
import { INTERNSHIP_DATA } from "../config/internshipData"
import { NavLink } from "react-router-dom"

const StyledBar = styled(Box)({
    maxWidth: "1320px",
    margin: "auto",

    '& > h1': {
        fontSize: "3rem",
        fontWeight: 400
    },

    '& > div > div  > h2': {
        fontSize: "2.3rem",
        fontWeight: 400
    },

    '& > div > div > div > p': {
        fontSize: "1.2rem",
    },

    '& > div > .about': {
        display: "flex",
        justifyContent: "space-between",

        '& > div > h2': {
            fontSize: "2.3rem",
            fontWeight: 400
        }
    },

    '& > div > div > .offer': {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",

        '& > a': {
            transition: "0.1s",
            width: "400px",
            margin: "2rem 0",
            position: "relative",
            display: "inline-block"

        },

        '& > a:hover': {
            transform: "scale(1.1)"
        }
    }
})

const Internship = () => {
    return (
        <>
            <StyledBar>
                <h1>Join Our Internship Program</h1>
                <hr style={{ marginBottom: "3rem" }} />
                <Box>
                    <Box className="about">
                        <Box>
                            <h2>About Us</h2>
                            <Typography>Welcome to Extion Infotech, where innovation meets excellence. We pride ourselves on nurturing the next generation of talent. Our internship program is designed to provide a dynamic learning environment and hands-on experience in the industry.</Typography>
                            <br />
                            <Typography>Our mission is to revolutionize the industry through innovative technologies and exceptional customer service. We aim to create products and services that not only meet but exceed our customers' expectations, driving success and growth for businesses and individuals alike.</Typography>
                        </Box>
                        <img src={internPic} alt="internship" />
                    </Box>
                    <Box>
                        <h2>Program Overview</h2>
                        <Typography>Our internship program is a comprehensive opportunity for students and recent graduates to gain invaluable industry experience. Internships are available year-round and vary in duration, typically ranging from 1 month to 3 month. We offer both full-time and part-time positions, with options for remote internships to accommodate different needs.</Typography>
                        <br />
                        <Typography>Our internship program is structured to provide a balanced blend of learning, development, and professional exposure</Typography>
                    </Box>
                    <Box>
                        <h2>Why Intern with Us?</h2>
                        <ul style={{ fontSize: "1.2rem" }}>
                            <li><span style={{ fontWeight: "bold" }}>Skill Development:</span> Gain practical skills and knowledge in your field of interest.</li>
                            <li><span style={{ fontWeight: "bold" }}>Networking:</span> Connect with industry professionals and build your professional network.</li>
                            <li><span style={{ fontWeight: "bold" }}>Mentorship:</span> Receive guidance and support from experienced mentors.</li>
                            <li><span style={{ fontWeight: "bold" }}>Career Opportunities:</span> Outstanding interns may be offered full-time positions post-graduation.</li>
                        </ul>
                    </Box>
                    <Box>
                        <h2>Internships We Offer</h2>
                        <Box className="offer">
                            {
                                INTERNSHIP_DATA.map(data => (
                                    <NavLink key={data.id} to="https://docs.google.com/forms/d/e/1FAIpQLSevJAasjy4LYz9iuAzcTZu7oppCqni7uoVxzVSDm5pNVp17ww/viewform" target="_blank" rel="noopener noreferrer">
                                        <img src={data.photo} alt={data.title} style={{ maxWidth: "100%", height: "400px", display: "block" }} />
                                        <Typography style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            background: "rgba(0, 0, 0, 1)", /* Semi-transparent background */
                                            color: "white",
                                            padding: "10px 20px",
                                            borderRadius: "5px",
                                            textAlign: "center",
                                        }}
                                        >{data.title}</Typography>
                                    </NavLink>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </StyledBar>
        </>
    )
}

export default Internship