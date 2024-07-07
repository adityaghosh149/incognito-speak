import { v4 as uuidv4 } from "uuid";

const posts = [
	{
		postid: uuidv4(),
		username: "user_01",
		time: "02:00 PM 06-07-2023",
		title: "Exploring Sustainable Agriculture Methods in Rural Communities",
		description:
			"Recently visited a rural community experimenting with sustainable agriculture techniques. Fascinated by their innovative approaches to farming and community building.",
		media:
			"https://risenshinefarm.com/wp-content/uploads/2021/02/about-1-2048x1366.jpg",
		topic: "Agriculture",
	},
	{
		postid: uuidv4(),
		username: "techGuru99",
		time: "01:00 PM 06-07-2023",
		title: "Deep Dive into Quantum Computing",
		description:
			"Attended a workshop on quantum computing basics. It was mind-boggling to grasp the concept of quantum superposition and its potential impact on future technologies.",
		media:
			"https://metapress.com/wp-content/uploads/2023/11/Quantum-Leap-A-Deep-Dive-into-Quantum-Computing-Simulators-and-Their-Potential-1024x576.jpeg",
		topic: "Technology",
	},
	{
		postid: uuidv4(),
		username: "AI_enthusiast",
		time: "12:00 PM 05-07-2023",
		title: "Artificial Intelligence: Ethics and Challenges",
		description:
			"Explored the ethical dilemmas surrounding AI development. The discussion covered issues such as bias in algorithms, privacy concerns, and the future of AI-human collaboration.",
		media: null,
		topic: "AI",
	},
	{
		postid: uuidv4(),
		username: "spaceLover42",
		time: "12:00 PM 04-07-2023",
		title: "Space Exploration: Journey to Mars",
		description:
			"Engaged in a debate on the feasibility of human colonization on Mars. Discussed technological advancements required, potential challenges, and ethical considerations.",
		media: null,
		topic: "Space",
	},
	{
		postid: uuidv4(),
		username: "ecoWarrior",
		time: "12:00 PM 03-07-2023",
		title: "Environmental Conservation: Protecting Our Oceans",
		description:
			"Joined a beach cleanup initiative to raise awareness about ocean pollution. Witnessed the impact of plastic waste on marine life and participated in sustainable practices.",
		media:
			"https://maritimecyprus.com/wp-content/uploads/2020/08/Protect-our-oceans.jpg",
		topic: "Environment",
	},
	{
		postid: uuidv4(),
		username: "solarPowerFan",
		time: "12:00 PM 02-07-2023",
		title: "Renewable Energy: Harnessing Solar Power",
		description:
			"Visited a solar energy farm and learned about harnessing solar power as a sustainable energy source. Impressed by the efficiency and potential of solar technologies.",
		media: null,
		topic: "Energy",
	},
	{
		postid: uuidv4(),
		username: "cryptoKing",
		time: "12:00 PM 01-07-2023",
		title: "Cryptocurrency: Future of Digital Finance",
		description:
			"Attended a seminar on blockchain technology and its role in reshaping financial systems. Explored the potential of cryptocurrencies like Bitcoin and Ethereum.",
		media: null,
		topic: "Finance",
	},
	{
		postid: uuidv4(),
		username: "AR_VR_fanatic",
		time: "12:00 PM 30-06-2023",
		title: "Augmented Reality in Education",
		description:
			"Explored the integration of AR in educational settings. Discussed its impact on student engagement, interactive learning experiences, and future possibilities.",
		media:
			"https://www.neilsahota.com/wp-content/uploads/2023/02/Augmented-Reality-in-Education.jpg",
		topic: "Education",
	},
	{
		postid: uuidv4(),
		username: "remoteWorker",
		time: "12:00 PM 29-06-2023",
		title: "Future of Work: Remote Collaboration Tools",
		description:
			"Participated in a panel discussion on remote work tools. Explored the advantages of virtual collaboration platforms and their role in shaping the future of work.",
		media: null,
		topic: "Work",
	},
	{
		postid: uuidv4(),
		username: "healthTech",
		time: "12:00 PM 28-06-2023",
		title: "Digital Transformation in Healthcare",
		description:
			"Explored the impact of digital technologies on healthcare delivery. Discussed AI in diagnostics, telemedicine advancements, and patient data security.",
		media: null,
		topic: "Healthcare",
	},
	{
		postid: uuidv4(),
		username: "mlRookie",
		time: "12:00 PM 27-06-2023",
		title: "Introduction to Machine Learning",
		description:
			"Completed a comprehensive course on machine learning. Learned about various algorithms and their applications in real-world scenarios.",
		media:
			"https://www.e-spincorp.com/wp-content/uploads/2018/01/Machine-Learning.jpg",
		topic: "Machine Learning",
	},
	{
		postid: uuidv4(),
		username: "spaceExplorer",
		time: "12:00 PM 26-06-2023",
		title: "The Wonders of Space Telescopes",
		description:
			"Watched a documentary on space telescopes. Gained insights into how these powerful tools help us explore the universe and make groundbreaking discoveries.",
		media:
			"https://solarmuseum.org/wp-content/uploads/2019/05/nasa_gov_hubblesm4.jpg",
		topic: "Space",
	},
	{
		postid: uuidv4(),
		username: "yogiMaster",
		time: "12:00 PM 25-06-2023",
		title: "Yoga for Mental Health",
		description:
			"Attended a yoga retreat focused on mental health. Learned various techniques and poses that help in reducing stress and improving overall well-being.",
		media:
			"https://files.utsav.yoga/image/2022-05-19/Yoga_For_Mental_health1652944944504.png",
		topic: "Health",
	},
	{
		postid: uuidv4(),
		username: "historyBuff",
		time: "12:00 PM 24-06-2023",
		title: "Ancient Civilizations: The Mayans",
		description:
			"Explored the history of the Mayan civilization. Fascinated by their advancements in architecture, mathematics, and astronomy.",
		media:
			"https://www.youtube.com/watch?v=Q6eBJjdca14&pp=ygUSbWF5YW4gY2l2aWxpemF0aW9u",
		topic: "History",
	},
	{
		postid: uuidv4(),
		username: "chef101",
		time: "12:00 PM 23-06-2023",
		title: "Gourmet Cooking at Home",
		description:
			"Experimented with new gourmet recipes at home. Successfully made a three-course meal and received great feedback from my family.",
		media: null,
		topic: "Cooking",
	},
	{
		postid: uuidv4(),
		username: "fitnessFreak",
		time: "12:00 PM 22-06-2023",
		title: "CrossFit Training: Tips and Tricks",
		description:
			"Started CrossFit training recently. Sharing some tips and tricks that helped me improve my performance and avoid injuries.",
		media:
			"https://www.youtube.com/watch?v=f27867CArYw&pp=ygUiQ3Jvc3NGaXQgVHJhaW5pbmc6IFRpcHMgYW5kIFRyaWNrcw%3D%3D",
		topic: "Fitness",
	},
	{
		postid: uuidv4(),
		username: "petLover",
		time: "12:00 PM 21-06-2023",
		title: "Pet Care: Best Practices",
		description:
			"Sharing some best practices for taking care of pets. From diet and exercise to grooming and health check-ups.",
		media:
			"https://content.twinkl.co.uk/website/uploaded/how-to-take-care-of-your-pet-blog-header-1650548720.png",
		topic: "Pets",
	},
	{
		postid: uuidv4(),
		username: "traveller123",
		time: "12:00 PM 20-06-2023",
		title: "Traveling on a Budget",
		description:
			"Recently traveled to Europe on a budget. Sharing tips and tricks on how to save money while enjoying your trip.",
		media:
			"https://www.youtube.com/watch?v=80oWgBA1Qzc&pp=ygUVVHJhdmVsaW5nIG9uIGEgQnVkZ2V0",
		topic: "Travel",
	},
	{
		postid: uuidv4(),
		username: "musicManiac",
		time: "12:00 PM 19-06-2023",
		title: "Learning to Play the Guitar",
		description:
			"Started learning to play the guitar. Sharing my progress and some resources that have been really helpful.",
		media: null,
		topic: "Music",
	},
	{
		postid: uuidv4(),
		username: "movieBuff",
		time: "12:00 PM 18-06-2023",
		title: "Top 10 Movies of 2023",
		description:
			"Compiled a list of the top 10 movies of 2023 that you must watch. Covering various genres and styles.",
		media:
			"https://mediaindia.eu/wp-content/uploads/2023/01/Untitled-design-44-1-1.png",
		topic: "Movies",
	},
	{
		postid: uuidv4(),
		username: "bookworm",
		time: "12:00 PM 17-06-2023",
		title: "Must-Read Books for 2023",
		description:
			"Created a list of must-read books for 2023. From fiction and non-fiction to self-help and biographies.",
		media:
			"https://thelistdirectory.com/wp-content/uploads/2023/03/10-must-read-self-help-books-for-personal-growth.jpg",
		topic: "Books",
	},
	{
		postid: uuidv4(),
		username: "gamerDude",
		time: "12:00 PM 16-06-2023",
		title: "Best Video Games of 2023",
		description:
			"Reviewing the best video games of 2023. Covering various platforms and genres.",
		media:
			"https://assets.gqindia.com/photos/645c750df0141edcb0cc1771/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg",
		topic: "Gaming",
	},
	{
		postid: uuidv4(),
		username: "techie101",
		time: "12:00 PM 15-06-2023",
		title: "Latest Gadgets and Tech Trends",
		description:
			"Exploring the latest gadgets and tech trends of 2023. Sharing my thoughts and reviews.",
		media:
			"https://www.youtube.com/watch?v=v9r7PDnE0kA&pp=ygUeTGF0ZXN0IEdhZGdldHMgYW5kIFRlY2ggVHJlbmRz",
		topic: "Technology",
	},
	{
		postid: uuidv4(),
		username: "foodie123",
		time: "12:00 PM 14-06-2023",
		title: "Exploring Street Food Around the World",
		description:
			"Documenting my experience of exploring street food in various countries. Sharing some must-try dishes.",
		media: null,
		topic: "Food",
	},
	{
		postid: uuidv4(),
		username: "fashionista",
		time: "12:00 PM 13-06-2023",
		title: "Latest Fashion Trends of 2023",
		description:
			"Reviewing the latest fashion trends of 2023. From runway styles to everyday wear.",
		media: null,
		topic: "Fashion",
	},
	{
		postid: uuidv4(),
		username: "carEnthusiast",
		time: "12:00 PM 12-06-2023",
		title: "Electric Cars: The Future of Transportation",
		description:
			"Exploring the future of transportation with electric cars. Discussing the latest models and their features.",
		media:
			"https://www.youtube.com/watch?v=IdawuX8PGl0&t=438s&pp=ygUrRWxlY3RyaWMgQ2FyczogVGhlIEZ1dHVyZSBvZiBUcmFuc3BvcnRhdGlvbg%3D%3D",
		topic: "Automotive",
	},
	{
		postid: uuidv4(),
		username: "diyMaster",
		time: "12:00 PM 11-06-2023",
		title: "DIY Home Improvement Projects",
		description:
			"Sharing some DIY home improvement projects that you can try. From simple repairs to major renovations.",
		media:
			"https://bprassets.s3.amazonaws.com/blogfiles/assets/media/Diy-And-Home-Renovation.jpg",
		topic: "DIY",
	},
	{
		postid: uuidv4(),
		username: "financeGuru",
		time: "12:00 PM 10-06-2023",
		title: "Personal Finance Tips for 2023",
		description:
			"Providing some personal finance tips for 2023. Covering budgeting, saving, and investing strategies.",
		media: null,
		topic: "Finance",
	},
	{
		postid: uuidv4(),
		username: "ecoFriendly",
		time: "12:00 PM 09-06-2023",
		title: "Sustainable Living: Tips and Tricks",
		description:
			"Sharing some tips and tricks for sustainable living. From reducing waste to conserving energy.",
		media: null,
		topic: "Sustainability",
	},
	{
		postid: uuidv4(),
		username: "artLover",
		time: "12:00 PM 08-06-2023",
		title: "Exploring Modern Art",
		description:
			"Visited a modern art museum recently. Sharing my thoughts and some must-see exhibits.",
		media:
			"https://img.jakpost.net/c/2017/07/26/2017_07_26_30239_1501043511._large.jpg",
		topic: "Art",
	},
	{
		postid: uuidv4(),
		username: "scienceGeek",
		time: "12:00 PM 07-06-2023",
		title: "The Latest Discoveries in Science",
		description:
			"Discussing the latest discoveries in science. From space exploration to medical advancements.",
		media:
			"https://www.youtube.com/watch?v=IkQNMYQ8EqY&pp=ygUhVGhlIExhdGVzdCBEaXNjb3ZlcmllcyBpbiBTY2llbmNl",
		topic: "Science",
	},
	{
		postid: uuidv4(),
		username: "coderLife",
		time: "12:00 PM 06-06-2023",
		title: "Tips for Learning to Code",
		description:
			"Sharing some tips for learning to code. From choosing a language to finding resources and staying motivated.",
		media:
			"https://www.youtube.com/watch?v=Mus_vwhTCq0&t=13s&pp=ygULY29kaW5nIHRpcHM%3D",
		topic: "Programming",
	},
	{
		postid: uuidv4(),
		username: "mentalHealthAdvocate",
		time: "12:00 PM 05-06-2023",
		title: "Mental Health: Coping with Anxiety",
		description:
			"Discussing various ways to cope with anxiety. Sharing some techniques and resources that can help.",
		media: "https://news.blr.com/app/uploads/sites/4/2018/05/Mental-health.jpg",
		topic: "Mental Health",
	},
	{
		postid: uuidv4(),
		username: "greenThumb",
		time: "12:00 PM 04-06-2023",
		title: "Gardening Tips for Beginners",
		description:
			"Providing some gardening tips for beginners. From choosing the right plants to maintaining a healthy garden.",
		media:
			"https://www.thespruce.com/thmb/8thYI5dQEScZIcvbj37qT3waLsg=/1731x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpda604074rKh300_Medium_4682311-f7ee8babda1442cdb353828758e6ce72.jpg",
		topic: "Gardening",
	},
	{
		postid: uuidv4(),
		username: "adventureSeeker",
		time: "12:00 PM 03-06-2023",
		title: "Top Adventure Sports to Try",
		description:
			"Listing some top adventure sports to try. From skydiving and bungee jumping to rock climbing and white-water rafting.",
		media: null,
		topic: "Adventure",
	},
	{
		postid: uuidv4(),
		username: "languageLearner",
		time: "12:00 PM 02-06-2023",
		title: "Learning a New Language: Tips and Resources",
		description:
			"Sharing some tips and resources for learning a new language. From apps and websites to immersion techniques.",
		media: null,
		topic: "Language",
	},
	{
		postid: uuidv4(),
		username: "entrepreneur101",
		time: "12:00 PM 01-06-2023",
		title: "Starting Your Own Business: A Guide",
		description:
			"Providing a guide to starting your own business. Covering everything from idea generation to marketing and sales.",
		media:
			"https://www.youtube.com/watch?v=bXLZ8I7s8tw&pp=ygUjU3RhcnRpbmcgWW91ciBPd24gQnVzaW5lc3M6IEEgR3VpZGU%3D",
		topic: "Business",
	},
	{
		postid: uuidv4(),
		username: "carpentryLover",
		time: "12:00 PM 31-05-2023",
		title: "Basic Carpentry Skills Everyone Should Know",
		description:
			"Sharing some basic carpentry skills that everyone should know. From measuring and cutting to assembling and finishing.",
		media: null,
		topic: "Carpentry",
	},
	{
		postid: uuidv4(),
		username: "fashionista2023",
		time: "12:00 PM 30-05-2023",
		title: "Sustainable Fashion: Trends and Tips",
		description:
			"Discussing sustainable fashion trends and tips. From choosing eco-friendly materials to supporting ethical brands.",
		media:
			"https://total10fashion.com/wp-content/uploads/2023/08/Tips-to-Make-Your-Wardrobe-More-Sustainable-1024x574.png",
		topic: "",
	},
	{
		postid: uuidv4(),
		username: "photographyFan",
		time: "12:00 PM 29-05-2023",
		title: "Photography Tips for Beginners",
		description:
			"Providing some photography tips for beginners. From choosing the right camera to understanding composition and lighting.",
		media:
			"https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2015/10/photography-tips-beginners-10011.jpg",
		topic: "Photography",
	},
	{
		postid: uuidv4(),
		username: "scienceFictionLover",
		time: "12:00 PM 28-05-2023",
		title: "Best Sci-Fi Books of All Time",
		description:
			"Listing some of the best sci-fi books of all time. From classic novels to modern masterpieces.",
		media:
			"https://learnworthy.net/wp-content/uploads/2020/04/the-top-15-best-science-fiction-books.jpg",
		topic: "Books",
	},
	{
		postid: uuidv4(),
		username: "investmentGuru",
		time: "12:00 PM 27-05-2023",
		title: "Investing in the Stock Market: A Beginner's Guide",
		description:
			"Providing a beginner's guide to investing in the stock market. Covering everything from choosing stocks to managing risk.",
		media:
			"https://www.youtube.com/watch?v=8Ij7A1VCB7I&pp=ygUxSW52ZXN0aW5nIGluIHRoZSBTdG9jayBNYXJrZXQ6IEEgQmVnaW5uZXIncyBHdWlkZQ%3D%3D",
		topic: "Finance",
	},
	{
		postid: uuidv4(),
		username: "techSavvy",
		time: "12:00 PM 26-05-2023",
		title: "Understanding Blockchain Technology",
		description:
			"Explaining the basics of blockchain technology. Discussing its applications and potential impact on various industries.",
		media:
			"https://www.youtube.com/watch?v=SSo_EIwHSd4&pp=ygUjVW5kZXJzdGFuZGluZyBCbG9ja2NoYWluIFRlY2hub2xvZ3k%3D",
		topic: "Technology",
	},
	{
		postid: uuidv4(),
		username: "ecoLiving",
		time: "12:00 PM 25-05-2023",
		title: "Zero Waste Lifestyle: How to Get Started",
		description:
			"Sharing some tips on how to get started with a zero-waste lifestyle. From reducing plastic use to composting and recycling.",
		media: null,
		topic: "Sustainability",
	},
	{
		postid: uuidv4(),
		username: "fitnessFanatic",
		time: "12:00 PM 24-05-2023",
		title: "HIIT Workouts: Benefits and Routines",
		description:
			"Discussing the benefits of HIIT workouts and sharing some routines to get you started.",
		media:
			"https://fruitfulkitchen.org/wp-content/uploads/2019/12/what-is-hiit-workout-definition-1-1024x683.jpg",
		topic: "Fitness",
	},
	{
		postid: uuidv4(),
		username: "techInnovator",
		time: "12:00 PM 23-05-2023",
		title: "Innovations in Renewable Energy",
		description:
			"Exploring the latest innovations in renewable energy. From solar and wind to geothermal and hydroelectric power.",
		media:
			"https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/199_1676390451.png",
		topic: "Energy",
	},
	{
		postid: uuidv4(),
		username: "spaceNerd",
		time: "12:00 PM 22-05-2023",
		title: "The Search for Extraterrestrial Life",
		description:
			"Discussing the search for extraterrestrial life. From the latest discoveries to the technologies used in this quest.",
		media: "https://awaken.com/wp-content/uploads/2016/02/maxresdefault-2.jpg",
		topic: "Space",
	},
	{
		postid: uuidv4(),
		username: "artFan",
		time: "12:00 PM 21-05-2023",
		title: "Exploring Renaissance Art",
		description:
			"Exploring the art of the Renaissance period. Discussing some of the most famous artists and their works.",
		media:
			"https://www.telegraph.co.uk/content/dam/london-culture/raphael_painting-xlarge.jpg",
		topic: "Art",
	},
];

export default posts;
