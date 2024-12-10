import { NavBar } from '../components/navBar';
import { ContactInfo } from '../components/contactInfo';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-950 text-white flex flex-col'>
      <NavBar />
      <main className='flex-grow container mx-auto px-4 py-20 flex items-center justify-center'>
        <div className='max-w-4xl w-full'>
          <h1 className='text-4xl font-bold mb-8 text-center'>Get in Touch</h1>
          <ContactInfo />
        </div>
      </main>
    </div>
  );
}
