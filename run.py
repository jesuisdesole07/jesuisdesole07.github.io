with open("joke.txt", encoding="utf-8") as f:
    jokes = f.read()

with open("ascii.html", encoding="utf-8") as f:
    content = f.read()

to_replace = "■"
out = ""
idx = 0
for c in content:
    if c == to_replace:
        if idx >= len(jokes):
            out += c
        else:
            out += jokes[idx]
            idx += 1
    else:
        out += c

with open("output.html", "w", encoding="utf-8") as f:
    f.write(out)

