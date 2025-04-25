import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserPlus, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

// const navigate = useNavigate();

// Define particle type
type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
};

export default function Home() {
    const navigate = useNavigate(); 
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const particleCount = Math.floor(width * height / 10000); // Adjust density
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5
        });
      }
      
      setParticles(newParticles);
      setMousePosition({ x: width / 2, y: height / 2 });
    };
    
    initParticles();
    
    const handleResize = () => {
      initParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      const updatedParticles = particles.map(particle => {
        // Apply momentum
        let x = particle.x + particle.speedX;
        let y = particle.y + particle.speedY;
        
        // Boundary check
        if (x < 0 || x > canvas.width) {
          x = x < 0 ? 0 : canvas.width;
          particle.speedX *= -1;
        }
        
        if (y < 0 || y > canvas.height) {
          y = y < 0 ? 0 : canvas.height;
          particle.speedY *= -1;
        }
        
        // Attraction to mouse
        const dx = mousePosition.x - x;
        const dy = mousePosition.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const forceX = dx / distance * 0.05;
          const forceY = dy / distance * 0.05;
          
          x += forceX;
          y += forceY;
        }
        
        return { ...particle, x, y };
      });
      
      updatedParticles.forEach((particle, i) => {
        ctx.fillStyle = 'rgba(96, 165, 250, 0.7)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles
        updatedParticles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.8 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      setParticles(updatedParticles);
      animationRef.current = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePosition]);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Network Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center py-6 px-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-400">
              <span className="text-white">CV</span>Synk
            </h1>
          </div>
          
          <nav>
            <Link 
              to="/plans" 
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg 
                         hover:bg-blue-700 transition-colors duration-300"
            >
              <PieChart size={18} />
              Browse Plans
            </Link>
          </nav>
        </header>
        
        {/* Main Content */}
        <main className="container mx-auto px-4 pt-20 pb-12 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Connect. Apply. <span className="text-blue-400">Succeed.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Your gateway to dream careers and exceptional talent
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              CVSynk brings job seekers and employers together in a seamless platform,
              matching the right skills with the right opportunities through intelligent algorithms
              and powerful networking tools.
            </p>
          </div>
          
       
        {/* Action Buttons */}
<div className="flex flex-col md:flex-row gap-6 mt-8">
  {/* Login */}
  <button 
    onClick={() => navigate('/login')}
    className="relative group flex items-center justify-center gap-2 px-8 py-4 
             bg-blue-600 text-white text-lg font-semibold rounded-xl
             hover:bg-blue-700 transition-all duration-300 
             shadow-lg hover:shadow-blue-500/50"
  >
    <User size={20} />
    Login
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
  </button>

  {/* Register */}
  <button 
    onClick={() => navigate('/register')}
    className="relative group flex items-center justify-center gap-2 px-8 py-4 
             bg-transparent border-2 border-blue-500 text-blue-400 text-lg font-semibold rounded-xl
             hover:bg-blue-900/30 transition-all duration-300"
  >
    <UserPlus size={20} />
    Register
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
  </button>
</div>

          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Job Matching</h3>
              <p className="text-gray-400">Our AI algorithms connect you with positions that align with your skills and career goals.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Network</h3>
              <p className="text-gray-400">Build connections with industry professionals and hiring managers to expand your opportunities.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified Profiles</h3>
              <p className="text-gray-400">Stand out with validated credentials that employers can trust, increasing your chances of getting hired.</p>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 CVSynk. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}