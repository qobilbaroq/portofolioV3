import Navbar from './components/layout/Navbar';
import TopBar from './components/layout/TopBar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <TopBar />
      <Navbar />
    </div>
  );
}
