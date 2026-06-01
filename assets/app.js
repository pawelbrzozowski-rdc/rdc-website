const siteData = window.RDCSiteData;

const iconMap = {
  sales: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18h3V9H4z"></path>
      <path d="M10 18h3V5h-3z"></path>
      <path d="M16 18h4v-7h-4z"></path>
    </svg>
  `,
  margin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6z"></path>
      <path d="M12 7v5"></path>
      <path d="M12 16h.01"></path>
    </svg>
  `,
  invoice: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h9l3 3v15H6z"></path>
      <path d="M15 3v4h4"></path>
      <path d="M8 11h8"></path>
      <path d="M8 15h8"></path>
      <path d="M8 19h5"></path>
    </svg>
  `,
  result: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v5c0 4.4 3.1 8.5 8 9 4.9-.5 8-4.6 8-9V7z"></path>
      <path d="m8 12 2.8 2.8L16 9.6"></path>
    </svg>
  `,
  project: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h18"></path>
      <path d="M7 3v18"></path>
      <path d="m12 7 6 6"></path>
      <path d="M12 13h6v6"></path>
    </svg>
  `,
  trade: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h18"></path>
      <path d="M5 7v10"></path>
      <path d="M19 7v10"></path>
      <path d="M8 11h8"></path>
      <path d="M8 15h5"></path>
    </svg>
  `,
  automotive: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13h14"></path>
      <path d="m6 13 2-4h8l2 4"></path>
      <path d="M7 17h.01"></path>
      <path d="M17 17h.01"></path>
      <path d="M6 13v4"></path>
      <path d="M18 13v4"></path>
    </svg>
  `,
  medical: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
      <path d="M7 4h10"></path>
      <path d="M7 20h10"></path>
    </svg>
  `,
  cnc: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v4"></path>
      <path d="M12 16v4"></path>
      <path d="M4 12h4"></path>
      <path d="M16 12h4"></path>
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
  `,
  production: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V9l4 3V9l4 3V4l8 6v10z"></path>
      <path d="M8 20v-4"></path>
      <path d="M12 20v-4"></path>
      <path d="M16 20v-4"></path>
    </svg>
  `,
  fleet: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 17c4-7 8-10 16-10"></path>
      <path d="m16 7 4 0v4"></path>
      <path d="M7 17h.01"></path>
      <path d="M17 7h.01"></path>
    </svg>
  `,
  service: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14 4 6 6"></path>
      <path d="m10 8 6 6"></path>
      <path d="m4 20 7-2 9-9-5-5-9 9z"></path>
    </svg>
  `,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getAssetPrefix() {
  return document.body.dataset.assetPrefix || "";
}

function getDemoById(id) {
  return siteData.demos.find((demo) => demo.id === id);
}

function getIcon(iconKey) {
  return iconMap[iconKey] || iconMap.sales;
}

function getHomeHref(hash = "") {
  const assetPrefix = getAssetPrefix();

  return assetPrefix ? `${assetPrefix}index.html${hash}` : hash || "index.html";
}

function getDemoHref(demo) {
  return `${getAssetPrefix()}realizacje/${demo.id}/index.html`;
}

function getOrderedDemos() {
  return siteData.demos.slice().sort((left, right) => left.order - right.order);
}

function getAbsoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteData.site.baseUrl}${normalizedPath}`;
}

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`);

  if (!node) {
    node = document.createElement("link");
    node.rel = rel;
    document.head.appendChild(node);
  }

  node.href = href;
}

function setStructuredData(id, payload) {
  let node = document.getElementById(id);

  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.head.appendChild(node);
  }

  node.textContent = JSON.stringify(payload);
}

function setPageMeta(meta) {
  if (!meta) {
    return;
  }

  const canonicalUrl = getAbsoluteUrl(meta.canonicalPath || "/");
  const imageUrl = meta.image || siteData.site.defaultImage;

  document.title = meta.title;
  upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
  upsertMeta('meta[name="keywords"]', { name: "keywords", content: meta.keywords || "" });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.ogTitle || meta.title });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: meta.ogDescription || meta.description,
  });
  upsertMeta('meta[property="og:type"]', { property: "og:type", content: meta.ogType || "website" });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
  upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: siteData.site.locale });
  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.ogTitle || meta.title });
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: meta.ogDescription || meta.description,
  });
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
  upsertLink("canonical", canonicalUrl);
}

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteData.company.name,
    url: siteData.site.baseUrl,
    logo: siteData.site.logo,
    image: siteData.site.defaultImage,
    email: siteData.company.email,
    telephone: siteData.company.phone,
    areaServed: ["Rzeszów", "Podkarpacie", "Polska"],
    description: siteData.home.seo.description,
    knowsAbout: [
      "inwentaryzacja danych",
      "analiza procesu",
      "analiza marży",
      "dashboard dla właściciela",
      "Looker Studio",
    ],
  };
}

