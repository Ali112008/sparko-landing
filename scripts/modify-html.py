import re
import urllib.parse

# Read the fetched HTML
with open('/tmp/page-raw.html', 'r') as f:
    html = f.read()

# Replace /_next/image?url=%2F<filename>.png&w=XX&q=75 patterns with direct public paths
# Pattern: /_next/image?url=%2F<filename>&w=XX&q=75 -> /public/<filename>
def replace_next_image(match):
    url_param = match.group(1)
    # Decode URL parameter
    decoded = urllib.parse.unquote(url_param)
    # Extract the filename (remove leading /)
    filename = decoded.lstrip('/')
    # Return direct public path
    return f'/public/{filename}'

# Replace src="/_next/image?url=%2Fxxx&w=XX&q=75"
html = re.sub(r'/_next/image\?url=([^&]+)&w=\d+&q=\d+', replace_next_image, html)

# Also replace srcSet which has two entries with different widths
# Pattern: /_next/image?url=%2Fxxx&w=64&q=75 1x, /_next/image?url=%2Fxxx&w=128&q=75 2x
# Simplify to just use the higher quality image
def replace_srcset(match):
    url_param = match.group(1)
    decoded = urllib.parse.unquote(url_param)
    filename = decoded.lstrip('/')
    # Use a single source with the public path
    return f'/public/{filename}'

# Replace srcSet patterns - they contain 1x and 2x variants
# Just replace all /_next/image references in srcSet
html = re.sub(r'/_next/image\?url=([^&]+)&w=\d+&q=\d+', replace_srcset, html)

# Write the modified HTML
with open('/home/z/my-project/tmp-page-modified.html', 'w') as f:
    f.write(html)

print("Modified HTML saved with direct image paths")
