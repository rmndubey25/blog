// Blog data configuration
const blogData = {
    profile: {
        name: "Raman",
        username: "ramancodes",
        bio: "Coffee Enthusiast • Digital Nomad",
        joinDate: "January 2022",
        website: "https://rmndubey25.github.io",
        followingCount: "∞",
        followersCount: "∞",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        coverPhoto: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=200&fit=crop"
    },
    posts: [
        {
            id: "post-1751806254461",
            content: `Imagine your mind is a stage. There's a monkey on stage with a microphone. This monkey (your thoughts) keeps chattering nonstop—talking about your future, your past, what she said, what he did, what meme you saw, what bug you couldn't fix, what business idea just popped up…

But here’s the twist:
You are not the monkey.
You are the guy sitting in the audience, silently watching, laughing, getting annoyed, sometimes clapping, but you don't realize the monkey isn’t you.

Most people live their entire lives thinking:

“I am the monkey.”
But what if you're just consciousness, watching this drama unfold?`,
            date: "2025-07-06T12:50:54.461Z",
            images: null,
            stats: { likes: 0, reposts: 0, replies: 0 }
        },
        {
            id: "post-1751798849489",
            content: `This is first post for testing!!`,
            date: "2025-07-06T10:47:29.489Z",
            images: null,
            stats: { likes: 0, reposts: 0, replies: 0 }
        }
    ]
};

function addNewPost(content, image = null) {
    const newPost = {
        id: `post-${Date.now()}`,
        content: content,
        date: new Date().toISOString(),
        image: image,
        stats: { likes: 0, reposts: 0, replies: 0 }
    };
    blogData.posts.unshift(newPost);
    return newPost;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}
