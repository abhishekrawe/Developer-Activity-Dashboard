import { Data } from '../interface/utils/totalCalculation';

export const fetchData = async (): Promise<Data> => {
    const response = await fetch('/sample-data.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const jsonData = await response.json() as { data: Data };
    return jsonData.data;
};
