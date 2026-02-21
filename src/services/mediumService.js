const RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielmarkjohn';

// Fallback data in case API fails
const FALLBACK_ARTICLES = [
  {
    title: "Building Scalable Microfrontends with Module Federation",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2024-01-15",
    categories: ["Architecture", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    description: "A deep dive into implementing microfrontend architecture at enterprise scale for editorial brands like Vogue and Vanity Fair.",
    readingTime: "8 min read"
  },
  {
    title: "Optimizing React Performance: Beyond the Basics",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2024-02-20",
    categories: ["Frontend", "Performance"],
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    description: "Advanced techniques for improving React app performance in production environments handling 300M+ records.",
    readingTime: "10 min read"
  },
  {
    title: "DevOps Best Practices for Modern Web Apps",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2023-11-10",
    categories: ["DevOps", "Architecture"],
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    description: "Lessons learned from implementing CI/CD pipelines at scale with Jenkins, GitHub Actions, and Azure.",
    readingTime: "7 min read"
  },
  {
    title: "Leading Engineering Teams: Technical Leadership in Practice",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2024-03-05",
    categories: ["Leadership", "Management"],
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    description: "Insights from managing teams of 15+ developers across multiple enterprise projects.",
    readingTime: "6 min read"
  },
  {
    title: "AI Integration Patterns: Building ChatGPT-like Applications",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2024-04-12",
    categories: ["AI", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    description: "Practical guide to integrating OpenAI APIs into production React applications.",
    readingTime: "9 min read"
  },
  {
    title: "GraphQL Supergraphs: Multi-tenant Architecture at Scale",
    link: "https://medium.com/@danielmarkj",
    pubDate: "2024-05-18",
    categories: ["Architecture", "Backend"],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    description: "Building multi-tenant GraphQL architectures for editorial platforms serving millions of users.",
    readingTime: "11 min read"
  }
];

function estimateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function extractThumbnail(content) {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800';
}

function cleanDescription(html) {
  const text = html.replace(/<[^>]*>/g, '');
  return text.length > 150 ? text.substring(0, 150) + '...' : text;
}

export async function fetchMediumArticles() {
  try {
    const response = await fetch(RSS_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium articles');
    }

    const data = await response.json();
    
    if (data.status !== 'ok' || !data.items) {
      throw new Error('Invalid RSS response');
    }

    return data.items.slice(0, 6).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      categories: item.categories || [],
      thumbnail: extractThumbnail(item.content || item.description),
      description: cleanDescription(item.description || item.content),
      readingTime: estimateReadingTime(item.content || item.description)
    }));
  } catch (error) {
    console.warn('Failed to fetch Medium articles, using fallback:', error);
    return FALLBACK_ARTICLES;
  }
}

export const ARTICLE_CATEGORIES = ['All'];