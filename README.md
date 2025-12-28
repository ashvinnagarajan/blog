# Adventus
A Blog by Ashvin Nagarajan

## Password Protection

To password protect a blog post, add a `password` field to the post's front matter:

```markdown
---
layout: post
title: My Protected Post
date: 2024-01-01
password: my-secret-password
---

Your post content here...
```

The password protection uses client-side JavaScript and stores authentication in sessionStorage, so users won't need to re-enter the password when navigating between pages during the same browser session.
