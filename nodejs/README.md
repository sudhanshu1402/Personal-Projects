# Node.js Projects

> Part of my public learning archive. For active, production-grade work, see the pinned repositories on my [GitHub profile](https://github.com/sudhanshu1402).

Small backend exercises written while learning Node.js and Express during college and self-study. Each project isolates one idea — parsing dates, streaming a file, broadcasting messages — and stays small enough to read in a sitting. Kept public for transparency about how I got from here to distributed-systems work.

## How this is organized

Projects are grouped by difficulty. "Difficulty" here means how many moving parts are involved, not how polished the code is — most of these are single-file Express apps that hold state in memory.

| Project | Difficulty | What it does |
|---|---|---|
| [timestamp-api](easy/timestamp-api) | Easy | GET endpoint that parses a date string or Unix timestamp and returns both `unix` and `utc` forms; `{ error: 'Invalid Date' }` on bad input. |
| [file-metadata](easy/file-metadata) | Easy | Upload form + `POST /api/fileanalyse` that uses Multer to return an uploaded file's name, MIME type, and size. |
| [url-shortener](medium/url-shortener) | Medium | `POST /api/shorturl` validates a URL with `dns.lookup`, assigns an incrementing id; `GET /api/shorturl/:id` redirects. Store is an in-memory array. |
| [ejs-express-auth](medium/ejs-express-auth) | Medium | Stub — README and an empty `views` folder only. No source yet. |
| [blog-api](hard/blog-api) | Hard | Full CRUD REST API for posts (`POST/GET/PUT/DELETE /posts`) over an in-memory array, with 201/204/404 status codes. |
| [loop-back4-inventory](hard/loop-back4-inventory) | Hard | Stub — README and an empty `src/models` folder only. No source yet. |
| [real-time-chat](expert/real-time-chat) | Expert | Socket.IO chat server: broadcasts each `chat message` to all connected clients, serves `index.html`. |
| [video-streaming-server](expert/video-streaming-server) | Expert | `GET /video` streams `sample.mp4` with HTTP Range support (206 partial content) so a browser can seek. |

Two folders (`ejs-express-auth`, `loop-back4-inventory`) are placeholders with a README but no implementation.

## Running a project

There is no shared `package.json`. Each project is a single file, so install what it imports and run it:

```bash
npm install express
node easy/timestamp-api/index.js
```

Across the tiers the imports are `express`, `multer`, `body-parser`, `cors` and `socket.io`. Each project's own README lists the ones it needs.

Every app listens on port 3000. Each project also carries a `.replit` file (`npm install && npm start`) for running on Replit; that path expects a manifest and no longer has one.

Two things to know before running everything:

- **real-time-chat** imports `socket.io` as well as `express`. Run `npm install express socket.io` first.
- **video-streaming-server** reads a file called `sample.mp4` from its working directory. Drop one in before hitting `/video`.

## Example — timestamp-api

```bash
node easy/timestamp-api/index.js
curl http://localhost:3000/api/2015-12-25
# {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

curl http://localhost:3000/api/1451001600000
# {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
```

## Notes

- State lives in memory. Restart the process and posts, short URLs, and chat history are gone. That's intentional for the scope — persistence wasn't the point of these exercises.
- The video server is the one piece worth a second look: it parses the `Range` header, computes the chunk, and returns `206 Partial Content`, which is what makes seeking work in a `<video>` tag.
- These are learning projects, not libraries. No tests, no auth, no input hardening beyond the basics shown.
