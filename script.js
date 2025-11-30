// lightweight renderer for static pages using shared data
(function(){
  const data = window.portfolioData || {};
  const page = document.body.dataset.page;

  function el(tag, opts = {}){
    const node = document.createElement(tag);
    if(opts.className) node.className = opts.className;
    if(opts.text) node.textContent = opts.text;
    if(opts.html) node.innerHTML = opts.html;
    if(opts.href) node.href = opts.href;
    return node;
  }

  function renderAbout(){
    const root = document.getElementById("about-root");
    if(!root || !data.about) return;
    root.innerHTML = "";

    const summary = el("p",{className:"muted",html:data.about.summary});
    root.appendChild(summary);

    const grid = el("div",{className:"about-grid"});

    const tech = el("div",{className:"about-card"});
    tech.appendChild(el("h3",{text:"Tech I rely on"}));
    tech.appendChild(el("p",{text:data.about.tech}));
    grid.appendChild(tech);

    const highlights = el("div",{className:"about-card"});
    highlights.appendChild(el("h3",{text:"Highlights"}));
    const hList = el("ul");
    data.about.highlights.forEach(item=>{const li=el("li",{text:item});hList.appendChild(li);});
    highlights.appendChild(hList);
    grid.appendChild(highlights);

    root.appendChild(grid);
  }

  function renderProjects(){
    const root = document.getElementById("projects-root");
    if(!root || !data.projects) return;
    root.innerHTML = "";

    const scrollWrap = el("div",{className:"projects-scroll"});
    const cards = el("div",{className:"card-grid projects-grid"});
    const items = data.projects.flatMap(b=>b.items.map(it=>({...it,bucket:b.bucket})));

    items.forEach(item=>{
      const card = el("div",{className:"card project-card"});
      const imgWrap = el("div",{className:"card-thumb"});
      const img = el("img",{});
      img.src = item.image || "assets/project-placeholder.png";
      img.alt = item.title;
      imgWrap.appendChild(img);
      card.appendChild(imgWrap);

      card.appendChild(el("p",{className:"bucket-pill",text:item.bucket}));
      card.appendChild(el("h4",{text:item.title}));
      card.appendChild(el("p",{className:"muted",text:item.desc}));
      if(item.tags && Array.isArray(item.tags)){
        const tagRow = el("div",{className:"tag-row"});
        item.tags.forEach(t=>tagRow.appendChild(el("span",{className:"pill",text:t})));
        card.appendChild(tagRow);
      }
      const link = el("a",{className:"link",href:item.link || "#",text:"View details →"});
      link.target = "_blank"; link.rel="noreferrer";
      card.appendChild(link);
      cards.appendChild(card);
    });

    scrollWrap.appendChild(cards);
    root.appendChild(scrollWrap);
  }

  function renderExperience(){
    const root = document.getElementById("experience-root");
    if(!root || !data.experience) return;
    root.innerHTML = "";
    const timeline = el("div",{className:"timeline-zigzag"});

    const short = txt => {
      if(!txt) return "";
      const first = txt.split(".")[0];
      return first ? `${first.trim()}.` : txt;
    };

    data.experience.forEach((role, idx)=>{
      const side = idx % 2 === 0 ? "left" : "right";
      const item = el("div",{className:`timeline-node ${side}`});
      const bubble = el("div",{className:"timeline-bubble"});

      bubble.appendChild(el("p",{className:"muted tiny",text:role.dates}));
      bubble.appendChild(el("h3",{html:role.role}));
      bubble.appendChild(el("p",{className:"muted",text:short(role.summary)}));

      item.appendChild(bubble);
      timeline.appendChild(item);
    });

    if(data.honors && data.honors.length){
      const honors = el("div",{className:"subsection"});
      honors.appendChild(el("h3",{text:"Internal publications & honors"}));
      const list = el("ul",{className:"inline-list"});
      data.honors.forEach(h=>{const li=el("li",{text:h});list.appendChild(li);});
      honors.appendChild(list);
      root.appendChild(timeline);
      root.appendChild(honors);
    } else {
      root.appendChild(timeline);
    }
  }

  function renderBlog(){
    const root = document.getElementById("blog-root");
    if(!root || !data.blog) return;
    root.innerHTML = "";
    const grid = el("div",{className:"card-grid"});
    data.blog.forEach(post=>{
      const card = el("div",{className:"card"});
      card.appendChild(el("h4",{text:post.title}));
      card.appendChild(el("p",{text:post.desc}));
      const link = el("a",{className:"link",href:post.link || "#",text:"Read post →"});
      link.target="_blank"; link.rel="noreferrer";
      card.appendChild(link);
      grid.appendChild(card);
    });
    root.appendChild(grid);
  }

  function init(){
    if(page === "about" || page === "home") renderAbout();
    if(page === "projects") renderProjects();
    if(page === "experience") renderExperience();
    if(page === "blog") renderBlog();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
