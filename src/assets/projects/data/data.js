import DVD from "../dvd_shop.png"
import BreakTime from "../break_time.png"
import CapstoneBooks from "../capstone_books.png"

export const data = [
  {
    id: 1,
    name: "DVD shop",
    image: DVD,
    github: "https://github.com/85Marcin/DVD_shop",
    videoUrl: "/videos/countdown.mp4",
    description: "Inventory Management App",
    technology: "Python Flask MySQL",
    moreInfo: `This CRUD application tracks inventory for a DVD shop.
    It allows the shop owner to manage their inventory, by adding, updating and removing items. Additionally, the app tracks low stock levels and alerts the owner when inventory is running low. It can also calculate profit per item, allowing the owner to make informed decisions about inventory management.`,
  },
  {
    id: 2,
    name: "Break Time App",
    image: BreakTime,
    github: "https://github.com/85Marcin/BreakTime-app",
    videoUrl: "/videos/countdown.mp4",
    description: "Habit tracker",
    technology: "JavaScript React Node Express MongoDB",
    moreInfo:
      "This application allows users to track their coffee and water consumption, as well as monitor their breaks. It presents the data in visual charts to help users better understand their habits and patterns.",
  },
  {
    id: 3,
    name: "Capstone Books",
    image: CapstoneBooks,
    github: "https://github.com/85Marcin/Capstone_Book_Shop",
    videoUrl: "/videos/countdown.mp4",
    description: "E-commerce with login authentication",
    technology: "Typescript React Node Express MongoDB Redux Chakra UI",
    moreInfo: `This application is a bookshop that allows the user to browse selection of books. Users can filter books by category, search for titles using a search bar, and add items to their basket. To checkout, the user must first log in`,
  },
]
