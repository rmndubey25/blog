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
        }
    ]
};

// Helper function to add a new post (for easy content management)
function addNewPost(content, image = null) {
    const newPost = {
        id: `post-${Date.now()}`,
        content: content,
        date: new Date().toISOString(),
        image: image,
        stats: {
            likes: 0,
            reposts: 0,
            replies: 0
        }
    };
    
    // Add to the beginning of the posts array
    blogData.posts.unshift(newPost);
    
    return newPost;
}

// Example usage (uncomment to add a new post):
// addNewPost("This is a new blog post!", "https://example.com/image.jpg");

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}
