const sampleEvents = [
    {
        name: "🔒 MASTER THE WEB 🔒",
        description: "A one-day journey into Web Application Security with Priya Sharma, Cybersecurity Analyst at CloudSec Technologies, India! Tired of cross-site scripting, SQL injections, and insecure cookies? Let’s simplify, learn, and conquer together!",
        date: "2025-02-05",
        time: "5:00 PM - 7:30 PM",
        category: "Workshops",
        organizer: "Cybersecurity Club",
        location: "Online",
        capacity: 150
    },
    {
        name: "🚀 AI FOR EVERYONE 🚀",
        description: "Two days of exploring Artificial Intelligence with Dr. Anil Kumar, AI Specialist at Nvidia, Bangalore! Get hands-on experience with Python, TensorFlow, and neural networks to unlock the magic of AI.",
        date: "2025-02-20",
        time: "10:00 AM - 4:00 PM",
        category: "Seminars",
        organizer: "AI Club",
        location: "Seminar Hall, MJCET",
        capacity: 200
    },
    {
        name: "💡 THINK CLOUD 💡",
        description: "Discover the power of Google Cloud with Sahil Verma, Cloud Engineer at Google India! Learn how to deploy, manage, and scale cloud applications efficiently.",
        date: "2025-03-01",
        time: "11:00 AM - 3:00 PM",
        category: "Technical",
        organizer: "Cloud Computing Society",
        location: "Room 202, Main Block",
        capacity: 100
    },
    {
        name: "🏆 CODE-A-THON 2025 🏆",
        description: "Compete in a 24-hour coding marathon to solve real-world problems! With exciting challenges and prizes worth ₹50,000, this is your chance to shine.",
        date: "2025-02-10",
        time: "9:00 AM - 9:00 AM (Next Day)",
        category: "Competitions",
        organizer: "Coding Club",
        location: "Lab 5, Tech Block",
        capacity: 50
    },
    {
        name: "🎨 DESIGN YOUR WAY 🎨",
        description: "Learn UX/UI design fundamentals with Harini Rao, Lead Designer at Adobe India! Master tools like Figma and Adobe XD to create stunning user experiences.",
        date: "2025-03-05",
        time: "2:00 PM - 5:00 PM",
        category: "Workshops",
        organizer: "Design Club",
        location: "Lab 3, Creativity Wing",
        capacity: 80
    },
    {
        name: "🌍 GREEN HACKATHON 🌍",
        description: "Participate in a hackathon focused on sustainability and green tech solutions! Bring your ideas and build innovative projects with expert mentorship.",
        date: "2025-03-15",
        time: "10:00 AM - 10:00 PM",
        category: "Competitions",
        organizer: "Eco Club",
        location: "Innovation Hub, MJCET",
        capacity: 60
    },
    {
        name: "📈 STARTUP BOOTCAMP 📈",
        description: "Turn your ideas into reality with our startup bootcamp! Hosted by Rohan Mehta, CEO of StartupWorks, this session will guide you through business modeling, funding, and pitching.",
        date: "2025-03-18",
        time: "3:00 PM - 7:00 PM",
        category: "Seminars",
        organizer: "Entrepreneurship Cell",
        location: "Auditorium, New Block",
        capacity: 120
    },
    {
        name: "⚡ ENERGY FUTURE FORUM ⚡",
        description: "Dive into the world of renewable energy with Dr. Kavita Nair, Chief Scientist at ISRO! Learn about solar tech, wind energy, and sustainable solutions shaping the future.",
        date: "2025-03-22",
        time: "10:00 AM - 1:00 PM",
        category: "Technical",
        organizer: "Energy Club",
        location: "Room 108, Science Block",
        capacity: 90
    },
    {
        name: "🎤 PUBLIC SPEAKING MASTERCLASS 🎤",
        description: "Conquer your stage fear and become a confident speaker! Join this interactive masterclass with Sanjay Khanna, renowned TEDx speaker and communication coach.",
        date: "2025-02-25",
        time: "4:00 PM - 6:30 PM",
        category: "Workshops",
        organizer: "Toastmasters Club",
        location: "Room 405, Humanities Block",
        capacity: 70
    },
    {
        name: "🌟 INNOVATORS CONNECT 🌟",
        description: "A networking event for innovators and visionaries! Meet industry leaders and showcase your ideas in an open platform.",
        date: "2025-02-28",
        time: "6:00 PM - 9:00 PM",
        category: "Cultural",
        organizer: "Innovation Hub",
        location: "Cafeteria Lawn, MJCET",
        capacity: 200
    },
    {
        name: "💻 HACK THE FUTURE 💻",
        description: "Join us for an intense 48-hour hackathon to innovate solutions for real-world problems! Develop your coding, teamwork, and problem-solving skills with mentors from top tech companies.",
        date: "2025-04-10",
        time: "6:00 PM (Day 1) - 6:00 PM (Day 2)",
        category: "Competitions",
        organizer: "Tech Innovators",
        location: "Tech Lab, MJCET",
        capacity: 100
    },
    {
        name: "🔐 CYBER DEFENSE CHALLENGE 🔐",
        description: "Test your cybersecurity knowledge and defend against real-world cyber threats! Learn about penetration testing, ethical hacking, and network security techniques.",
        date: "2025-04-12",
        time: "11:00 AM - 3:00 PM",
        category: "Workshops",
        organizer: "Cyber Security Club",
        location: "Room 305, Engineering Block",
        capacity: 50
    },
    {
        name: "🧠 MACHINE LEARNING MASTERCLASS 🧠",
        description: "Dive into the world of machine learning with Shreya Gupta, Data Scientist at Accenture! Explore algorithms, neural networks, and deep learning techniques.",
        date: "2025-04-18",
        time: "9:30 AM - 1:30 PM",
        category: "Seminars",
        organizer: "Data Science Society",
        location: "Seminar Hall, MJCET",
        capacity: 200
    },
    {
        name: "🌍 GLOBAL CONNECT: AI & ETHICS 🌍",
        description: "Join this global conference on the ethics of AI and its impact on society. Listen to industry leaders and academic experts discussing AI policy, privacy, and regulations.",
        date: "2025-04-25",
        time: "10:00 AM - 5:00 PM",
        category: "Seminars",
        organizer: "AI Ethics Club",
        location: "Auditorium, MJCET",
        capacity: 250
    },
    {
        name: "📊 DATA ANALYTICS BOOTCAMP 📊",
        description: "Learn the fundamentals of data analytics with Python and Excel! Build data-driven insights to make informed business decisions.",
        date: "2025-05-03",
        time: "2:00 PM - 6:00 PM",
        category: "Workshops",
        organizer: "Data Analytics Club",
        location: "Room 107, Commerce Block",
        capacity: 60
    },
    {
        name: "🎮 GAMING FOR GOOD 🎮",
        description: "Join this unique event where gaming meets charity! Compete in fun gaming challenges and raise funds for social causes. Prizes await the winners!",
        date: "2025-05-06",
        time: "12:00 PM - 8:00 PM",
        category: "Cultural",
        organizer: "Gaming Club",
        location: "Gaming Arena, MJCET",
        capacity: 120
    },
    {
        name: "🚀 SPACE INNOVATIONS 🚀",
        description: "Embark on a journey through space tech and innovations with experts from NASA! Learn about satellite systems, space exploration, and cutting-edge space technologies.",
        date: "2025-05-10",
        time: "3:00 PM - 6:00 PM",
        category: "Technical",
        organizer: "Astronomy Club",
        location: "Room 301, Science Block",
        capacity: 100
    },
    {
        name: "🎤 PUBLIC SPEAKING FOR LEADERS 🎤",
        description: "Boost your leadership and public speaking skills in this immersive session with expert coaches. Master the art of persuasion and influence.",
        date: "2025-05-15",
        time: "5:00 PM - 7:00 PM",
        category: "Workshops",
        organizer: "Leadership Club",
        location: "Room 408, Humanities Block",
        capacity: 80
    },
    {
        name: "💼 STARTUP PITCH NIGHT 💼",
        description: "Pitch your startup ideas to investors, VCs, and entrepreneurs. Get valuable feedback and mentorship to take your startup to the next level.",
        date: "2025-05-20",
        time: "6:00 PM - 9:00 PM",
        category: "Competitions",
        organizer: "Entrepreneurship Club",
        location: "Innovation Lab, MJCET",
        capacity: 50
    },
    {
        name: "🎉 CULTURAL FESTIVAL 2025 🎉",
        description: "Experience the vibrant culture of our college! Participate in dance, music, arts, and culinary competitions while enjoying performances from the best talent.",
        date: "2025-06-01",
        time: "10:00 AM - 6:00 PM",
        category: "Cultural",
        organizer: "Cultural Committee",
        location: "College Grounds, MJCET",
        capacity: 500
    }
];

module.exports = { data: sampleEvents };