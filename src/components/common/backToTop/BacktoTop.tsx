
import useStickyHeader from "@/hooks/sticky-header";
import React, { useRef } from "react";
const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isSticky = useStickyHeader();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={elementRef}
        className={`progress-wrap ${isSticky ? 'active-progress' : ''}`}
        onClick={handleScrollToTop}
      >
      </div>
    </>
  );
};

export default BacktoTop;


