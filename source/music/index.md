---
title: 随心听
---

{% meting "7422861869" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:400px" "preload:none" "theme:#ad7a86"%}
{% aplayerlist %}
{
    "narrow": false,                          // Optional, narrow style
    "autoplay": true,                         // Optional, autoplay song(s), not supported by mobile browsers
    "mode": "random",                         // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    "showlrc": 3,                             // Optional, show lrc, can be 1, 2, 3
    "mutex": true,                            // Optional, pause other players when this player playing
    "theme": "#e6d0b2",	                      // Optional, theme color, default: #b7daff
    "preload": "metadata",                    // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    "listmaxheight": "513px",                 // Optional, max height of play list
    "music": [
        {
            "title": "CoCo",
            "author": "Jeff Williams",
            "url": "https://xilej.eu.org/api/raw/?path=/🎵音乐/aLIEz%20-%20mizuki%20(瑞葵)%26SawanoHiroyuki%5BnZk%5D.flac",
            "pic": "caffeine.jpeg",
            "lrc": "caffeine.txt"
        }
    ]
}
{% endaplayerlist %}
