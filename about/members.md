# 成员

如果你想添加你自己，请PR。

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/fQwQf.png',
    name: 'fQwQf',
    title: 'fQ/wQf',
    desc: 'QwQ',
    links: [
      { icon: 'github', link: 'https://www.github.com/fQwQf' },
    ]
  },

  // --- 添加成员 ---
  // 复制上面的一个成员对象，然后修改内容即可
  // {
  //   avatar: 'https://www.github.com/somebody.png',
  //   name: 'XX',
  //   title: 'XXXX',
  //   links: [
  //     { icon: 'github', link: 'https://www.github.com/somebody' }
  //   ]
  // },
]
</script>

<VPTeamMembers size="medium" :members="members" />