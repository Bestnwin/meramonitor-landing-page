import React from 'react'; // useState is no longer needed since modal state is removed
// RegisterModal is no longer needed
// import RegisterModal from './RegisterModal';

// Image imports (assuming these paths will be resolved in your project)
// You mentioned you will add photos later, so these paths might need adjustment
// if you're not using a specific build setup that handles absolute paths like /home/kshit/...
// import startTrialImage from './assets/download Step images/image 16.png'; // Adjusted path for typical React setup
// import downloadSoftwareImage from './assets/download Step images/image 17.png';
// import startTrackingImage from './assets/download Step images/image 18.png';
// import windowsIcon from './assets/download Step images/image 19.png';
// import macIcon from './assets/download Step images/image.png';
// import linuxIcon from './assets/download Step images/linux (1).png';


const FeatureSection = () => {
  // Removed useState, openModal, and closeModal functions as requested.
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">

      {/* Modal removed */}
      {/* <RegisterModal isOpen={showModal} onClose={closeModal} /> */}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Get Going in Just 30 Seconds - Employee Monitoring Made Easy!
      </h2>

      {/* Three Feature Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center p-4 my-2 rounded-lg text-center w-full md:w-1/3 max-w-sm">
          <div className="w-48 h-48 mb-4">
            <img src={startTrialImage} alt="Start Your Free Trial" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Step 1 <br /> Start Your Free Trial</h3>
          <p className="text-gray-600">
            Sign up easily and get started with a 14-day free trial. No credit card required!
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center p-4 my-2 rounded-lg text-center w-full md:w-1/3 max-w-sm">
          <div className="w-48 h-48 mb-4">
            <img src={downloadSoftwareImage} alt="Download The Software" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Step 2 <br /> Download The Software</h3>
          <p className="text-gray-600">
            Install our lightweight desktop app on your team's computers in minutes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center p-4 my-2 rounded-lg text-center w-full md:w-1/3 max-w-sm">
          <div className="w-48 h-48 mb-4">
            <img src={startTrackingImage} alt="Start Employee Tracking" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Step 3 <br /> Start Employee Tracking</h3>
          <p className="text-gray-600">
            Begin monitoring productivity, time, and project progress effortlessly.
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="w-full h-16 md:h-24"></div>

      {/* Platform Availability */}
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Available on all platforms</h3>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-12">
          {/* Windows */}
          <div className="flex flex-col items-center m-4">
            <img src={windowsIcon} alt="Windows" className="w-24 h-24 object-contain mb-2" />
            <span className="text-lg text-gray-700">Windows</span>
          </div>

          {/* Mac */}
          <div className="flex flex-col items-center m-4">
            <img src={macIcon} alt="Mac" className="w-24 h-24 object-contain mb-2" />
            <span className="text-lg text-gray-700">Mac</span>
          </div>

          {/* Linux */}
          <div className="flex flex-col items-center m-4">
            <img src={linuxIcon} alt="Linux" className="w-24 h-24 object-contain mb-2" />
            <span className="text-lg text-gray-700">Linux</span>
          </div>
        </div>

        {/* Button: Sign Up & Download (onClick handler removed) */}
        <button
          className="mt-12 px-10 py-4 text-white text-xl font-semibold rounded-full
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     hover:from-purple-700 hover:to-indigo-700
                     transition-all duration-300 ease-in-out shadow-lg"
        >
          Sign Up & Download
        </button>
      </div>

    </div>
  );
};

export default FeatureSection;