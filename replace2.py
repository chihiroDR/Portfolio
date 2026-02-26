import os
import re

files = ['index.html', 'contact.html', 'privacy.html', 'publications.html']

replacements = {
    # index.html images
    'img/教育PRO.jpg': 'https://placehold.co/600x400?text=Magazine',
    'img/eitango.jpg': 'https://placehold.co/300x200?text=Certificate',
    'img/koten.jpg': 'https://placehold.co/300x200?text=Certificate',
    'img/yojiken.jpg': 'https://placehold.co/300x200?text=Certificate',
    'img/bookサムネイル2.png': 'https://placehold.co/800x400?text=Books',
    'img/mr12.jpg': 'https://placehold.co/200x60?text=Banner',
    'img/mr12_on.jpg': 'https://placehold.co/200x60?text=Banner+Hover',
    'img/mr17.jpg': 'https://placehold.co/200x60?text=Banner',
    'img/mr17_on.jpg': 'https://placehold.co/200x60?text=Banner+Hover',
    
    # publications.html images
    'img/books/kyoiku_pro.png': 'https://placehold.co/300x400?text=Magazine',
    'img/books/人間教育を.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/江戸時代.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/閑言録.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/国語教科書定番.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/大阪の教育行政.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/カリキュラム教師.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/公衆衛生学.jpg': 'https://placehold.co/300x400?text=Book+Cover',
    'img/books/研究と実践.jpg': 'https://placehold.co/300x400?text=Book+Cover',

    # publications.html book titles and authors
    '「江戸時代の学び舎探訪」<br>～近・現代における教育制度の原点は、江戸時代の教育制度だ～': '「日本の歴史と学び」<br>～近・現代における教育制度の原点～',
    '中田正浩著': '高橋健太著',
    '「閑言録　教育、社会、そして人間について」': '「教育社会学入門」',
    '小西正雄著': '田中一著',
    '「国語教科書定番教材の授業」<br>―新学習指導要領対応―': '「未来の国語教育」<br>―新学習指導要領対応―',
    '二瓶弘行・木村拓哉・清水美咲・中村健二著': '渡辺一郎ほか著',
    '「大阪の教育行政」<br>―橋下知事との相克と協調―': '「地方教育行政の現状」<br>―今後の課題と協調―',
    '中西正人著': '鈴木次郎著',
    '「21世紀のカリキュラムと教師教育の研究」': '「次世代カリキュラムの研究」',
    '栗岡住子他著': '佐藤花子他著',
    '野嶋栄一郎編著': '伊藤太郎編著',

    # contact.html iframe removal
    '<iframe\n                        src="https://docs.google.com/forms/d/e/1FAIpQLSfjdBsSLlYLR5AiJhKIUKj-X-IqNJuZOXmLlzLMAp5kiD0DGQ/viewform?embedded=true"\n                        width="100%" height="1760" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>': '<div style="background: #f4f4f4; padding: 40px; text-align: center; border-radius: 8px;"><p style="font-size: 1.2em; color: #666;">（お問い合わせフォームは現在デモ版のため機能していません）</p></div>',
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    for k, v in replacements.items():
        content = content.replace(k, v)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done secondary replacements')
