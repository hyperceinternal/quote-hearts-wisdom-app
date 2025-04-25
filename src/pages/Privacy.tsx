
import { useState } from "react";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

const Privacy = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        title="Privacy Policy" 
        showBackButton={true}
        onMenuClick={toggleDrawer}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          
          <p className="mb-4">
            Last updated: April 25, 2023
          </p>
          
          <p className="mb-4">
            This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use Life Lessons Quotes.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h3>
          
          <p className="mb-4">
            <strong>Personal Data</strong><br />
            While using our app, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>Email address (only if you contact us)</li>
            <li>Usage data</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">How We Use Your Data</h3>
          
          <p className="mb-4">
            We use the collected data for various purposes:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To improve our app</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Data Storage</h3>
          
          <p className="mb-4">
            Life Lessons Quotes stores your favorite quotes locally on your device using local storage technology. This data is not transmitted to our servers.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h3>
          
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Contact Us</h3>
          
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@lifelessonsquotes.com
          </p>
        </div>
      </main>
      
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Privacy;
