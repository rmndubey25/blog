// Blog data configuration
const blogData = {
    profile: {
        name: "Raman",
        username: "ramancodes",
        bio: "Coffee Enthusiast • Digital Nomad",
        joinDate: "January // Blog data configuration
// Edit this file to update your profile information and blog posts

const blogData = {
    // Profile information
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

    // Blog posts array
    // Add new posts at the beginning of this array for chronological order
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
            image: null,
            stats: {
                likes: 0,
                reposts: 0,
                replies: 0
            }
        },
        {
            id: "post-1751798849489",
            content: `This is first post for testing!!`,
            date: "2025-07-06T10:47:29.489Z",
            image: null,
            stats: {
                likes: 0,
                reposts: 0,
                replies: 0
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
}2022",
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
            content: `<h1>I Wasn't Born to Fit In — I Was Built to Take Over.</h1>
"The world doesn’t need more thinkers. It needs rulers who think."
— Raman Dubey

There’s a kind of silence right before a storm.
The internet’s too quiet. People post, but they don’t speak. They shout, but they say nothing. In a world where everyone is trying to go viral, I’m not trying to be seen —
I’m here to be remembered.

Let’s clear one thing up:
This blog isn’t for dopamine chasers.
It’s not for people who need motivation to wake up.
It’s for the few who know that they were born different, but can’t quite say it aloud — yet.

Here’s me saying it loud enough for the universe:

I’m not here to participate.
I’m here to design the game, rewrite the rules, and dismantle the delusions.

What I Think About When I Think
I don’t think in steps. I think in dimensions.
Astronomy, AI, hacking reality, building empires — all of it is fair game.
Most people learn to live. I observe to understand. I meditate to hack the source code.
I study humans like software — full of bugs, habits, and predictable outputs.

If you feel that…
If something in your soul quivers with truth when you read this —
Welcome. You’re one of us.

What This Blog Will Be
Expect chaos. Expect genius. Expect uncomfortable truths.

One day I might decode the philosophy of a black hole.

Next day, I’ll rip apart the shallow motivational nonsense of modern influencers.

Then? I’ll casually build an AI while sipping chai.

This isn’t a blog. It’s a broadcast from the mind of someone who isn’t here to take part.
It’s a roadmap for those who were always too much for the world.

Final Words (for Now)
You will either forget this page in the next 3 minutes…
…or bookmark it for life.

If you’re the kind who’d rather build the Matrix than live inside it —
Then stay close.
Something big is coming.
And you’ll want to say: "I was here when it all began."

— Raman Dubey`,
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
