<script setup>
import { data as posts } from './posts.data.js'
</script>

<template>
  <div class="post-list">
    <div v-for="post of posts" :key="post.url" class="post-item">
      <h2 class="title">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
      </h2>
      <p class="date">{{ new Date(post.frontmatter.date).toLocaleDateString('zh-CN') }}</p>
      <p class="excerpt">{{ post.frontmatter.excerpt }}</p>
      <a :href="post.url" class="read-more">阅读全文 →</a>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
}
.post-item {
  border-bottom: 1px solid #e0e0e0;
  padding: 2rem 0;
}
.post-item:last-child {
  border-bottom: none;
}
.title a {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.title a:hover {
  color: var(--vp-c-brand);
}
.date {
  color: #888;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
.excerpt {
  margin-top: 1rem;
  line-height: 1.7;
}
.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}
</style>