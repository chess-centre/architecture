# Routing

This describes the application structure, this will form the basis for the wireframes for each page and the data required to be served

```
platform
 ┣ /admin ⚙️
 ┃ ┣ /events.summary.page
 ┃ ┃ ┣ /create.page
 ┃ ┃ ┗ /update.{id}.page
 ┃ ┃
 ┃ ┗ /users.summary.page
 ┃ ┃ ┗ /membership.summary.page
 ┃ ┃ ┃ ┗ /profile.{id}.page
 ┃ ┃
 ┣ /dashboard.summary.page 📊
 ┃ ┣ /events.summary.page
 ┃ ┃ ┗ /event.{slug}.page
 ┃ ┃
 ┃ ┣ /members.summary.page
 ┃ ┃ ┗ /profile.{id}.page
 ┃ ┃
 ┃ ┗ /results.summary.page
 ┃ ┃ ┗ /result.{event-slug}.page
 ┃ ┃
 ┣ /home 🏠
 ┃ ┣ /blog.summary.page
 ┃ ┃ ┗ /blog.{slug}.page
 ┃ ┃
 ┃ ┣ /events.summary.page
 ┃ ┃
 ┃ ┗ /our-mission.page
 ┃ ┃
 ┗ /user 👨
 ┃ ┣ /membership.page 💳
 ┃ ┃
 ┃ ┣ /profile.page
 ┃ ┃
 ┗ ┗ /settings.page
 ```
