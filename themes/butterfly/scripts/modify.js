'use strict';
const { filter } = hexo.extend;

// 替换 CDN
filter.register('before_generate', () => {
    const { asset } = hexo.theme.config;
    for (const name in asset) {
        asset[name] = asset[name]
            .replace('//cdn.jsdelivr.net/npm/', '//cdn1.tianli0.top/npm/');
    }
}, 11);
