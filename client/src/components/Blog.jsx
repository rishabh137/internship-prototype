import { Box, Typography, styled } from "@mui/material"

const StyledBar = styled(Box)({
    maxWidth: "1320px",
    margin: "auto",

    '& > div > ul > li > span': {
        fontWeight: "bold"
    },

    '& > div > h1': {
        fontSize: "3rem",
        fontWeight: 400
    },

    '& > div > h2': {
        fontSize: "2.3rem",
        fontWeight: 400
    },

    '& > div > ul, p': {
        fontSize: "1.2rem",
    }

})

const Blog = () => {
    return (
        <>
            <StyledBar>
                <Box>
                    <h1>Welcome to Our Blog</h1>
                    <Typography>Welcome to the Extion Infotech Blog! Here, you'll find a wealth of information designed to help you stay ahead in your career, keep up with the latest industry trends, and gain insights from the experiences of our past and current interns. Whether you're a student, a professional, or just someone passionate about our industry, there's something here for you.</Typography>
                </Box>
                <hr />
                <Box>
                    <h2>Industry Trends</h2>
                    <h3>Stay Updated with the Latest Industry Trends</h3>
                    <Typography>Our industry is constantly evolving, and staying updated with the latest trends is crucial for success. In this section, we cover:</Typography>
                    <ul>
                        <li><span>Emerging Technologies:</span> Discover the latest advancements in technology and how they are shaping the future of our industry.</li>
                        <li><span>Market Analysis:</span> In-depth analysis of market trends, consumer behavior, and industry shifts.</li>
                        <li><span>Expert Interviews:</span> Insights from industry leaders and experts about where the industry is heading.</li>
                    </ul>
                </Box>
                <hr />
                <Box>
                    <h2>Career Advice</h2>
                    <h3>Career Advice for Aspiring Professionals</h3>
                    <Typography>Navigating your career path can be challenging, but we're here to help. Our career advice section includes:</Typography>
                    <ul>
                        <li><span>Resume and Cover Letter Tips:</span> Learn how to create compelling resumes and cover letters that stand out.</li>
                        <li><span>Interview Preparation:</span> Tips and strategies to ace your interviews.</li>
                        <li><span>Professional Development:</span> Advice on skill-building, networking, and career advancement.</li>
                    </ul>
                </Box>
                <hr />
                <Box>
                    <h2>Internship Experiences</h2>
                    <h3>Internship Experiences at Extion Infotech</h3>
                    <Typography>Get a glimpse into the lives of our interns and learn from their journeys. This section features:</Typography>
                    <ul>
                        <li><span>Intern Stories:</span> Personal accounts from past and current interns about their experiences, challenges, and achievements.</li>
                        <li><span>Day in the Life:</span> A typical day for an intern at [Company Name], showcasing the work environment and culture.</li>
                        <li><span>Advice from Interns:</span> Tips and advice from interns on making the most out of your internship.</li>
                    </ul>
                </Box>
                <hr />
                <Box>
                    <h2>What Our Intern Say</h2>
                    <h3>My Journey as an Intern at Extion Infotech: What I Learned and Achieved</h3>
                    <Typography>Posted on June 23, 2024</Typography>
                    <Typography>Internships are a critical stepping stone for many students and young professionals. They offer hands-on experience, valuable insights into industry practices, and an opportunity to apply theoretical knowledge in real-world scenarios. As a recent intern at Extion Infotech, I'd like to share my journey, the skills I developed, and the experiences that have shaped my career path.</Typography>
                    <Box>
                        <h3>Why I Chose Extion Infotech</h3>
                        <Typography>Choosing Extion Infotech for my internship was an easy decision. Known for its innovative approach and supportive work environment, the company stood out as an ideal place to learn and grow. The internship program's reputation for offering comprehensive training and real project involvement was a major draw.</Typography>
                    </Box>
                    <Box>
                        <h3>Initial Impressions</h3>
                        <Typography>From the very first day, the welcoming and inclusive culture at Extion Infotech was evident. The onboarding process was smooth, and I was introduced to my mentor, who guided me throughout the internship. The team was friendly and always willing to help, making it easy to settle in.</Typography>
                    </Box>
                    <Box>
                        <h3>Hands-On Experience</h3>
                        <Typography>One of the most valuable aspects of my internship was the hands-on experience. I was assigned to the web development, where I worked on various projects. This allowed me to apply my academic knowledge and gain practical skills in MERN.</Typography>
                    </Box>
                    <Box>
                        <h3>Mentorship and Support</h3>
                        <Typography>Having a dedicated mentor made a significant difference in my internship experience. My mentor provided regular feedback, helped me set goals, and encouraged me to take on new challenges. This support system was crucial in building my confidence and enhancing my learning.</Typography>
                    </Box>
                    <Box>
                        <h3>Conclusion</h3>
                        <Typography>My internship at Extion Infotech was a transformative experience. It provided me with practical skills, professional growth, and a clearer understanding of my career aspirations. I am grateful for the opportunity and look forward to applying the knowledge and experience I gained in my future endeavors.</Typography>
                    </Box>
                </Box>
            </StyledBar>
        </>
    )
}

export default Blog