// assets/js/portfolio.js

let allProjects = [];

async function initProjects() {
    try {
        const response = await fetch('/projects.json');
        const data = await response.json();

        allProjects = data.projects;
        const skillsData = data.skills;

        // Sort projects by date
        allProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

        generateFilterButtons();
        renderProjects(allProjects);
        renderSkills(skillsData);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function renderSkills(skills) {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    skillsList.innerHTML = skills.map(skill => `
        <li>
            <strong class="text-purple-400">${skill.category}:</strong> 
            <span class="text-gray-300">${skill.items}</span>
        </li>
    `).join('');
}

function generateFilterButtons() {
    const tags = new Set(['All']);
    allProjects.forEach(p => p.tags.forEach(t => tags.add(t)));
    
    const filterBar = document.getElementById('filter-bar');
    filterBar.innerHTML = ''; 

    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.innerText = tag;
        btn.className = "tag-btn px-6 py-1 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300 font-medium";
        if(tag === 'All') btn.classList.add('tag-active');
        
        btn.onclick = (e) => {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('tag-active'));
            e.target.classList.add('tag-active');
            filterProjects(tag);
        };
        filterBar.appendChild(btn);
    });
}

function filterProjects(tag) {
    const filtered = tag === 'All' 
        ? allProjects 
        : allProjects.filter(p => p.tags.includes(tag));
    renderProjects(filtered);
}

function renderProjects(projects) {
    const grid = document.getElementById('project-grid');
    grid.className = "grid grid-cols-1 gap-8"; 

    grid.innerHTML = projects.map(project => `
        <div class="relative group bg-gray-900/40 border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/60 rounded-xl overflow-hidden flex flex-col md:flex-row h-full md:min-h-[16rem] transition-all duration-500 ease-out">
            
            <div class="w-full md:w-72 h-48 md:h-auto bg-transparent flex-shrink-0 flex items-center justify-center p-4">
                <img src="${project.demo}" 
                    alt="${project.title}" 
                    class="max-w-full max-h-full w-auto h-auto rounded shadow-lg"
                    style="image-rendering: auto;">
            </div>

            <div class="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <div class="flex justify-between items-start">
                        <h3 class="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-500">${project.title}</h3>
                        <span class="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-widest">
                            ${new Date(project.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}
                        </span>
                    </div>
                    <p class="text-purple-300/80 italic text-sm mb-3 font-light">${project.subtitle}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4 relative">
                        ${project.tags.map(t => `
                            <span class="text-[10px] uppercase tracking-tighter border border-purple-900/30 bg-purple-900/10 text-purple-300/70 px-2 py-0.5 rounded">
                                ${t}
                            </span>
                        `).join('')}
                    </div>

                    <p class="text-sm text-gray-400/90 line-clamp-3 md:line-clamp-4 leading-relaxed font-light">
                        ${project.description}
                    </p>
                </div>

                <div class="mt-6 flex flex-row justify-between items-center relative">
                    <div class="flex flex-col">
                        <span class="text-white/90 text-xs font-semibold underline decoration-purple-900/50 underline-offset-4 group-hover:text-purple-400 transition-colors duration-500">Read Case Study &rarr;</span>
                        <p class="text-xs text-gray-500 uppercase tracking-tighter mt-1 font-mono">Stack: ${project.tech}</p>
                    </div>
                    
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                    class="relative z-30 p-2 bg-gray-800 hover:bg-purple-600/80 rounded-lg border border-gray-700 transition-all duration-300 flex items-center gap-2 group/gh">
                        <span class="text-xs font-medium text-gray-400 group-hover/gh:text-white">GitHub</span>
                        <svg class="w-4 h-4 fill-current text-gray-500 group-hover/gh:text-white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>

            <a href="${project.link}" class="absolute inset-0 z-20" aria-label="Read Case Study"></a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    initProjects();
});