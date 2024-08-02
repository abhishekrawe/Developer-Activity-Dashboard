import { fetchData } from "./dataService";
import { Row } from "../interface/utils/totalCalculation";

export const getUserData = async (name: string): Promise<Row | null> => {
    try {
        const data = await fetchData();
        return data.AuthorWorklog.rows.find((row) => row.name.split("@")[0] === name) || null;
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Error fetching the JSON data");
    }
};