function buildDemoSchema(demo) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: demo.seoTitle,
    serviceType: "Inwentaryzacja danych i analiza procesu",
    provider: {
      "@type": "LocalBusiness",
      name: siteData.company.name,
      url: siteData.site.baseUrl,
    },
    areaServed: ["Rzeszów", "Podkarpacie"],
    url: getAbsoluteUrl(demo.canonicalPath),
    description: demo.seoDescription,
    audience: {
      "@type": "BusinessAudience",
      audienceType: demo.publicName,
    },
  };
}

function buildItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: getOrderedDemos().map((demo, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: demo.publicName,
      url: getAbsoluteUrl(demo.canonicalPath),
    })),
  };
}

function fillCompanyFields() {
  const { email, phone, phoneHref, claim } = siteData.company;

  document.querySelectorAll("[data-company-email]").forEach((node) => {
    if (node.tagName === "A") {
      node.href = `mailto:${email}`;
    }
    if (!node.dataset.keepLabel) {
      node.textContent = email;
    }
  });

  document.querySelectorAll("[data-company-phone]").forEach((node) => {
    if (node.tagName === "A") {
      node.href = `tel:${phoneHref}`;
    }
    if (!node.dataset.keepLabel) {
      node.textContent = phone;
    }
  });

  document.querySelectorAll("[data-company-claim]").forEach((node) => {
    node.textContent = claim;
  });
}

function renderNavigation() {
  const navs = document.querySelectorAll(".nav");

  if (!navs.length) {
    return;
  }

  const demoLinks = getOrderedDemos()
    .map(
      (demo) => `
        <a class="nav-dropdown-link" href="${getDemoHref(demo)}">
          <span class="nav-dropdown-icon icon-bubble icon-${demo.tone}">
            ${getIcon(demo.icon)}
          </span>
          <span>
            <strong>${escapeHtml(demo.publicName)}</strong>
            <small>${escapeHtml(demo.shortTitle)}</small>
          </span>
        </a>
      `,
    )
    .join("");

  navs.forEach((nav) => {
    nav.innerHTML = `
      <a href="${getHomeHref("#start")}">Start</a>
      <a href="${getHomeHref("#jak-pomagamy")}">Jak pomagamy</a>
      <a href="${getHomeHref("#co-sprawdzamy")}">Co sprawdzamy</a>
      <details class="nav-dropdown">
        <summary>Przykłady</summary>
        <div class="nav-dropdown-panel">
          <a class="nav-dropdown-link nav-dropdown-all" href="${getHomeHref("#przyklady")}">
            <span>
              <strong>Wszystkie typy firm</strong>
              <small>Branżowe przykłady analizy i dashboardów</small>
            </span>
          </a>
          ${demoLinks}
        </div>
      </details>
      <a href="${getHomeHref("#kontakt")}">Kontakt</a>
    `;
  });
}

function renderAudienceCards() {
  const grid = document.querySelector("[data-demo-grid]");

  if (!grid) {
    return;
  }

  const cards = getOrderedDemos()
    .map((demo) => {
      const description = escapeHtml(demo.problem);
      const shortTitle = escapeHtml(demo.shortTitle);
      const publicName = escapeHtml(demo.publicName);

      return `
        <a class="realization-card tone-${demo.tone}" href="${getDemoHref(demo)}">
          <span class="realization-icon icon-bubble icon-${demo.tone}">
            ${getIcon(demo.icon)}
          </span>
          <div class="realization-copy">
            <strong>${publicName}</strong>
            <span class="realization-subtitle">${shortTitle}</span>
            <p>${description}</p>
          </div>
          <span class="realization-link">Zobacz przykład</span>
        </a>
      `;
    })
    .join("");

  grid.innerHTML = cards;
}

