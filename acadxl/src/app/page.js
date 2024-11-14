
import Card from "../app/components/Cards";
import FeaturesGrid from "./components/FeaturesGrid";
import CoursesSection from "./components/CoursesSection";
import InformationPanel from "./components/InformationPanel";
import VideoContentSection from "./components/VideoContentSection";
import Footer from "./components/Footer";
export default function Page() {
  // Define course data for 10th Board
  const tenthBoardCourses = [
    {
      title: '10th Board | Biology',
      image: '/biology.jpg',
      description: 'Empowering Minds for a Brighter Tomorrow.',
      price: 'Free',
    },
    {
      title: '10th Board | Chemistry',
      image: '/chemistry.jpg',
      description: 'Master the fundamentals of Chemistry.',
      price: 'Free',
    },
    {
      title: '10th Board | Physics',
      image: '/physics.jpg',
      description: 'Unlock the secrets of the universe with Physics.',
      price: 'Free',
    },
  ];

  // Define course data for 12th Board
  const twelfthBoardCourses = [
    {
      title: 'NSEJS BIOLOGY',
      image: '/mathematics.jpg',
      description: 'Advanced mathematics for board exams.',
      price: 'Free',
    },
    {
      title: 'NSEJS CHEMISTRY',
      image: '/12th-biology.jpg',
      description: 'Detailed biology lessons for the 12th board.',
      price: 'Free',
    },
    {
      title: 'NSEJS PHYSICS',
      image: '/12th-physics.jpg',
      description: 'Physics concepts explained for higher secondary.',
      price: 'Free',
    },
  ];
  const testSeries= [
    {
      title: 'Question Bank | NEET UG PYQs',
      image: '/mathematics.jpg',
      description: 'Advanced mathematics for board exams.',
      price: 'Free',
    },
    {
      title: 'Question Bank | JEE Main PYQs',
      image: '/12th-biology.jpg',
      description: 'Detailed biology lessons for the 12th board.',
      price: 'Free',
    },
    {
      title: 'Question Bank | NSEJS PYQs',
      image: '/12th-physics.jpg',
      description: 'Physics concepts explained for higher secondary.',
      price: 'Free',
    },
  ];
  const upcommingCources= [
    {
      title: 'IIT JEE Courses',
      image: '/mathematics.jpg',
      description: 'Advanced mathematics for board exams.',
      price: 'Free',
    },
    {
      title: 'NEET UG Courses',
      image: '/12th-biology.jpg',
      description: 'Detailed biology lessons for the 12th board.',
      price: 'Free',
    },
    {
      title: 'CUET Courses',
      image: '/12th-physics.jpg',
      description: 'Physics concepts explained for higher secondary.',
      price: 'Free',
    },
  ];
  const crashCourses= [
    {
      title: '10th Board Crash Course | Mathematics',
      image: '/mathematics.jpg',
      description: 'Advanced mathematics for board exams.',
      price: ' ₹499',
    },
    {
      title: '10th Board Crash Course | Biology',
      image: '/12th-biology.jpg',
      description: 'Detailed biology lessons for the 12th board.',
      price: ' ₹499',
    },
    {
      title: '10th Board Crash Course | Chemistry',
      image: '/12th-physics.jpg',
      description: 'Physics concepts explained for higher secondary.',
      price: ' ₹499',
    },
  ];
   // Define exam data for Information Panel
   const examsData = [
    { title: 'IIT JEE', icon: '/iit-jee.png' },
    { title: 'NEET UG', icon: '/neet-ug.png' },
    { title: 'NSE OLYMPIADS', icon: '/nse-olympiads.png' },
    { title: 'Maths OLYMPIADS', icon: '/maths-olympiads.png' },
    { title: 'CUET', icon: '/cuet.png' },
    { title: 'CBSE', icon: '/cbse.png' },
  ];

  return (
    <>
     
      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-black">WHAT DO WE OFFER</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4">
          <Card
            color="bg-red-100 text-black"
            icon="🎥"
            title="Live Courses"
            description="Learn live with top educators, chat with teachers and other attendees, and get your doubts cleared."
            buttonLabel="ENROLL"
          />
          <Card
            color="bg-blue-100 text-black"
            icon="📄"
            title="Structured Learning"
            description="Our curriculum is designed by experts to make sure you get the best learning experience."
            buttonLabel="GO TO COURSES"
          />
          <Card
            color="bg-yellow-100 text-black"
            icon="💬"
            title="Ask Doubts Any Time"
            description="Stuck on something? Discuss it with your mentors and the teachers in the inbuilt chat groups."
            buttonLabel="DISCUSSION FORUM"
          />
          <Card
            color="bg-purple-100 text-black"
            icon="📑"
            title="Practice Tests"
            description="Reinforce your learning with engaging quizzes and live tests, and track your class performance."
            buttonLabel="TEST SERIES"
          />
        </div>
        
        {/* Features Grid Section */}
        <FeaturesGrid />
        
        {/* Courses Sections */}
        <CoursesSection sectionTitle="10th Board Courses" courses={tenthBoardCourses} />
        <CoursesSection sectionTitle="NSEJS Olympiad Courses" courses={twelfthBoardCourses} />
		<CoursesSection sectionTitle="TEST SERIES OFFERED" courses={testSeries} />
		<CoursesSection sectionTitle="UPCOMING COURSES" courses={upcommingCources} />
		<CoursesSection sectionTitle="10th Board Crash Courses" courses={crashCourses} />
		<InformationPanel exams={examsData} />
		<VideoContentSection
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Contact Us"
        />
      </div>
	 
    </>
  );
}
