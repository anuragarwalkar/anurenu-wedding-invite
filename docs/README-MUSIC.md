# Music File

Place your wedding background music file here as `music.mp3`.

The MusicToggle component will automatically detect and play this file.

**Recommended:**
- Format: MP3
- Duration: 2-3 minutes (looping can be added if needed)
- Volume: Pre-normalized to a comfortable listening level
- Style: Instrumental (Shehnai, Sitar, or any traditional Indian wedding music)

## How to Add:

1. Prepare your audio file (e.g., wedding-music.mp3)
2. Rename it to `music.mp3`
3. Place it in the `/public/` folder (same location as this file)
4. The music toggle button will appear automatically on the site

## Optional: Enable Looping

If you want the music to loop continuously, edit `src/components/MusicToggle.jsx` and add:

```javascript
audio.loop = true
```

Right after creating the Audio object in the useEffect.
