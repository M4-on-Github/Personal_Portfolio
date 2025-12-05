import { useEffect, useRef } from 'react';

const VisitTracker = () => {
  // Use a ref to ensure we only fire this once per session/mount in strict mode
  const hasRecorded = useRef(false);

  useEffect(() => {
    if (hasRecorded.current) return;
    
    const recordVisit = async () => {
      try {
        // Replace with the actual path to your PHP script
        const response = await fetch('http://localhost:8000/trackvisit.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page_url: window.location.href
          }),
        });
        
        if (!response.ok) {
          console.error('Failed to record visit');
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    recordVisit();
    hasRecorded.current = true;

  }, []); // Empty dependency array means this runs once on mount

  // This component doesn't render anything visible
  return null;
};

export default VisitTracker;