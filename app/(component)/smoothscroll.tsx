"use client"
import React, { useState } from "react"
import { useRef, useEffect, useContext, createContext } from "react";

const scrollPositionContext = createContext(0)

export const useScrollPosition = () => (
  useContext(scrollPositionContext)
)

const SmoothScroll = ({children, className} : {children : React.ReactNode, className? : string}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0)
  
  useEffect(() => {
    let current = 0;
    let target = 0;
    let ease = 0.075;
    const footer = document.querySelector('footer')
    const footerHeight = footer?.getBoundingClientRect().height!
    const newFooterHeight = parseFloat(getComputedStyle(footer).height)
    const contentContainerHeight = ref.current?.getBoundingClientRect().height!
    
    const maxHeight = contentContainerHeight - window.innerHeight + newFooterHeight * 1.15  
    
    function lerp(start: number, end: number, t: number) {
      return start * (1 - t) + end * t;
    }

    function setTransform(element: HTMLElement | null, change: string) {
      if (element) {
        element.style.transform = change;
      }
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));
      setTransform(ref.current, `translate3d(0, ${-current}px,0)`);
      const percentage = (current / maxHeight) * 100;
      setScrollPercent(percentage);
      requestAnimationFrame(smoothScroll);
    }
    
    function updateBodyHeight() {
      const containerHeight = ref.current?.getBoundingClientRect().height;
      const containerWidth = ref.current?.getBoundingClientRect().width;
      document.body.style.height = `${containerHeight}px`;
      document.body.style.width = `${containerWidth}px`;
      ease = window.innerWidth > 768 ? 0.075 : 1;
    }

    function handleResize() {
      updateBodyHeight();
    }


    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      target = Math.min(maxHeight, Math.max(0, target + event.deltaY * 0.5));
    }
    
    handleResize();
    smoothScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <scrollPositionContext.Provider value={scrollPercent}>
      <div ref={ref} className={`wrapper z-40 fixed will-change-transform overflow-x-hidden ${className}`}>
        {children}
      </div>
    </scrollPositionContext.Provider>
  );
}

export default SmoothScroll
