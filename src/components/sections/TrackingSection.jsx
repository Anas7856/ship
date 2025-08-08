import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Truck,
  Package,
  CheckCircle,
} from 'lucide-react';

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const sampleTrackingData = {
    trackingNumber: 'VL2024001234',
    status: 'In Transit',
    estimatedDelivery: '2024-07-31',
    origin: 'Garden City, NY',
    destination: 'Los Angeles, CA',
    carrier: 'Valhalla Logistics',
    timeline: [
      {
        status: 'Package Picked Up',
        location: 'Garden City, NY',
        date: '2024-07-28',
        time: '09:30 AM',
        completed: true,
        icon: <Package className="w-5 h-5" />,
      },
      {
        status: 'In Transit',
        location: 'Columbus, OH',
        date: '2024-07-29',
        time: '02:15 PM',
        completed: true,
        icon: <Truck className="w-5 h-5" />,
      },
      {
        status: 'Out for Delivery',
        location: 'Los Angeles, CA',
        date: '2024-07-31',
        time: '08:00 AM',
        completed: false,
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        status: 'Delivered',
        location: 'Los Angeles, CA',
        date: '2024-07-31',
        time: 'Estimated',
        completed: false,
        icon: <CheckCircle className="w-5 h-5" />,
      },
    ],
  };

  const handleTrackPackage = () => {
    if (!trackingNumber.trim()) return;

    setIsSearching(true);

    setTimeout(() => {
      setTrackingResult({
        ...sampleTrackingData,
        trackingNumber: trackingNumber,
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Track your shipment here
          </h2>
        </div>

        {/* Tracking Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Enter Your Tracking Number
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex-1">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., VL2024001234)"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-center"
                  onKeyPress={(e) => e.key === 'Enter' && handleTrackPackage()}
                />
              </div>
              <button
                onClick={handleTrackPackage}
                disabled={isSearching || !trackingNumber.trim()}
                className="px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold text-lg flex items-center justify-center"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Track
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tracking Result */}
        {trackingResult && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Header Info */}
              <div className="border-b border-gray-200 pb-6 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Tracking Number
                    </h4>
                    <p className="text-lg font-semibold text-gray-900">
                      {trackingResult.trackingNumber}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Status
                    </h4>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-lg font-semibold text-green-600">
                        {trackingResult.status}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Estimated Delivery
                    </h4>
                    <p className="text-lg font-semibold text-gray-900">
                      {trackingResult.estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Route Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">From</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {trackingResult.origin}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">To</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {trackingResult.destination}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Shipment Timeline
                </h4>
                <div className="space-y-6">
                  {trackingResult.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          event.completed
                            ? 'bg-green-100 text-green-600'
                            : index === trackingResult.timeline.findIndex((e) => !e.completed)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5
                            className={`font-semibold ${
                              event.completed
                                ? 'text-gray-900'
                                : index === trackingResult.timeline.findIndex((e) => !e.completed)
                                ? 'text-blue-900'
                                : 'text-gray-500'
                            }`}
                          >
                            {event.status}
                          </h5>
                          <span className="text-sm text-gray-500">
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