function renderTags(container, tags) {
  if (!container) {
    return;
  }

  container.innerHTML = tags
    .map((tag) => `<span class="tag-chip">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderQuestionCards(container, pages) {
  if (!container) {
    return;
  }

  container.innerHTML = pages
    .map(
      (question, index) => `
        <article class="question-card">
          <span class="question-index">0${index + 1}</span>
          <p>${escapeHtml(question)}</p>
        </article>
      `,
    )
    .join("");
}

function buildDemoMetrics(demo) {
  return [
    {
      label: "Start",
      value: "analiza",
    },
    {
      label: "Pytania",
      value: `${demo.pages.length} główne`,
    },
    {
      label: "Obszar",
      value: demo.tags[0] || "firma",
    },
    {
      label: "Efekt",
      value: "plan działań",
    },
  ];
}

function renderDemoVisual(container, demo) {
  if (!container) {
    return;
  }

  const metrics = buildDemoMetrics(demo)
    .map(
      (metric) => `
        <article class="demo-visual-metric">
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
        </article>
      `,
    )
    .join("");

  const bars = [38, 56, 48, 68, 62, 76]
    .map((height, index) => `<span style="--bar-height: ${Math.min(92, height + demo.order * 2)}%"><i>${index + 1}</i></span>`)
    .join("");

  const questions = demo.pages
    .map(
      (question, index) => `
        <li>
          <span>0${index + 1}</span>
          <strong>${escapeHtml(question)}</strong>
        </li>
      `,
    )
    .join("");

  container.innerHTML = `
    <div class="demo-visual-shell tone-${demo.tone}">
      <div class="demo-visual-top">
        <span class="demo-visual-icon icon-bubble icon-${demo.tone}">
          ${getIcon(demo.icon)}
        </span>
        <div>
          <strong>${escapeHtml(demo.publicName)}</strong>
          <small>Przykładowy efekt po analizie danych</small>
        </div>
      </div>

      <div class="demo-visual-metrics">
        ${metrics}
      </div>

      <div class="demo-visual-body">
        <div class="demo-visual-chart" aria-hidden="true">
          ${bars}
        </div>
        <ul class="demo-visual-list">
          ${questions}
        </ul>
      </div>

      <div class="demo-visual-footer">
        <span>Dane</span>
        <span>Marża</span>
        <span>Gotówka</span>
        <span>Decyzja</span>
      </div>
    </div>
  `;
}

function renderDemoLink(demo) {
  document.querySelectorAll("[data-demo-link]").forEach((link) => {
    if (!demo.demoUrl) {
      link.remove();
      return;
    }

    link.href = demo.demoUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Zobacz demo";
    link.classList.remove("is-placeholder");
    link.removeAttribute("aria-disabled");
  });
}

function ensureDemoLinkButtons(demo) {
  if (!demo.demoUrl) {
    return;
  }

  const actionGroups = document.querySelectorAll(".demo-hero-copy .demo-actions, .demo-cta-card .demo-actions");

  actionGroups.forEach((group) => {
    if (group.querySelector("[data-demo-link]")) {
      return;
    }

    group.insertAdjacentHTML("afterbegin", '<a class="button demo-link-button" data-demo-link href="#"></a>');
  });
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function renderHomePage() {
  if (document.body.dataset.page !== "home") {
    return;
  }

  setPageMeta(siteData.home.seo);
  setStructuredData("ld-local-business", buildLocalBusinessSchema());
}

function renderRealizationsPage() {
  if (document.body.dataset.page !== "realizations") {
    return;
  }

  setPageMeta(siteData.realizations.seo);
  setStructuredData("ld-realizations", buildItemListSchema());
}

function renderDemoPage() {
  if (document.body.dataset.page !== "demo") {
    return;
  }

  const demoId = document.body.dataset.demoId;
  const demo = getDemoById(demoId);

  if (!demo) {
    return;
  }

  setText("[data-demo-public-name]", demo.publicName);
  setText("[data-demo-short-title]", demo.shortTitle);
  setText("[data-demo-company]", demo.dlaJakiejFirmy);
  setText("[data-demo-problem]", demo.problem);
  setText("[data-demo-shows]", demo.coPokazuje);
  setText("[data-demo-benefit]", demo.coDajeWlascicielowi);
  setText("[data-demo-company-title]", demo.publicName);

  renderTags(document.querySelector("[data-demo-tags]"), demo.tags);
  renderQuestionCards(document.querySelector("[data-demo-pages]"), demo.pages);
  renderDemoVisual(document.querySelector("[data-demo-visual]") || document.querySelector(".demo-preview-frame"), demo);
  setText(".demo-preview-note", "Przykładowa grafika pokazuje kierunek raportu po analizie danych.");
  ensureDemoLinkButtons(demo);
  renderDemoLink(demo);

  setPageMeta({
    title: demo.seoTitle,
    description: demo.seoDescription,
    keywords: demo.seoKeywords,
    canonicalPath: demo.canonicalPath,
    ogType: "article",
  });
  setStructuredData("ld-demo-service", buildDemoSchema(demo));
}

function renderYear() {
  const yearNode = document.querySelector("#year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

renderYear();
renderNavigation();
fillCompanyFields();
renderAudienceCards();
renderHomePage();
renderRealizationsPage();
renderDemoPage();
