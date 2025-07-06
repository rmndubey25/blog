// Main application script
class BlogApp {
    constructor() {
        this.posts = [];
        this.currentTab = 'posts';
        this.init();
    }

    init() {
        this.loadPosts();
        this.loadProfile();
        this.setupEventListeners();
        this.initializeFeatherIcons();
        this.updatePostCount();
        this.renderContent(); // Automatically render posts on load
    }

    initializeFeatherIcons() {
        // Initialize Feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    setupEventListeners() {
        // Tab switching
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target.closest('.tab').dataset.tab);
            });
        });

        // Post interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn')) {
                this.handlePostAction(e);
            } else if (e.target.closest('.post-preview') || e.target.closest('.read-more') || e.target.classList.contains('post-image-preview')) {
                this.expandPost(e);
            }
        });
    }

    switchTab(tabName) {
        // Update active tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        this.currentTab = tabName;
        this.renderContent();
    }

    loadPosts() {
        // Load posts from blog-data.js
        if (typeof blogData !== 'undefined' && blogData.posts) {
            this.posts = blogData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            console.error('Blog data not found');
            this.posts = [];
        }
    }

    loadProfile() {
        // Load profile information from blog-data.js
        if (typeof blogData !== 'undefined' && blogData.profile) {
            const profile = blogData.profile;
            
            // Update profile elements
            document.getElementById('header-name').textContent = profile.name;
            document.getElementById('display-name').textContent = profile.name;
            document.getElementById('username').textContent = `@${profile.username}`;
            document.getElementById('bio').textContent = profile.bio;
            document.getElementById('join-date').textContent = `Joined ${profile.joinDate}`;
            document.getElementById('website').textContent = profile.website;
            document.getElementById('following-count').textContent = profile.followingCount;
            document.getElementById('followers-count').textContent = profile.followersCount;
            
            // Update cover photo if provided
            if (profile.coverPhoto) {
                document.getElementById('cover-photo').style.backgroundImage = `url(${profile.coverPhoto})`;
                document.getElementById('cover-photo').style.backgroundSize = 'cover';
                document.getElementById('cover-photo').style.backgroundPosition = 'center';
            }
            
            // Update avatar if provided
            if (profile.avatar) {
                const avatarElement = document.getElementById('avatar');
                avatarElement.innerHTML = `<img src="${profile.avatar}" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            }
            
            // Update page title
            document.title = `${profile.name} - Personal Blog`;
        }
    }

    updatePostCount() {
        const postCountElement = document.getElementById('post-count');
        if (postCountElement) {
            postCountElement.textContent = this.posts.length;
        }
    }

    renderContent() {
        const timeline = document.getElementById('timeline');
        
        switch (this.currentTab) {
            case 'posts':
                this.renderPosts(timeline);
                break;
            case 'about':
                this.renderAbout(timeline);
                break;
            case 'media':
                this.renderMedia(timeline);
                break;
            default:
                this.renderPosts(timeline);
        }
    }

    renderPosts(container) {
        if (this.posts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No posts yet</h3>
                    <p>Start writing your first blog post!</p>
                </div>
            `;
            return;
        }

        const postsHTML = this.posts.map(post => this.createPostHTML(post)).join('');
        container.innerHTML = postsHTML;

        // Re-initialize Feather icons for new content
        setTimeout(() => {
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 100);
    }

    renderAbout(container) {
        container.innerHTML = `
            <div class="post">
                <div class="post-content">
                    <div class="post-text">Welcome to my personal blog! This is where I share my thoughts, experiences, and insights about technology, life, and everything in between.

I'm passionate about web development, design, and creating meaningful digital experiences. Follow along for regular updates and behind-the-scenes content.</div>
                </div>
            </div>
        `;
    }

    renderMedia(container) {
        const mediaPosts = this.posts.filter(post => post.image);
        
        if (mediaPosts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No media posts</h3>
                    <p>Media posts will appear here when you add images to your blog posts.</p>
                </div>
            `;
            return;
        }

        // Create a grid layout for media posts showing just the images
        const mediaHTML = mediaPosts.map(post => `
            <div class="media-item" style="margin-bottom: 8px;">
                <img src="${post.image}" alt="Post media" style="width: 100%; border-radius: 16px; border: 1px solid #2f3336;">
            </div>
        `).join('');
        
        container.innerHTML = `<div class="media-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">${mediaHTML}</div>`;
    }

    createPostHTML(post) {
        const formattedDate = this.formatDate(post.date);
        const maxPreviewLength = 280; // Twitter-like character limit for preview
        
        // Check if post needs truncation
        const isLongPost = post.content.length > maxPreviewLength;
        const displayContent = isLongPost ? post.content.substring(0, maxPreviewLength) + '...' : post.content;
        
        // Get avatar HTML
        const avatarHTML = blogData.profile.avatar 
            ? `<img src="${blogData.profile.avatar}" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`
            : `<i data-feather="user"></i>`;
        
        // Handle both single image (legacy) and multiple images
        const images = post.images || (post.image ? [post.image] : []);
        const imageHTML = images.length > 0 ? 
            (isLongPost ? 
                // For long posts, show first image as preview
                `<img src="${images[0]}" alt="Post image" class="post-image-preview" style="width: 100%; max-width: 300px; height: 200px; object-fit: cover; border-radius: 12px; border: 1px solid #2f3336; margin-bottom: 12px; cursor: pointer;">` :
                // For short posts, show all images in a grid
                `<div class="post-images">${images.map(img => `<img src="${img}" alt="Post image" class="post-image">`).join('')}</div>`) : '';
        
        return `
            <article class="post ${isLongPost ? 'post-preview' : ''}" data-post-id="${post.id}" ${isLongPost ? 'style="cursor: pointer;"' : ''}>
                <div class="post-header">
                    <div class="post-avatar">
                        ${avatarHTML}
                    </div>
                    <div class="post-info">
                        <span class="post-name">${blogData.profile.name}</span>
                        <span class="post-username">@${blogData.profile.username}</span>
                        <span class="post-date">·</span>
                        <span class="post-date">${formattedDate}</span>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-text">${displayContent}</div>
                    ${imageHTML}
                    ${isLongPost ? '<div class="read-more" style="color: #1d9bf0; font-size: 15px; margin-top: 8px; cursor: pointer;">Read more</div>' : ''}
                    <div class="post-actions">
                        <button class="action-btn" data-action="reply">
                            <i data-feather="message-circle"></i>
                            <span>∞</span>
                        </button>
                        <button class="action-btn" data-action="repost">
                            <i data-feather="repeat"></i>
                            <span>∞</span>
                        </button>
                        <button class="action-btn" data-action="like">
                            <i data-feather="heart"></i>
                            <span>∞</span>
                        </button>
                        <button class="action-btn" data-action="share">
                            <i data-feather="share"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Hidden full content -->
                <div class="full-content" style="display: none;">
                    <div class="post-text">${post.content}</div>
                    ${images.length > 0 ? `<div class="post-images">${images.map(img => `<img src="${img}" alt="Post image" class="post-image">`).join('')}</div>` : ''}
                </div>
            </article>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds}s`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
        if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;

        // For older posts, show the actual date
        const options = { month: 'short', day: 'numeric' };
        if (date.getFullYear() !== now.getFullYear()) {
            options.year = 'numeric';
        }
        
        return date.toLocaleDateString('en-US', options);
    }

    handlePostAction(e) {
        const action = e.target.closest('.action-btn').dataset.action;
        const postElement = e.target.closest('.post');
        const postId = postElement.dataset.postId;

        // Simple interaction feedback
        const btn = e.target.closest('.action-btn');
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);

        console.log(`Action: ${action} on post: ${postId}`);
    }

    expandPost(e) {
        // Don't expand if clicking on action buttons
        if (e.target.closest('.action-btn')) return;
        
        const postElement = e.target.closest('.post');
        if (!postElement || !postElement.classList.contains('post-preview')) return;

        const postContent = postElement.querySelector('.post-content');
        const fullContent = postElement.querySelector('.full-content');
        
        if (postContent && fullContent) {
            // Hide preview content and show full content
            postContent.style.display = 'none';
            fullContent.style.display = 'block';
            
            // Remove preview class and cursor
            postElement.classList.remove('post-preview');
            postElement.style.cursor = 'default';
            
            // Add a "Show less" button only if it doesn't exist
            if (!fullContent.querySelector('.show-less')) {
                const showLessBtn = document.createElement('div');
                showLessBtn.className = 'show-less';
                showLessBtn.style.cssText = 'color: #1d9bf0; font-size: 15px; margin-top: 8px; cursor: pointer;';
                showLessBtn.textContent = 'Show less';
                showLessBtn.onclick = () => this.collapsePost(postElement);
                
                fullContent.appendChild(showLessBtn);
            }
            

            // Re-initialize icons for the full content
            setTimeout(() => {
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 100);
        }
    }

    collapsePost(postElement) {
        const postContent = postElement.querySelector('.post-content');
        const fullContent = postElement.querySelector('.full-content');
        
        if (postContent && fullContent) {
            // Show preview content and hide full content
            postContent.style.display = 'block';
            fullContent.style.display = 'none';
            
            // Restore preview class and cursor
            postElement.classList.add('post-preview');
            postElement.style.cursor = 'pointer';
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogApp();
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Add any resize-specific logic here if needed
});
