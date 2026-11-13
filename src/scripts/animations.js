import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


function splitElementIntoChars(element) {
  const originalHTML = element.innerHTML;

  function processNode(node) {
    if (node.nodeType === 3) { 
      const text = node.textContent;
      if (!text) return null;
      
      const fragment = document.createDocumentFragment();
      
      const parts = text.split(/(\s+)/);
      
      parts.forEach(part => {
        if (!part) return;
        if (part.trim() === '') {
          
          fragment.appendChild(document.createTextNode(part));
        } else {
          
          const wordSpan = document.createElement('div');
          wordSpan.className = 'animate-word';
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'nowrap';
          
         
          for (let char of part) {
            const charSpan = document.createElement('div');
            charSpan.className = 'animate-char';
            charSpan.style.display = 'inline-block';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
          }
          fragment.appendChild(wordSpan);
        }
      });
      return fragment;
    } else if (node.nodeType === 1) { 
      if (node.tagName === 'BR') {
        return node.cloneNode(true);
      }
      
      
      const clone = node.cloneNode(false);
      
    
      Array.from(node.childNodes).forEach(child => {
        const processed = processNode(child);
        if (processed) {
          clone.appendChild(processed);
        }
      });
      return clone;
    }
    return null;
  }

  const childNodes = Array.from(element.childNodes);
  element.innerHTML = '';
  childNodes.forEach(child => {
    const processed = processNode(child);
    if (processed) {
      element.appendChild(processed);
    }
  });

 
  return () => {
    element.innerHTML = originalHTML;
  };
}


export function initAnimations() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const reverts = [];

  // Scoping within a GSAP context allows for simple complete reversion
  const ctx = gsap.context(() => {
    // 1. Heading Character Reveal (.animate-heading)
    const headings = document.querySelectorAll('.animate-heading');
    headings.forEach(heading => {
      // Avoid double splitting
      if (heading.querySelector('.animate-char')) return;

      const revertSplit = splitElementIntoChars(heading);
      reverts.push(revertSplit);

      const chars = heading.querySelectorAll('.animate-char');
      if (chars.length === 0) return;

      // Detect if hero heading
      const isHero = heading.closest('.hero-section') || 
                     heading.closest('.about-hero-section') || 
                     heading.closest('.learner-hero-bg') || 
                     heading.closest('[class*="hero"]') ||
                     heading.classList.contains('hero-heading') ||
                     heading.classList.contains('learner-heading');

      if (isHero) {
        // Hero Heading animation (immediate staggered entry)
        gsap.from(chars, {
          opacity: 0,
          y: 40,
          rotateX: -45,
          transformPerspective: 1000,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power4.out',
          delay: 0.2
        });
      } else {
        // Section Heading animation (ScrollTrigger triggered)
        gsap.from(chars, {
          opacity: 0,
          y: 30,
          rotateX: -30,
          transformPerspective: 1000,
          duration: 0.8,
          stagger: 0.015,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      }
    });

    // 2. Fade Up (.g-fade-up)
    const fadeUps = document.querySelectorAll('.g-fade-up');
    fadeUps.forEach(element => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    // 3. Fade Left (.g-fade-left)
    const fadeLefts = document.querySelectorAll('.g-fade-left');
    fadeLefts.forEach(element => {
      gsap.from(element, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    // 4. Fade Right (.g-fade-right)
    const fadeRights = document.querySelectorAll('.g-fade-right');
    fadeRights.forEach(element => {
      gsap.from(element, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    // 5. Scale (.g-scale)
    const scales = document.querySelectorAll('.g-scale');
    scales.forEach(element => {
      gsap.from(element, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });
  });

  
  return () => {
    ctx.revert(); 
    reverts.forEach(revertDOM => revertDOM()); 
  };
}
