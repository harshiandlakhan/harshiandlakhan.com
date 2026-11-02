# Current invitation artwork

Generated with the built-in image generation tool for this invitation draft. The artwork follows the first video and supplied screenshot: peach paper, crimson saree and ivory dhoti hems, stylized illustrated feet, banana leaves, brass lamps, flowers, and a decorated mandap. No photographs of real people are used in the current website. No temple assets are referenced.

## Current files and prompts

- `couple-invitation.jpg`: Portrait 2:3 invitation artwork, using the supplied tablet screenshot as a composition and style reference. Recreate the artwork inside the tablet as flat art, without tablet, interface, text or room. Top 55%: knee-down crimson saree and ivory dhoti hems, small simplified illustrated feet, bridal gold anklet and red alta, no photographic skin. Left foreground brass standing lamp and bowls of floating flowers; jasmine, marigolds and banana leaves framing the sides. Bottom 45% clear warm peach paper with scattered petals at edges for live invitation text. Elegant dimensional painted stationery, not cartoon or flat vector art.
- `mandap-invitation.jpg`: Portrait 2:3 original painted wedding-card artwork. Cream and crimson draped mandap canopy, jasmine and marigold garlands, brass bells and lamps, banana plants and flower bowls. Mostly empty peach paper in the center for ceremony text, a small anonymous illustrated couple at the bottom in traditional clothing. Warm sunset. No temple, text, tablet, photograph of people, or watermark.
- `invitation-frame.jpg`: Landscape 3:2 softly realistic stationery artwork. Warm peach handmade paper, empty central 60%, banana leaves, jasmine and roses along the upper perimeter, brass oil lamp at far left, bowls of floating flowers at lower left and flowers at bottom right. Warm light and shadows, antique gold, crimson, green and cream. No envelope (rendered interactively in HTML), people, architecture or text.

The envelope is HTML/CSS with a working wax-seal button, opening flap, rising letter and transition to the invitation. Names and details remain selectable HTML text. Event details and RSVP are placeholders.


## Latest layout and artwork revision

The layout uses one 720px maximum-width portrait invitation, with continuous peach paper instead of repeated landscape background panels. Text flows below the couple image. Artwork transitions use soft CSS masks.

- `envelope-tactile.jpg`: built-in image generation. Prompt: Photorealistic straight-on portrait luxury Indian wedding envelope, pale peach cotton paper, gold-edged triangular flap, burgundy lotus wax seal and tassel, restrained jasmine/marigold/banana-leaf corner printing, no text. Layered flap and pocket open on seal click.
- `couple-straightened.jpg`: built-in image edit of `couple-invitation.jpg`. Prompt: Preserve the exact original illustration, touching feet pose, red alta, anklet, saree gold diamond border, ivory dhoti green/gold border, lamps, bowls, foliage, flowers and blank peach paper. Correct only the inclined lower bodies so the saree and dhoti hang vertically; no extra feet or new composition.
- `couple-upright.jpg` is an unused rejected redesign. The original `couple-invitation.jpg` remains preserved.

- `couple-straightened-v2.jpg` is the active version. Built-in image edit prompt: Make a tiny localized geometric correction to the existing dhoti so its long gold stripe and outer side run parallel to the image vertical border, with level gold/green hem. Preserve the same saree, two touching feet, anklet, lamps, flowers, foliage, paper, composition and colors.

- `couple-straightened-v3.jpg` is now active. Built-in image edit prompt: Rotate only the woman's existing saree/leg a few degrees clockwise around her toe contact point to align the long garment edges with the image's vertical border. Preserve the approved dhoti, same foot pose, anklet, saree pattern, background, flowers and lamps.

## Responsive opening revision
`envelope-wide.jpg` was generated with the built-in image tool: photorealistic 16:9 peach cotton-paper Indian wedding envelope, gold triangular flap, round burgundy lotus seal centered at 54% height, gold tassel and jasmine/marigold/banana-leaf corners, no lettering. Desktop uses this landscape artwork with proportional cover sizing; mobile retains the portrait original. The original approved couple artwork is preserved and partitioned into CSS-masked motion layers, entering from top and sides.

## Independent cutout animation
Active transparent PNGs: `layer-couple.png`, `layer-lamps.png`, `layer-foliage.png`. Created with built-in image generation in background-extraction mode, using `couple-straightened-v3.jpg` as the edit target. Each prompt requested the original 1024×1536 canvas and object placement, with only the named objects retained and all other pixels transparent: (1) saree/dhoti, anklet and touching feet; (2) brass lamps and flower bowls on the left; (3) banana foliage and floral garlands at the edges. Original artwork remains preserved. The PNGs have alpha channels and are rendered as independent objects over stationary peach paper; no rectangular image slices are used. Scroll position directly controls translations and opacity during a pinned scene. Reduced-motion users see the assembled scene without the added scroll duration. Desktop invitation text is aligned higher.

## Short entrance and setting revision
`courtyard-backdrop.jpg`: built-in image-generation prompt requested a portrait pale-peach Indian wedding courtyard with faint palms/banana grove, subtle rangoli around mid-height, scattered rose/marigold petals, and clear lower paper; no people, clothing or brass objects. This stationary background renders before object entrances. Couple travel reduced to 5%, lamps to 8%, foliage to 7%, with high initial opacity and a 28vh scroll interval. A soft CSS contact shadow sits under the feet. Envelope decoration reuses transparent lamp and foliage assets.
