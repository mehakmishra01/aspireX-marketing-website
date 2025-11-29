'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * VideoModal Component
 * 
 * A reusable modal component for displaying demo videos.
 * 
 * @param isOpen - Controls whether the modal is visible
 * @param onClose - Callback function to close the modal
 * @param videoSrc - Source URL for the video (YouTube embed URL or local video path)
 * @param videoType - Type of video: 'youtube' for YouTube embeds, 'local' for HTML5 video files
 * 
 * Usage:
 * - For YouTube: videoType="youtube" videoSrc="https://www.youtube.com/embed/VIDEO_ID"
 * - For local video: videoType="local" videoSrc="/demo.mp4" (place video in public folder)
 */
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  videoType?: 'youtube' | 'local';
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Default placeholder video
  videoType = 'youtube',
}: VideoModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <h3 className="text-white font-semibold text-lg">AspireX Demo Video</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video Container */}
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
          {videoType === 'youtube' ? (
            <iframe
              src={videoSrc}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="AspireX Demo Video"
            />
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              className="absolute top-0 left-0 w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-gray-50 text-center text-sm text-gray-600">
          <p>
            To change the video, update the <code className="bg-gray-200 px-1 rounded">videoSrc</code> prop in{' '}
            <code className="bg-gray-200 px-1 rounded">HeroSection.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}

