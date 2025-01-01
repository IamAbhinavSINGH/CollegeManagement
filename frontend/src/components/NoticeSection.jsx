'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoMdLink } from 'react-icons/io';
import { HiOutlineCalendar } from 'react-icons/hi';
import { baseApiURL } from '../baseUrl';

export function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(`${baseApiURL()}/notice/getNotice`);
        if (response.data.success && Array.isArray(response.data.notice)) {
          setNotices(response.data.notice);
        } else {
          setError('No notices found or invalid response.');
        }
      } catch (error) {
        setError('Failed to load notices');
        console.error('Error fetching notices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">Latest Notices</h2>
          <div className="animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg mb-4"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">Latest Notices</h2>
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#003366] mb-8">Latest Notices</h2>
        <div className="grid gap-4">
          {notices.map((notice) => (
            <div
              key={notice._id}
              className="border-[#003366] border-2 rounded-lg shadow-sm p-6 relative bg-white hover:shadow-md transition-shadow"
            >
              <div className="pr-32">
                <h3
                  className={`text-xl font-medium flex items-center ${
                    notice.link ? 'text-blue-600 hover:text-blue-800 cursor-pointer' : ''
                  }`}
                  onClick={() => notice.link && window.open(notice.link)}
                >
                  {notice.title}
                  {notice.link && <IoMdLink className="ml-2" />}
                </h3>
                <p className="text-gray-600 mt-2">{notice.description}</p>
              </div>
              <div className="absolute top-6 right-6 flex items-center text-sm text-gray-500">
                <HiOutlineCalendar className="mr-1" />
                {new Date(notice.createdAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
