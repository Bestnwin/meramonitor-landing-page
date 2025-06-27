import Navbar from './components/navbar';
import Landing from './section/Landing';
import SponsorList from './components/sponser'; 
import DemoPage from './components/DemoPage';
import SignupBanner from './components/SignupBanner';



function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <SponsorList />
      <DemoPage />
      <SignupBanner />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Landing Page Content</h2>
      </main>
    </div>
  );
}

export default App;
