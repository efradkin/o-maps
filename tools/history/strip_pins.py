#!/usr/bin/env python3
"""Удаляет значки 📍 (a.hist-place-pin) из статьи; в подписях — вместе с неразрывным пробелом перед значком.
Использование: python3 strip_pins.py ARTICLE.html"""
import re, sys
f = sys.argv[1]; s = open(f, encoding='utf-8', newline='').read()
n = len(re.findall(r'<a class="hist-place-pin"', s))
s = re.sub(r'(?:&nbsp;)?<a class="hist-place-pin"[^>]*>📍</a>', '', s)
open(f, 'w', encoding='utf-8', newline='').write(s); print(f'{f}: удалено значков {n}')
