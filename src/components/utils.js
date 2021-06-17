
let eventsCategory = [{ icon: "far fa-calendar-alt", title: "ALL_EVENTS", text: "All Events", state: false },
  { icon: "fas fa-desktop", title: "WEBINAR", text: "Webinars", state: false },
  { icon: "fas fa-laptop-code", title: "CODING_EVENT", text: "Coding Events", state: false },
  { icon: "fas fa-sitemap", title: "BOOTCAMP_EVENT", text: "Bootcamp Events", state: false },
  { icon: "far fa-file-video", title: "WORKSHOP", text: "Workshop", state: false }];

let eventsSubCategory = [{ title: "Upcoming", text: "Upcoming", state: false },
  { title: "Archived", text: "Archived", state: false },
  { title: "All Time Favorites", text: "All Time Favorites", state: false }];



module.exports = {
  eventsCategory:  eventsCategory,
  eventsSubCategory : eventsSubCategory
}