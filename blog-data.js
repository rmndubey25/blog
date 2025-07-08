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
            id: "post-1751971494569",
            content: `  <h2>I Walked Through Rain, Religion, and Raw Folders — Unbothered 🌧️</h2>
            
            <p>I woke up facing the label of a cylindrical bottle—colored medicine meant to turn my white garden back to black. Yes, I’m talking about hair.</p>

<p>It was raining. Still, I got up, did the usual morning rituals, and worshipped The God. I didn’t want to get wet. But of course, Indian moms > Rain. So I went. I worshipped. I came back wet and wondering how we still do these things.</p>

<p>Round 2 of the downpour: I had to drop my mom off at school. It wasn’t heavy rain, but the kind that pretends to be innocent and still gets you drenched. Anyway, task complete.</p>

<p>While poking around, I discovered WhatsApp creates a local archive of your contacts’ old profile pictures. Every single one. Like digital breadcrumbs of their identity evolution.</p>
<p>I didn’t expect to find a visual diary hidden in plain sight — but here we are. Privacy? Convenience? Maybe both. Maybe neither.</p>

<p>Later in the day, rain decided to chill, and the sun popped out to check what I was doing. Picked up mom, came home, had food.</p>

<p>Did some work in <strong>Nebula</strong> i.e., my workspace ;-).</p>

<p>Evening rolled in. We went to donate some scrap metal — exactly X kg of spiritual decluttering.</p>

<p>We came home, did the usual family wind-down, and fell asleep.</p>`,
            date: "2025-07-08T10:44:54.569Z",
            images: ["https://github.com/user-attachments/assets/fa094418-3bdb-4479-bbb2-9f777a9da350"],
            stats: { likes: 0, reposts: 0, replies: 0 }
        },
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
            content: `<h1>Enter the Mind of a Man Who Refused to Obey</h1>
            
<p><strong>"The world doesn’t need more thinkers. It needs rulers who think."</strong><br>— Raman Dubey</p>

<p>There’s a kind of silence right before a storm. The internet’s too quiet. People post, but they don’t speak. They shout, but they say nothing. In a world where everyone is trying to go viral, I’m not trying to be seen — I’m here to be remembered.</p>

<p>This blog isn’t for dopamine chasers. It’s for the ones born different.</p>

<p>I’m not here to participate. I’m here to design the game, rewrite the rules, and dismantle the delusions.</p>

<p><strong>What I Think About When I Think</strong><br>I don’t think in steps. I think in dimensions. Astronomy, AI, hacking reality, building empires — all of it is fair game.</p>

<p><strong>What This Blog Will Be:</strong></p>
<ul>
<li>One day I might decode the philosophy of a black hole.</li>
<li>Next day, I’ll rip apart the shallow motivational nonsense of modern influencers.</li>
<li>Then? I’ll casually build an AI while sipping chai.</li>
</ul>

<p><strong>Final Words:</strong> You will either forget this page in 3 minutes… or bookmark it for life.</p>

<p>If you’re the kind who’d rather build the Matrix than live inside it — stay close.</p>

<p>— Raman Dubey</p>`,
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
