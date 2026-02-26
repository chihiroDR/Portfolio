import os

files = ['index.html', 'contact.html', 'privacy.html', 'publications.html']
replacements = {
    '株式会社ERP': '株式会社イノベーション・エデュ',
    'NPO法人ERP教育研究所': 'NPO法人未来教育研究所',
    'ERP Inc.': 'Innovation Edu Inc.',
    'info@erp-kyoiku.com': 'info@example-innovation.co.jp',
    '06-6191-2225': '03-0000-0000',
    '06-6191-2226': '03-0000-0001',
    '〒542-0012 大阪府大阪市中央区谷町9丁目1-18 アクセス谷町ビル7F': '〒100-0005 東京都千代田区丸の内1-1-1 架空ビルディング 7F',
    '〒542-0012　大阪府大阪市中央区谷町9丁目1-18　アクセス谷町ビル7F': '〒100-0005　東京都千代田区丸の内1-1-1　架空ビルディング 7F',
    '大阪メトロ谷町線・千日前線『谷町九丁目』下車②号出口　北へ100ｍ': 'JR線『東京駅』下車 丸の内北口 徒歩5分',
    '近鉄奈良・大阪線『大阪上本町』下車　西改札出口　地下道を大阪メトロ『谷町九丁目』に向かい2号出口北へ100m': '東京メトロ丸ノ内線『東京駅』下車 地下道直結',
    '大谷武彦': '山田 太郎',
    '大谷理事長': '山田理事長',
    '梶田叡一': '富士田 次郎',
    '梶田　叡一': '富士田　次郎',
    '成山　治彦': '鈴木　一郎',
    '古川　治': '高橋　健太',
    '湯峯　裕': '伊藤　達也',
    '平岡　弘章': '渡辺　翔太',
    '宮坂　政宏': '山本　大輔',
    '阿部　秀高': '中村　健二',
    '沼守　誠也': '小林　勇気',
    '田中　保和': '加藤　修',
    '杉浦　健': '吉田　智也',
    '矢野　裕俊': '山田　裕貴',
    '鍛冶田　千文': '佐々木　愛',
    '五百住　満': '山口　涼',
    '吉田　敦彦': '松本　潤',
    '岩永　寿美江': '井上　真理',
    '今宮　信吾': '木村　拓哉',
    '井原　暢子': '林　優子',
    '山下　敦子': '清水　美咲',
    '金山　憲正': '阿部　寛',
    '善野　八千子': '石川　花子',
    '松井　典夫': '山崎　賢人',
    '梶田': '富士田',
    '教育PRO': 'エデュケーション・フューチャー',
    'ERPブックレットシリーズ': 'イノベーション・ブックレットシリーズ',
    '<span class="logo-text">ERP</span>': '<span class="logo-text">Innovation Edu</span>',
    '<span class="logo-text-mobile">ERP</span>': '<span class="logo-text-mobile">Innovation Edu</span>',
    'img/otani_top.jpg': 'https://placehold.co/400x400?text=Profile',
    'img/name.jpg': 'https://placehold.co/200x50?text=Signature',
    'img/kazita_top.jpg': 'https://placehold.co/400x400?text=Profile',
    'img/wakon_r.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'https://kotenmeibun.jp/booklet/login.php': '#',
    'https://kotenmeibun.jp/eitango/': '#',
    'https://kotenmeibun.jp/koten/': '#',
    'https://kotenmeibun.jp/kotowaza/': '#',
    'https://www.osaka-shigaku.gr.jp/': '#',
    'https://www.amazon.co.jp/s?i=merchant-items&me=AJUE2WEBMCA9C&qid=1543981219%3D&ref=sr_pg_1': '#',
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    for k, v in replacements.items():
        content = content.replace(k, v)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print('Done global replacements')
