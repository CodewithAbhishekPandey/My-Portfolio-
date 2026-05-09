import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Github, 
  Mail, 
  Layout, 
  Code2, 
  Globe, 
  Cpu, 
  Database, 
  Figma, 
  Palette,
  Quote,
  Star,
  Image as ImageIcon,
  PenTool,
  Type,
  Video,
  Monitor,
  Server,
  Layers,
  Terminal
} from 'lucide-react';

// --- Components ---

const ProjectCard = ({ project, index }: { project: any, index: number, key?: React.Key }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y = useSpring(yValue, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative rounded-[40px] overflow-hidden glass p-4 aspect-[4/5] flex flex-col justify-end"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.8] transition-all duration-1000"
            referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 p-6 md:p-8">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-wine-red mb-3 block">{project.category}</span>
        <h3 className="text-4xl font-editorial mb-4 tracking-tighter leading-none">{project.title}</h3>
        <p className="text-sm text-warm-ivory/50 font-light mb-8 line-clamp-2 max-w-[280px]">{project.desc}</p>
        
        <motion.button 
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 text-[9px] font-bold tracking-[0.4em] uppercase bg-wine-red text-white px-8 py-5 rounded-full w-fit shadow-[0_15px_30px_-10px_rgba(91,0,18,0.6)] group/btn overflow-hidden relative"
        >
          <span className="relative z-10">Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          <div className="absolute inset-0 bg-red-800 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-matte-black/80 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-editorial font-bold tracking-tighter">
          Abhishek <span className="text-wine-red">Pandey</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-widest uppercase">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-wine-red transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="group relative px-6 py-2 border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-wine-red">
          <span className="relative z-10 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
            Let's Talk <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-wine-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[110vh] flex items-center px-6 pt-20 overflow-hidden">
      {/* Cinematic Ambient Glows */}
      <motion.div style={{ y: bgY }} className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-wine-red/20 rounded-full blur-[120px]" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }} className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-wine-red/10 rounded-full blur-[120px]" />

      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ y: textY }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-editorial leading-[0.9] tracking-tighter mb-8 bg-clip-text">
            Designing<br />
            <span className="italic text-wine-red drop-shadow-[0_0_15px_rgba(91,0,18,0.5)]">Emotion.</span><br />
            Engineering<br />
            <span className="italic text-wine-red drop-shadow-[0_0_15px_rgba(91,0,18,0.5)]">Experiences.</span>
          </h1>
          
          <p className="max-w-md text-lg text-warm-ivory/60 mb-10 leading-relaxed font-light">
            Multidisciplinary creator blending the art of visual storytelling with the power of code. 
            Crafting digital realms that are beautiful, functional, and unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-wine-red text-warm-ivory rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-red-800 transition-colors glow-red">
              View My Work
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-matte-black transition-all">
              Get In Touch
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: portraitY }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border border-white/5 glow-red">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
              alt="Cinematic Portrait"
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60" />
            
            {/* Floating Project Cards */}
            <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
               animate={{ x: [0, 10, 0] }}
               transition={{ x: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
               className="absolute -right-8 top-1/4 glass p-4 rounded-3xl max-w-[180px] hidden lg:block"
            >
              <div className="w-full h-24 bg-matte-black rounded-lg mb-3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop" 
                  alt="Project" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block mb-1">Branding</span>
              <p className="text-xs font-bold">VERENA LUXURY</p>
            </motion.div>

            <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
               animate={{ x: [0, -10, 0] }}
               transition={{ x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
               className="absolute -left-8 bottom-1/4 glass p-4 rounded-3xl max-w-[180px] hidden lg:block"
            >
              <div className="w-full h-24 bg-matte-black rounded-lg mb-3 overflow-hidden">
                <img 
                   src="https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=400&auto=format&fit=crop" 
                   alt="Project" 
                   className="w-full h-full object-cover opacity-80"
                   referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block mb-1">SaaS Interface</span>
              <p className="text-xs font-bold">INSIGHT ANALYTICS</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
         <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll to explore</span>
         <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-wine-red"
            />
         </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-matte-black relative">
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-24 grid md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-wine-red/30 rounded-2xl -z-10" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-wine-red/10 rounded-full blur-3xl -z-10" />
        </div>

        <div>
          <span className="text-wine-red text-xs font-bold tracking-[0.4em] uppercase mb-4 block">My Story</span>
          <h2 className="text-5xl md:text-6xl font-editorial leading-tight mb-8">
            Where <span className="italic">creativity</span><br />meets logic.
          </h2>
          <p className="text-lg text-warm-ivory/60 mb-8 leading-relaxed font-light">
            I am a multidisciplinary creator blending the art of visual storytelling with the power of code. With a background in film and fashion art direction, I bring an editorial eye to every line of code I write.
          </p>
          <ul className="space-y-6 mb-10">
            {[
              { title: 'Design with purpose', desc: 'Every pixel serves a narrative.' },
              { title: 'Code for performance', desc: 'Seamless engineering for the modern web.' },
              { title: 'Growth focused', desc: 'Building products that resonate and scale.' }
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border border-wine-red flex items-center justify-center flex-shrink-0 mt-1">
                   <ChevronRight className="w-3 h-3 text-wine-red" />
                </div>
                <div>
                   <p className="font-bold text-sm tracking-wide">{feature.title}</p>
                   <p className="text-xs text-warm-ivory/40">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-4 group">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Learn More</span>
            <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
            <ArrowUpRight className="w-4 h-4 text-wine-red" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const designSkills = [
    { name: 'Photoshop', icon: <ImageIcon className="w-4 h-4" />, code: 'PS' },
    { name: 'Illustrator', icon: <PenTool className="w-4 h-4" />, code: 'AI' },
    { name: 'After Effects', icon: <Video className="w-4 h-4" />, code: 'AE' },
    { name: 'Figma', icon: <Figma className="w-4 h-4" />, code: 'FG' },
    { name: 'Typography', icon: <Type className="w-4 h-4" />, code: 'TY' },
    { name: 'Visual Identity', icon: <Layers className="w-4 h-4" />, code: 'ID' }
  ];

  const engineeringSkills = [
    { name: 'Python', icon: <Terminal className="w-4 h-4" />, note: 'Main Language', color: 'text-wine-red' },
    { name: 'Django / FastAPI', icon: <Server className="w-4 h-4" /> },
    { name: 'React / Next.js', icon: <Layout className="w-4 h-4" /> },
    { name: 'AI Integrations', icon: <Cpu className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
    { name: 'Deployment', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-wine-red text-xs font-bold tracking-[0.4em] uppercase mb-4 block">My Expertise</span>
          <h2 className="text-5xl md:text-7xl font-editorial italic tracking-tight">Technical Mastery. Emotional Design.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Design Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[40px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
               <Palette className="w-80 h-80" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-wine-red/10 border border-wine-red/20 rounded-2xl flex items-center justify-center">
                  <Palette className="w-7 h-7 text-wine-red" />
                </div>
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Creative Suite</span>
              </div>
              <h3 className="text-4xl font-editorial italic mb-6">Visual Architecture</h3>
              <p className="text-warm-ivory/50 mb-10 text-sm leading-relaxed max-w-sm font-light">
                Crafting high-end visual languages and cinematic brand identities using industry-standard creative tools.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {designSkills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    whileHover="hover"
                    className="flex items-center justify-between glass px-5 py-4 rounded-2xl hover:bg-white/5 transition-all group/skill"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        variants={{
                          hover: { rotate: 12, scale: 1.2 }
                        }}
                        className="text-wine-red opacity-60 group-hover/skill:opacity-100 transition-opacity"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs font-bold tracking-wide">{skill.name}</span>
                    </div>
                    {skill.code && <span className="text-[10px] font-mono opacity-20 group-hover/skill:opacity-50 tracking-tighter">{skill.code}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Engineering Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[40px] relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
               <Code2 className="w-80 h-80" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Full Stack</span>
              </div>
              <h3 className="text-4xl font-editorial italic mb-6">Advanced Engineering</h3>
              <p className="text-warm-ivory/50 mb-10 text-sm leading-relaxed max-w-sm font-light">
                Architecting robust, scalable backends and seamless frontends with a primary focus on clean Python architecture.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {engineeringSkills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    whileHover="hover"
                    className="flex flex-col glass px-5 py-4 rounded-2xl hover:bg-white/5 transition-all group/skill"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <motion.div 
                        variants={{
                          hover: { rotate: -12, scale: 1.2 }
                        }}
                        className={`${skill.color || 'text-white'} opacity-60 group-hover/skill:opacity-100 transition-opacity`}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs font-bold tracking-wide">{skill.name}</span>
                    </div>
                    {skill.note && <span className="text-[8px] uppercase tracking-widest opacity-30 font-bold ml-7">{skill.note}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Verena Luxury",
      category: "Branding",
      desc: "Luxury skincare brand identity with editorial packaging design.",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Nexora AI",
      category: "Web Application",
      desc: "AI-powered SaaS platform for seamless business automation.",
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Insight Dashboard",
      category: "Analytics",
      desc: "High-performance data visualization for global enterprises.",
      img: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-wine-red text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-left">Featured Projects</span>
            <h2 className="text-5xl md:text-7xl font-editorial tracking-tighter">Crafted with purpose.<br />Built to <span className="italic">perform.</span></h2>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-wine-red transition-all cursor-pointer group">
            View All Projects 
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-wine-red transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: 'Experience', value: '1+ Year' },
          { label: 'Projects Delivered', value: '35' },
          { label: 'Happy Clients', value: '10+' },
          { label: 'Client Satisfaction', value: '98%' },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <h4 className="text-4xl md:text-5xl font-editorial text-wine-red mb-2 italic group-hover:scale-110 transition-transform">
              {stat.value}
            </h4>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Verena Skincare",
      text: "Abhishek Pandey transformed our brand vision into a stunning identity and delivered a web platform that exceeded our expectations.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder, Nexora",
      text: "Professional, creative and incredibly talented. Highly recommended for any design or development project.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
       name: "Emily Rodriguez",
       role: "Marketing Director",
       text: "The attention to detail and problem solving skills are exceptional. A true partner in our growth.",
       img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden bg-matte-black">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-wine-red/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <span className="text-wine-red text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What Clients Say</span>
          <h2 className="text-5xl md:text-7xl font-editorial tracking-tighter max-w-md">Trusted by brands. Loved by people.</h2>
        </div>

        <div className="flex-1 space-y-8">
           {testimonials.map((t, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="glass p-10 rounded-[40px] relative"
             >
                <Quote className="absolute top-8 right-8 text-wine-red/20 w-12 h-12" />
                <p className="text-xl font-light leading-relaxed mb-10 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <img 
                         src={t.img} 
                         alt={t.name} 
                         className="w-full h-full object-cover" 
                         referrerPolicy="no-referrer"
                      />
                   </div>
                   <div>
                      <p className="font-bold tracking-wide text-sm">{t.name}</p>
                      <p className="text-xs opacity-40 uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Selection',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:abhishekpandey.workpro@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    
    // Using window.open as it's more robust in iframe environments for mailto
    window.open(mailtoLink, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'New Project Selection', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-wine-red text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-editorial leading-tight mb-10 tracking-tighter">
            Let's build something <span className="italic">unforgettable.</span>
          </h2>
          <p className="text-lg text-warm-ivory/50 mb-12 font-light leading-relaxed max-w-md">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Let's create the next big thing together.
          </p>
          
          <div className="flex gap-6">
            {[
              { icon: <Instagram className="w-5 h-5"/>, link: 'https://www.instagram.com/thisis_abhishek_pandey?igsh=bXNxMjg2aHNqdTg5&utm_source=qr' },
              { icon: <Twitter className="w-5 h-5"/>, link: 'https://x.com/abhishe05360343?s=21' },
              { icon: <Github className="w-5 h-5"/>, link: 'https://github.com/CodewithAbhishekPandey' },
              { icon: <Mail className="w-5 h-5"/>, link: 'mailto:abhishekpandey.workpro@gmail.com' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.1, color: '#5b0012' }}
                href={social.link}
                className="w-12 h-12 rounded-full glass flex items-center justify-center transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="mt-20 relative">
             <div className="w-48 h-48 rounded-full border border-wine-red/20 flex items-center justify-center relative animate-pulse">
                <div className="text-center">
                   <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-1">Status</p>
                   <p className="text-xs font-bold text-green-500 uppercase tracking-widest">Available</p>
                </div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full glow-red shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
             </div>
          </div>
        </div>

        <div className="glass p-12 rounded-[40px] relative">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                   <Star className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-editorial italic mb-4">Message Triggered!</h3>
                <p className="text-warm-ivory/50 font-light">Your default mail app has been opened to send the message. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-wine-red transition-all font-light" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-wine-red transition-all font-light" 
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-wine-red transition-all font-light appearance-none text-warm-ivory/50"
                  >
                    <option>New Project Selection</option>
                    <option>Collaboration Inquiry</option>
                    <option>Full Stack Engineering</option>
                    <option>Creative Direction</option>
                    <option>Just Saying Hi</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase opacity-40">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-wine-red transition-all font-light resize-none" 
                    placeholder="Tell me about your vision" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-wine-red text-warm-ivory rounded-full flex items-center justify-center gap-3 group overflow-hidden relative shadow-[0_0_30px_rgba(91,0,18,0.2)]"
                >
                  <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase">Send Message</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:rotate-45 transition-transform" />
                  <div className="absolute inset-0 bg-red-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-matte-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-editorial font-bold tracking-tighter">
          Abhishek <span className="text-wine-red">Pandey</span>
        </div>
        
        <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">
          © 2026 Abhishek Pandey. All rights reserved.
        </p>

        <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 italic">
          Designed & Built with Passion
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-matte-black selection:bg-wine-red selection:text-warm-ivory">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-wine-red z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-10 right-10 z-[100] group"
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-wine-red/30 rounded-full border-dashed"
          />
          <div className="glass w-20 h-20 rounded-full flex flex-col items-center justify-center text-center p-2 glow-red group-hover:scale-110 transition-transform duration-500 bg-matte-black/40">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mb-1 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
             <span className="text-[8px] font-bold tracking-[0.2em] leading-tight uppercase opacity-60">I'm Available</span>
             <span className="text-[8px] font-bold tracking-[0.2em] leading-tight uppercase text-wine-red">For Projects</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
