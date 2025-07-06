// Blog data configuration
// Edit this file to update your profile information and blog posts

const blogData = {
    // Profile information
    profile: {
        name: "Alex Rivera",
        username: "alexcodes",
        bio: "Full-Stack Developer • Coffee Enthusiast • Digital Nomad • Building the future one line at a time",
        joinDate: "March 2023",
        website: "alexrivera.dev",
        followingCount: 234,
        followersCount: 892,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        coverPhoto: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=200&fit=crop"
    },

    // Blog posts array
    // Add new posts at the beginning of this array for chronological order
    posts: [
        {
            id: "post-005",
            content: `Just finished my morning workout and coding session! 💪

There's something magical about starting the day with both physical and mental exercise. Today I:

🏃‍♂️ 5km run along the beach
💻 Fixed 3 critical bugs in our production app
☕ Perfected my cold brew recipe
📚 Read 2 chapters of "Clean Architecture"

The combination of endorphins and problem-solving puts me in the perfect flow state. What's your morning routine like?

#morningRoutine #productivity #coding #fitness #balance`,
            date: "2024-07-06T14:20:00Z",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
            stats: {
                likes: 89,
                reposts: 23,
                replies: 15
            }
        },
        {
            id: "post-004",
            content: `Hot take: Documentation is just as important as the code itself 📝

I've been reviewing some legacy projects lately, and the difference between well-documented and poorly documented code is night and day.

Good documentation:
• Saves hours of debugging time
• Makes onboarding new team members seamless  
• Prevents "what was I thinking?" moments
• Shows you care about your future self

Yet so many developers treat it as an afterthought. Write docs like your job depends on it - because it might!

What's your approach to documentation? Do you write it as you code or after?

#documentation #coding #bestPractices #webdev #productivity`,
            date: "2024-07-05T18:45:00Z",
            image: null,
            stats: {
                likes: 156,
                reposts: 47,
                replies: 31
            }
        },
        {
            id: "post-003",
            content: `Finally set up my dream home office setup! 🏠✨

After months of research and saving up, I've created the perfect coding sanctuary. Here's what made the biggest difference:

🖥️ Dual 4K monitors (game changer for productivity)
⌨️ Mechanical keyboard with Cherry MX switches
🪑 Ergonomic chair that doesn't destroy my back
🌱 Plants everywhere for that oxygen boost
🎧 Noise-canceling headphones for deep focus
💡 Ambient LED lighting that adjusts with time of day

The investment was worth every penny. My productivity has skyrocketed and coding feels like a joy rather than a grind.

Swipe to see the before and after! What's in your ideal setup?

#homeoffice #productivity #workspace #coding #workFromHome`,
            date: "2024-07-04T12:15:00Z",
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
            stats: {
                likes: 203,
                reposts: 56,
                replies: 42
            }
        },
        {
            id: "post-002",
            content: `Just launched my new portfolio website! 🚀

After weeks of coding and designing, I'm finally ready to share my work with the world. The site features:

✨ Clean, responsive design
⚡ Fast loading times
🎨 Interactive animations
📱 Mobile-first approach

Built with modern web technologies and lots of coffee. Check it out and let me know what you think!

#webdev #portfolio #coding #frontend`,
            date: "2024-07-03T10:30:00Z",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
            stats: {
                likes: 124,
                reposts: 28,
                replies: 19
            }
        },
        {
            id: "post-001",
            content: `Welcome to my personal blog! 👋

This is where I'll be sharing my thoughts on web development, technology trends, and my journey as a developer. 

I'm excited to connect with fellow developers and share insights from my experiences. Expect posts about:

• Frontend development tips
• Project showcases  
• Industry insights
• Personal reflections

Thanks for stopping by, and I hope you'll find something valuable here!

#introduction #blog #webdev #community`,
            date: "2024-07-02T15:45:00Z",
            image: null,
            stats: {
                likes: 67,
                reposts: 12,
                replies: 24
            }
        }
    ]
};

// ========================================
// EASY EDITING FUNCTIONS
// ========================================

// Quick way to add a new post (add this at the bottom of the file)
function addNewPost(content, image = null, likes = 0, reposts = 0, replies = 0) {
    const newPost = {
        id: `post-${Date.now()}`,
        content: content,
        date: new Date().toISOString(),
        image: image,
        stats: {
            likes: likes,
            reposts: reposts,
            replies: replies
        }
    };
    
    // Add to the beginning of the posts array
    blogData.posts.unshift(newPost);
    
    return newPost;
}

// ========================================
// EXAMPLES - HOW TO ADD NEW POSTS
// ========================================

// Text-only post:
// addNewPost("Just finished reading an amazing book about JavaScript! Highly recommend it to anyone learning web development. #coding #books");

// Post with image:
// addNewPost("Beautiful sunset from my morning run! 🌅", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop");

// Post with custom engagement numbers:
// addNewPost("Excited to share my latest project!", "https://example.com/image.jpg", 25, 5, 8);

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}
