export interface MenuItem {
  text: string
  path: string
  children: MenuItem[]
}

export const MenuData: MenuItem[] = [
  {
    text: "О нас",
    path: "#navbar1",
    children: [],
  },
  {
    text: "Направления работы",
    path: "#navbar2",
    children: [],
  },
  {
    text: "Исследования",
    path: "#navbar3",
    children: [],
  },
  {
    text: "Мероприятия",
    path: "#navbar4",
    children: [],
  },
  {
    text: "Контакты",
    path: "#navbar5",
    children: [],
  },
  // {
  //   text: "Xizmatlar",
  //   path: "services",
  //   children: [
  //     {
  //       text: "Katering",
  //       path: "/services/catering",
  //     },
  //     {
  //       text: "Konsalting",
  //       path: "/services/consulting",
  //     },
  //   ],
  // },
  // {
  //   text: "Restoranlar",
  //   path: "/restaurants",
  //   children: [],
  // },
  // {
  //   text: "Loyihalar",
  //   path: "projects",
  //   children: [
  //     {
  //       text: "Do’konlar",
  //       path: "/projects/shops",
  //     },
  //     {
  //       text: "Kitoblar",
  //       path: "/projects/books",
  //     },
  //     {
  //       text: "Retseptlar",
  //       path: "/projects/recipes",
  //     },
  //   ],
  // },
  // {
  //   text: "Tadbirlar",
  //   path: "events",
  //   children: [
  //     {
  //       text: "Festivallar",
  //       path: "/events/festivals",
  //     },
  //   ],
  // },
  // {
  //   text: "Kontaktlar",
  //   path: "/contacts",
  //   children: [],
  // },
]
