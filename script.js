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

    const summary = el("p",{className:"muted",text:data.about.summary});
    root.appendChild(summary);

    const grid = el("div",{className:"about-grid"});

    const what = el("div",{className:"about-card"});
    what.appendChild(el("h3",{text:"What I do"}));
    const list = el("ul");
    data.about.whatIDo.forEach(item=>{const li=el("li",{text:item});list.appendChild(li);});
    what.appendChild(list);
    grid.appendChild(what);

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

    const bucketGrid = el("div",{className:"bucket-grid"});
    data.projects.forEach(bucket=>{
      const bucketEl = el("div",{className:"bucket"});
      bucketEl.appendChild(el("h3",{text:bucket.bucket}));

      const cards = el("div",{className:"card-grid"});
      bucket.items.forEach(item=>{
        const card = el("div",{className:"card"});
        const header = el("div",{className:"card-header"});
        header.appendChild(el("h4",{text:item.title}));
        header.appendChild(el("span",{className:"pill",text:item.tag}));
        card.appendChild(header);
        card.appendChild(el("p",{text:item.desc}));
        const link = el("a",{className:"link",href:item.link || "#",text:"View details →"});
        link.target = "_blank"; link.rel="noreferrer";
        card.appendChild(link);
        cards.appendChild(card);
      });
      bucketEl.appendChild(cards);
      bucketGrid.appendChild(bucketEl);
    });
    root.appendChild(bucketGrid);
  }

  function renderExperience(){
    const root = document.getElementById("experience-root");
    if(!root || !data.experience) return;
    root.innerHTML = "";
    const timeline = el("div",{className:"timeline"});

    data.experience.forEach(role=>{
      const item = el("div",{className:"timeline-item"});
      const head = el("div",{className:"timeline-head"});
      head.appendChild(el("h3",{text:role.role}));
      head.appendChild(el("span",{className:"muted",text:`${role.location} · ${role.dates}`}));
      item.appendChild(head);
      item.appendChild(el("p",{className:"muted",text:role.summary}));

      if(role.impacts && role.impacts.length){
        const grid = el("div",{className:"impact-grid"});
        role.impacts.forEach(impact=>{
          const card = el("div",{className:"impact-card"});
          card.appendChild(el("h4",{text:impact.title}));
          card.appendChild(el("p",{text:impact.desc}));
          grid.appendChild(card);
        });
        item.appendChild(grid);
      }
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
    if(page === "about") renderAbout();
    if(page === "projects") renderProjects();
    if(page === "experience") renderExperience();
    if(page === "blog") renderBlog();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
