import React from 'react';
import QRCode from 'react-qr-code'; // Make sure to install react-qr-code package: npm install react-qr-code

const Services = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h1>

          {/* QR Code Payment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">QR Code Payment</h2>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <QRCode value="https://example.com/qr-payment" size={80} />
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  Scan the QR code to make a payment securely. QR code payments offer a quick and reliable way to complete transactions.
                </p>
                <p className="text-gray-600">
                  Simply open your mobile banking app or a QR code reader to scan the code and follow the instructions to complete the payment.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Number Payment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Mobile Number Payment</h2>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <svg className="h-12 w-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 10h18M3 15h18M3 20h18"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  Pay using your mobile number with our secure payment system. Just enter the mobile number linked to your account and confirm the payment.
                </p>
                <p className="text-gray-600">
                  This method is convenient and effective for making payments without needing to enter detailed payment information.
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation Facility */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Any-Time Cancellation</h2>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <svg className="h-12 w-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  Our service allows you to cancel payments at any time before the order is completed. This ensures you have control over your transactions and can make adjustments if needed.
                </p>
                <p className="text-gray-600">
                  Simply contact our support team or use our online portal to initiate a cancellation request. We strive to make the process as smooth as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Additional Features</h2>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>Real-time payment tracking and notifications.</li>
              <li>Multi-currency support for international transactions.</li>
              <li>Enhanced security measures for fraud prevention.</li>
              <li>User-friendly interface for a seamless experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
