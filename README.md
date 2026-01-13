<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio | Graphic Designer</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Outfit:wght@700&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            light: '#2dd4bf', // Teal-400
                            DEFAULT: '#0d9488', // Teal-600
                            dark: '#115e59', // Teal-800
                        },
                        dark: {
                            bg: '#0f172a', // Slate-900
                            card: '#1e293b', // Slate-800
                            text: '#f8fafc', // Slate-50
                        }
                    },
                    animation: {
                        'blob': 'blob 7s infinite',
                    },
                    keyframes: {
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                            '100%': { transform: 'translate(0px, 0px) scale(1)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        
        .glass-nav {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Admin Mode Styles */
        .admin-btn {
            display: none !important; /* Hidden by default */
        }
        
        body.is-admin .admin-btn {
            display: inline-flex !important; /* Visible when admin mode is on */
        }
        
        body.is-admin .admin-overlay {
            opacity: 1;
            pointer-events: auto;
        }
    </style>
</head>
<body class="bg-dark-bg text-gray-300 antialiased font-sans selection:bg-brand selection:text-white">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0">
                    <a href="#" class="font-display text-2xl font-bold text-white tracking-tight">
                        PORTFOLIO<span class="text-brand-light">.</span>
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8 items-center">
                        <a href="#home" class="text-white hover:text-brand-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                        <a href="#about" class="text-gray-300 hover:text-brand-light px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#projects" class="text-gray-300 hover:text-brand-light px-3 py-2 rounded-md text-sm font-medium transition-colors">Work</a>
                        <a href="#contact" class="bg-brand hover:bg-brand-light text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand/20">Let's Talk</a>
                        
                        <!-- Admin Toggle Button -->
                        <button onclick="toggleAdmin()" id="admin-toggle" class="text-gray-400 hover:text-white ml-4 transition-colors p-2 rounded-full hover:bg-white/10" title="Toggle Admin Mode">
                            <i class="fa-solid fa-gear text-lg"></i>
                        </button>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <button onclick="toggleMenu()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-dark-card border-t border-gray-700">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" onclick="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brand hover:text-white">Home</a>
                <a href="#about" onclick="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-brand hover:text-white">About</a>
                <a href="#projects" onclick="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-brand hover:text-white">Work</a>
                <a href="#contact" onclick="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-brand-light font-bold">Contact Me</a>
                <!-- Mobile Admin Toggle -->
                <button onclick="toggleAdmin(); toggleMenu()" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                    <i class="fa-solid fa-gear mr-2"></i> Toggle Admin Mode
                </button>
            </div>
        </div>
    </nav>

    <!-- Admin Login Modal -->
    <div id="login-modal" class="fixed inset-0 z-[60] hidden flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
        <div class="bg-dark-card border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all scale-100">
            <h3 class="text-2xl font-bold text-white mb-6 text-center">Admin Access</h3>
            <p class="text-gray-400 text-sm text-center mb-6">Enter credentials to manage content.</p>
            <form onsubmit="handleLogin(event)" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-400 mb-2">Username</label>
                    <input type="text" id="admin-user" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-light focus:ring-1 focus:ring-brand-light outline-none transition-colors" placeholder="admin" required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-400 mb-2">Password</label>
                    <input type="password" id="admin-pass" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-light focus:ring-1 focus:ring-brand-light outline-none transition-colors" placeholder="••••••••" required>
                </div>
                <div id="login-error" class="text-red-500 text-sm text-center hidden bg-red-500/10 py-2 rounded border border-red-500/20">
                    <i class="fa-solid fa-circle-exclamation mr-1"></i> Invalid credentials
                </div>
                <div class="flex gap-4 mt-6">
                    <button type="button" onclick="closeLoginModal()" class="flex-1 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold transition-colors">Cancel</button>
                    <button type="submit" class="flex-1 py-3 rounded-lg bg-brand hover:bg-brand-light text-white font-semibold shadow-lg shadow-brand/20 transition-all">Login</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <!-- Abstract Background Shapes -->
        <div class="absolute top-0 -left-4 w-72 h-72 bg-brand mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-500 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
            <div class="w-full lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0">
                <h2 class="text-brand-light font-semibold tracking-wide uppercase text-sm mb-4">Hello, I'm</h2>
                <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    Graphic <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-purple-400">Designer</span>
                </h1>
                <p class="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    I craft visual stories, brand identities, and immersive digital experiences. I blend art and functionality to bring creative visions to life.
                </p>
                <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap">
                    <a href="#projects" class="group relative px-8 py-3 bg-brand text-white font-bold rounded-full overflow-hidden shadow-lg shadow-brand/30 transition-all hover:scale-105">
                        <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span>View My Work</span>
                    </a>
                    <a href="#contact" class="px-8 py-3 border border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:border-gray-500">
                        Contact Me
                    </a>
                    
                    <!-- CV Upload Button (Admin Only) -->
                    <div class="admin-btn relative">
                        <button onclick="document.getElementById('cv-upload').click()" id="cv-btn" class="px-8 py-3 border border-brand text-brand-light font-semibold rounded-full hover:bg-brand hover:text-white transition-all flex items-center justify-center bg-dark-bg">
                            <span>Upload CV (PDF)</span> <i class="fa-solid fa-cloud-arrow-up ml-2"></i>
                        </button>
                        <input type="file" id="cv-upload" class="hidden" accept=".pdf" onchange="handleCvUpload(event)">
                    </div>
                </div>
                
                <div class="mt-12 flex justify-center lg:justify-start space-x-6 text-gray-400">
                    <a href="#" class="hover:text-brand-light transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-github text-2xl"></i></a>
                    <a href="#" class="hover:text-brand-light transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-linkedin text-2xl"></i></a>
                    <a href="#" class="hover:text-brand-light transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-twitter text-2xl"></i></a>
                </div>
            </div>
            
            <div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-gray-700 flex items-center justify-center group">
                    <div class="absolute inset-0 rounded-full border-t-2 border-brand-light animate-spin-slow"></div>
                    <img id="profile-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" alt="Profile" class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-dark-bg grayscale hover:grayscale-0 transition-all duration-500">
                    
                    <!-- Profile Picture Upload Overlay (Admin Only) -->
                    <div class="admin-btn absolute inset-0 flex items-center justify-center z-20">
                        <button onclick="document.getElementById('profile-upload').click()" class="bg-black/60 hover:bg-brand text-white w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-colors border-2 border-white/30 transform hover:scale-110">
                            <i class="fa-solid fa-camera text-2xl"></i>
                        </button>
                        <input type="file" id="profile-upload" class="hidden" accept="image/*" onchange="updateImage(event, 'profile-img')">
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
            <i class="fa-solid fa-arrow-down"></i>
        </div>
    </section>

    <!-- Tech Stack / About -->
    <div class="py-10 bg-dark-card border-y border-gray-800">
        <div class="max-w-7xl mx-auto px-4">
            <p class="text-center text-gray-500 text-sm mb-6 uppercase tracking-widest">Tools I Design With</p>
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <i class="fa-brands fa-figma text-4xl hover:text-purple-500 transition-colors"></i>
                <i class="fa-brands fa-sketch text-4xl hover:text-yellow-500 transition-colors"></i>
                <i class="fa-solid fa-pen-nib text-4xl hover:text-pink-500 transition-colors"></i>
                <i class="fa-solid fa-palette text-4xl hover:text-brand-light transition-colors"></i>
                <i class="fa-solid fa-vector-square text-4xl hover:text-blue-500 transition-colors"></i>
                <i class="fa-solid fa-image text-4xl hover:text-green-500 transition-colors"></i>
            </div>
        </div>
    </div>

    <!-- About Section -->
    <section id="about" class="py-24 relative">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">About Me</h2>
            <div class="bg-dark-card p-8 rounded-2xl border border-gray-800 shadow-xl">
                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    I am a passionate graphic designer based in the creative studio. With over 5 years of experience in visual storytelling, I enjoy creating brands that speak to people. My interest in design started back in 2012 when I first opened Photoshop — turns out manipulating pixels and playing with typography is my calling!
                </p>
                <p class="text-lg text-gray-300 leading-relaxed mb-6">
                    Fast-forward to today, and I've had the privilege of working at a branding agency, a fashion start-up, and a huge corporation. My main focus these days is crafting cohesive identity systems and stunning marketing materials for a variety of clients.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div>
                        <h3 class="text-white font-bold mb-4 flex items-center"><i class="fa-solid fa-pen-nib text-brand mr-2"></i> Expertise</h3>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Brand Identity</li>
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Print & Editorial</li>
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Illustration</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-white font-bold mb-4 flex items-center"><i class="fa-solid fa-laptop-code text-brand mr-2"></i> Software</h3>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Adobe Creative Suite</li>
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Figma & Sketch</li>
                            <li><i class="fa-solid fa-check text-brand-light mr-2"></i> Cinema 4D</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-dark-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 reveal">
                <h2 class="text-brand-light font-bold tracking-widest uppercase text-sm mb-2">My Portfolio</h2>
                <h3 class="text-3xl md:text-4xl font-display font-bold text-white">Recent Projects</h3>
                <p class="text-gray-500 text-sm mt-2 admin-btn"><i class="fa-solid fa-info-circle mr-1"></i> Admin Mode: Click camera icons to update images, tags to update PDFs.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Project 1: Nordic Brand Identity -->
                <div class="group relative rounded-xl overflow-hidden bg-dark-card border border-gray-800 hover:border-brand-light/50 transition-all duration-300 reveal">
                    <div class="h-48 overflow-hidden relative">
                        <!-- Upload Button (Admin Only) -->
                        <div class="absolute top-3 right-3 z-30 admin-btn">
                            <button onclick="document.getElementById('upload-p1').click()" class="bg-black/60 hover:bg-brand text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-colors border border-white/20">
                                <i class="fa-solid fa-camera"></i>
                            </button>
                            <input type="file" id="upload-p1" class="hidden" accept="image/*" onchange="updateImage(event, 'img-p1')">
                        </div>
                        
                        <div class="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img id="img-p1" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80" alt="Nordic Brand Identity" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xl font-bold text-white group-hover:text-brand-light transition-colors">Nordic Brand Identity</h4>
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-brands fa-behance"></i></a>
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm mb-4">A complete brand overhaul for a furniture startup, focusing on minimalism, sustainability, and clean typography.</p>
                        <div class="flex flex-wrap gap-2">
                            <!-- Branding PDF Upload (Interactive only in Admin Mode) -->
                            <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-branding">Branding</button>
                                <button onclick="document.getElementById('pdf-branding').click()" id="tag-branding" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-branding" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-branding', 'Branding')">

                            <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-logo">Logo Design</button>
                                <button onclick="document.getElementById('pdf-logo').click()" id="tag-logo" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-logo" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-logo', 'Logo Design')">
                        </div>
                    </div>
                </div>

                <!-- Project 2: Editorial Layout -->
                <div class="group relative rounded-xl overflow-hidden bg-dark-card border border-gray-800 hover:border-brand-light/50 transition-all duration-300 reveal delay-100">
                    <div class="h-48 overflow-hidden relative">
                         <!-- Upload Button (Admin Only) -->
                         <div class="absolute top-3 right-3 z-30 admin-btn">
                            <button onclick="document.getElementById('upload-p2').click()" class="bg-black/60 hover:bg-brand text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-colors border border-white/20">
                                <i class="fa-solid fa-camera"></i>
                            </button>
                            <input type="file" id="upload-p2" class="hidden" accept="image/*" onchange="updateImage(event, 'img-p2')">
                        </div>

                        <div class="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img id="img-p2" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80" alt="Editorial Layout" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xl font-bold text-white group-hover:text-brand-light transition-colors">Editorial Layout</h4>
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-brands fa-behance"></i></a>
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm mb-4">Modern magazine layout design for a lifestyle publication, featuring bold grids and expressive imagery.</p>
                        <div class="flex flex-wrap gap-2">
                             <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-indesign">InDesign</button>
                                <button onclick="document.getElementById('pdf-indesign').click()" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-indesign" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-indesign', 'InDesign')">

                             <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-print">Print</button>
                                <button onclick="document.getElementById('pdf-print').click()" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-print" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-print', 'Print')">
                        </div>
                    </div>
                </div>

                <!-- Project 3: Eco Packaging -->
                <div class="group relative rounded-xl overflow-hidden bg-dark-card border border-gray-800 hover:border-brand-light/50 transition-all duration-300 reveal delay-200">
                    <div class="h-48 overflow-hidden relative">
                        <!-- Upload Button (Admin Only) -->
                        <div class="absolute top-3 right-3 z-30 admin-btn">
                            <button onclick="document.getElementById('upload-p3').click()" class="bg-black/60 hover:bg-brand text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-lg transition-colors border border-white/20">
                                <i class="fa-solid fa-camera"></i>
                            </button>
                            <input type="file" id="upload-p3" class="hidden" accept="image/*" onchange="updateImage(event, 'img-p3')">
                        </div>

                        <div class="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img id="img-p3" src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&fit=crop&w=800&q=80" alt="Eco Packaging" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h4 class="text-xl font-bold text-white group-hover:text-brand-light transition-colors">Eco Packaging</h4>
                            <div class="flex space-x-3">
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-brands fa-behance"></i></a>
                                <a href="#" class="text-gray-400 hover:text-white"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm mb-4">Sustainable packaging concept for organic tea, utilizing recycled materials and earth-toned vector art.</p>
                        <div class="flex flex-wrap gap-2">
                             <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-packaging">Packaging</button>
                                <button onclick="document.getElementById('pdf-packaging').click()" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-packaging" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-packaging', 'Packaging')">

                             <div class="relative">
                                <button class="px-2 py-1 text-xs rounded-md bg-dark-bg text-brand-light border border-gray-700 cursor-default" id="view-3d">3D Mockup</button>
                                <button onclick="document.getElementById('pdf-3d').click()" class="admin-btn absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" title="Upload PDF"></button>
                                <span class="admin-btn absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"><i class="fa-solid fa-pen"></i></span>
                            </div>
                            <input type="file" id="pdf-3d" class="hidden" accept=".pdf" onchange="handleTagPdf(event, 'view-3d', '3D Mockup')">
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="text-center mt-12">
                <a href="#" class="inline-block text-brand-light hover:text-white font-medium transition-colors border-b border-brand-light hover:border-white pb-1">View Full Project Archive <i class="fa-solid fa-arrow-right ml-2 text-sm"></i></a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal">
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                    I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div class="bg-dark-card p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <form class="space-y-6" onsubmit="event.preventDefault(); alert('Thanks for the message!');">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-colors" placeholder="John Doe">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-colors" placeholder="john@example.com">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                        <input type="text" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-colors" placeholder="Project Inquiry">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea rows="4" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-colors" placeholder="Hello, I'd like to talk about..."></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">Upload Image</label>
                        <input type="file" accept="image/*" class="w-full bg-dark-bg border border-gray-700 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand file:text-white hover:file:bg-brand-light cursor-pointer">
                    </div>
                    <button type="submit" class="w-full bg-brand hover:bg-brand-light text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-brand/25">
                        Send Message <i class="fa-solid fa-paper-plane ml-2"></i>
                    </button>
                </form>
            </div>
            
            <div class="mt-12 text-center">
                <p class="text-gray-400 mb-4">Or email me directly at</p>
                <a href="mailto:hello@example.com" class="text-2xl font-bold text-white hover:text-brand-light transition-colors">hello@example.com</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark-bg py-8 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <span class="text-gray-500 text-sm">&copy; 2024 Your Name. All rights reserved.</span>
            </div>
            <div class="flex space-x-6 text-gray-400">
                <a href="#" class="hover:text-brand-light transition-colors text-sm">GitHub</a>
                <a href="#" class="hover:text-brand-light transition-colors text-sm">LinkedIn</a>
                <a href="#" class="hover:text-brand-light transition-colors text-sm">Twitter</a>
                <a href="#" class="hover:text-brand-light transition-colors text-sm">Instagram</a>
            </div>
        </div>
    </footer>

    <script>
        // --- ADMIN CREDENTIALS ---
        // In a real application, never store credentials in plain text like this.
        // This is for demonstration purposes only.
        const ADMIN_USER = "AdminYco";
        const ADMIN_PASS = "Yco0820#$";

        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        // Toggle Admin Mode Logic
        function toggleAdmin() {
            // If already logged in (admin mode active), click logs out
            if (document.body.classList.contains('is-admin')) {
                if(confirm("Log out of Admin Mode?")) {
                    document.body.classList.remove('is-admin');
                    updateToggleBtnState(false);
                }
            } else {
                // If not logged in, show login modal
                document.getElementById('login-modal').classList.remove('hidden');
                document.getElementById('admin-user').focus();
            }
        }

        // Handle Login Submission
        function handleLogin(e) {
            e.preventDefault();
            const user = document.getElementById('admin-user').value;
            const pass = document.getElementById('admin-pass').value;
            const errorMsg = document.getElementById('login-error');

            if (user === ADMIN_USER && pass === ADMIN_PASS) {
                // Success
                document.body.classList.add('is-admin');
                updateToggleBtnState(true);
                closeLoginModal();
                errorMsg.classList.add('hidden');
            } else {
                // Failure
                errorMsg.classList.remove('hidden');
                // Shake animation for visual feedback
                const modalBox = document.querySelector('#login-modal > div');
                modalBox.classList.add('animate-[shake_0.5s_ease-in-out]');
                setTimeout(() => modalBox.classList.remove('animate-[shake_0.5s_ease-in-out]'), 500);
            }
        }

        function closeLoginModal() {
            document.getElementById('login-modal').classList.add('hidden');
            document.getElementById('login-error').classList.add('hidden');
            document.getElementById('admin-user').value = '';
            document.getElementById('admin-pass').value = '';
        }

        function updateToggleBtnState(isAdmin) {
            const toggleBtn = document.getElementById('admin-toggle');
            if (isAdmin) {
                toggleBtn.classList.add('text-brand-light', 'bg-white/10');
                toggleBtn.classList.remove('text-gray-400');
            } else {
                toggleBtn.classList.remove('text-brand-light', 'bg-white/10');
                toggleBtn.classList.add('text-gray-400');
            }
        }

        // Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
        reveal();

        // Image Upload Logic (Profile & Projects)
        function updateImage(event, imgId) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgElement = document.getElementById(imgId);
                    imgElement.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
        
        // CV Upload Handler
        function handleCvUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const btn = document.getElementById('cv-btn');
                btn.innerHTML = `<span>${file.name}</span> <i class="fa-solid fa-check ml-2"></i>`;
                btn.classList.add('bg-brand', 'text-white', 'border-brand');
                btn.classList.remove('bg-dark-bg', 'text-brand-light');
            }
        }

        // Tag PDF Upload Handler
        function handleTagPdf(event, btnId, originalText) {
            const file = event.target.files[0];
            if (file) {
                const btn = document.getElementById(btnId);
                btn.classList.remove('bg-dark-bg', 'text-brand-light', 'border-gray-700');
                btn.classList.add('bg-brand', 'text-white', 'border-brand');
                btn.innerHTML = `${originalText} <i class="fa-solid fa-file-pdf ml-1"></i>`;
            }
        }
    </script>
</body>
</html>
