// @ts-ignore
import db from "../data/database";
import { collection, getDocs } from "firebase/firestore/lite";

function PageController () {
    const pages = [];

  async function getPages() {
    const page_list = collection(db, "pages");
    const page_snapshot = await getDocs(page_list);
    console.log(page_snapshot);
  }

  getPages();
};

export default PageController;